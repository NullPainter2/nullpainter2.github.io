//
// this is taken from codemirror website source code
//

const {basicSetup, minimalSetup} = CM["codemirror"];
const {EditorView, keymap} = CM["@codemirror/view"];
const {EditorState} = CM["@codemirror/state"];
const {javascript} = CM["@codemirror/lang-javascript"];
const {cpp} = CM["@codemirror/lang-cpp"];
const {indentWithTab}  = CM[ "@codemirror/commands"];

////////////////////////////////////////////////////////////////

//
// based on https://codemirror.net/examples/decoration/#boolean-toggle-widgets
//

const {WidgetType} = CM["@codemirror/view"]

class MyCodeMirrorEOLWidget extends WidgetType {
    constructor(text) 
    {
        super()
        this.TEXT = text
    }

    toDOM()
    {
        let wrap = document.createElement("span")
        wrap.style.color = 'red'
        wrap.style.fontStyle = 'italic'
        wrap.style.padding = '0 0 0 1rem'
        wrap.textContent = this.TEXT
        return wrap
    }

    ignoreEvent() { return false }
}

const {/* EditorView, */ Decoration} = CM["@codemirror/view"]
const {syntaxTree} = CM[ "@codemirror/language"]

function MyCodeMirrorDecorator(view) { // EditorView
  let widgets = []

  if(app.textEditor.codemirror)
  {
        // for each line

        for( let lineNumber = 1; lineNumber <= app.textEditor.codemirror.state.doc.lines; lineNumber++ )        
        {
            let line = app.textEditor.codemirror.state.doc.line( lineNumber )
    
            let eolPos = line.to
            let error = app.godboltCompileResult.ErrorForLine( lineNumber )
            let errorText = ''

            if( error.exists )
            {
                errorText += error.text
            }
            // sometimes the error is on one line which doesn't exist, like unexpected end of file (MSVC)
            if( lineNumber === app.textEditor.codemirror.state.doc.lines && app.godboltCompileResult.ErrorForLine( lineNumber + 1 ).exists )
            {
                errorText += ( errorText? " ... " : "" ) + app.godboltCompileResult.ErrorForLine( lineNumber + 1 ).text
            }

            // append erorr message at the end of line
            if( errorText )
            {
                let deco = Decoration.widget({
                    widget: new MyCodeMirrorEOLWidget( errorText ),
                    side: 1
                })
                widgets.push( deco.range( eolPos ))
            }
        }
    }
    return Decoration.set(widgets)
}

const {ViewUpdate, ViewPlugin, DecorationSet} = CM["@codemirror/view"]

const checkboxPlugin = ViewPlugin.fromClass(class {
    // decorations: DecorationSet
    
    constructor(view){//}: EditorView) {
        this.decorations = MyCodeMirrorDecorator(view)
    }

    //
    // editor has been updated, even on button click!
    //
    update(update) // https://codemirror.net/docs/ref/#view.ViewUpdate
    {
        if(
            update.focusChanged || 
            update.docChanged || update.viewportChanged ||
            syntaxTree(update.startState) != syntaxTree(update.state)
        )
        {
            this.decorations = MyCodeMirrorDecorator(update.view)            
        }
    }
}, {
  decorations: v => v.decorations, // ???

//
// global even listener on any document event
// 
  // eventHandlers: {
  //   mousedown: (e, view) => {
  //     let target = e.target //as HTMLElement
  //     if (target.nodeName == "INPUT" &&
  //         target.parentElement.classList.contains("cm-boolean-toggle"))
  //       return toggleBoolean(view, view.posAtDOM(target))
  //   }
  // }
})

////////////////////////////////////////////////////////////////

class MyTextEditor
{
    Install( parentDiv, initialSourceCode, initialOptimizationLevel, initialFlags, onTextToAsmClicked )
    {
        let compilerInfo = {
            // MSVC
            flagsUrl: 'https://learn.microsoft.com/en-us/cpp/build/reference/compiler-options-listed-by-category?view=msvc-170'
        }
        
        this.editorParentDiv = document.createElement('div')         
        this.editorParentDiv.innerHTML = `
            
            <button style="padding:.5rem" id="js-from-godbolt-link">Get source code from GodBolt url</button> It will open in new window, so copy paste code. <i>GodBolt's api has CORS there, so source code can't be obtained more simply</i>
            
            <div id="js-codemirror-parent" class="code-editor-parent"></div>
            Optimization level: 
                <select id="js-compiler-optimization" style="padding: .25rem .5rem">
                    <option value=0 ${initialOptimizationLevel=='0'?'selected':''}>O0</option>
                    <option value=1 ${initialOptimizationLevel=='1'?'selected':''}>O1</option>
                    <option value=2 ${initialOptimizationLevel=='2'?'selected':''}>O2</option>
                </select>
            Compiler flags <input id="js-compiler-flags" style="padding: .25rem .5rem"/> <a href="${compilerInfo.flagsUrl}" target=_blank>All flags</a>
            <div style="height:1rem"></div>
            <button id="js-submit" style="padding: .5rem">To assembly</button>

            <progress id="js-progressDiv" style="opacity:0; transition: opacity .2s ease;"></progress>
            <span id="js-hasErrorDiv" style="color:red;opacity:0; transition: opacity .2s ease">Compilation has errors, click/tap to editor to see where (@todo refresh how?)</span>
        `
        parentDiv.appendChild( this.editorParentDiv )

        this.sourceFromGodboltDiv = this.editorParentDiv.querySelector('#js-from-godbolt-link')
        this.editorElementDiv = this.editorParentDiv.querySelector('#js-codemirror-parent')
        this.submitDiv = this.editorParentDiv.querySelector('#js-submit')
        this.compilerFlagsDiv = this.editorParentDiv.querySelector('#js-compiler-flags')
        this.compilerOptimizationDiv = this.editorParentDiv.querySelector('#js-compiler-optimization')
        this.progressDiv = this.editorParentDiv.querySelector('#js-progressDiv')
        this.hasErrorDiv = this.editorParentDiv.querySelector('#js-hasErrorDiv')

        // ... remaining initialization
        this.compilerFlagsDiv.value = initialFlags

        function SetCodemirrorText( codemirror, newText )
        {
            // https://codemirror.net/docs/guide/ ... State and Updates
            codemirror.dispatch(
                codemirror.state.update(
                    {
                        changes: 
                        {
                            from: 0, 
                            to: codemirror.state.doc.length,
                            insert: newText 
                        }
                    }
               )
            )            
        }
        
        this.sourceFromGodboltDiv.onclick = () => {
            let shortLink = prompt('Enter godbolt link -> window with source will open')

            if( shortLink === null ) return
            
            let result = app.godbolt.GetSourceLinkFromShortLink( shortLink )
            if( ! result.ok )
            {
                alert( result.errorMessage )
                return
            }

            window.open( result.value )                
        }
        
        this.codemirror = new EditorView({
            doc: initialSourceCode,
            extensions: [
                //minimalSetup
                basicSetup,
                keymap.of([indentWithTab]),
                cpp(),
                checkboxPlugin,
            ],
            parent: this.editorElementDiv
        })
    
        this.submitDiv.addEventListener('click', (e) => {
            let text = this.codemirror.state.sliceDoc()
            
            // @todo throttle this
            onTextToAsmClicked( text, +(this.compilerOptimizationDiv.value), this.compilerFlagsDiv.value )
        })
    }

    SetLoading( bool )
    {
        this.progressDiv.style.opacity = bool? 1: 0
    }

    GetLines()
    {
        return this.codemirror.state.sliceDoc().split("\n")
    }

    GetCompiler()
    {
        return "vcpp_v19_latest_x64"
    }

    SetHasError( bool )
    {
        this.hasErrorDiv.style.opacity = bool? 1: 0
    }
}
