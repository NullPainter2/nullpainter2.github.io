//
// this is taken from codemirror website source code
//

const {basicSetup, minimalSetup} = CM["codemirror"];
const {EditorView, keymap} = CM["@codemirror/view"];
const {EditorState} = CM["@codemirror/state"];
const {javascript} = CM["@codemirror/lang-javascript"];
const {cpp} = CM["@codemirror/lang-cpp"];
const {indentWithTab}  = CM[ "@codemirror/commands"];

class MyTextEditor
{
    Install( parentDiv, initialSourceCode, initialOptimizationLevel, initialFlags, onTextToAsmClicked )
    {
        this.editorParentDiv = document.createElement('div')         
        this.editorParentDiv.innerHTML = `
            <button style="padding:.5rem" id="js-from-godbolt-link">Insert source from GodBolt link</button>
            <div id="js-codemirror-parent" class="code-editor-parent"></div>
            Optimization level: 
                <select id="js-compiler-optimization" style="padding: .25rem .5rem">
                    <option value=0 ${initialOptimizationLevel=='0'?'selected':''}>O0</option>
                    <option value=1 ${initialOptimizationLevel=='1'?'selected':''}>O1</option>
                    <option value=2 ${initialOptimizationLevel=='2'?'selected':''}>O2</option>
                </select>
            Compiler flags <input id="js-compiler-flags" style="padding: .25rem .5rem"/>
            <div style="height:1rem"></div>
            <button id="js-submit" style="padding: .5rem">To assembly</button>
        `
        parentDiv.appendChild( this.editorParentDiv )

        this.sourceFromGodboltDiv = this.editorParentDiv.querySelector('#js-from-godbolt-link')
        this.editorElementDiv = this.editorParentDiv.querySelector('#js-codemirror-parent')
        this.submitDiv = this.editorParentDiv.querySelector('#js-submit')
        this.compilerFlagsDiv = this.editorParentDiv.querySelector('#js-compiler-flags')
        this.compilerOptimizationDiv = this.editorParentDiv.querySelector('#js-compiler-optimization')

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
            let shortLink = prompt('Enter godbolt link')
            let result = app.godbolt.DownloadSource( shortLink )
            if( ! result.ok )
            {
                alert( result.errorMessage )
                return null
            }
                
            result.download.then(response => {
                response.text().then(text => {
                    console.log({text})
                    if( !text )
                    {
                        alert('Godbolt returned empty text.Not changing current one.')
                    }
                    else 
                    {
                        SetCodemirrorText( this.codemirror, text )                    
                    }
                })
            })
        }
        this.codemirror = new EditorView({
            doc: initialSourceCode,
            extensions: [
                //minimalSetup
                basicSetup,
                keymap.of([indentWithTab]),
                cpp()
            ],
            parent: this.editorElementDiv
        })
    
        this.submitDiv.addEventListener('click', (e) => {
            let text = this.codemirror.state.sliceDoc()
            
            // @todo throttle this
            onTextToAsmClicked( text, +(this.compilerOptimizationDiv.value), this.compilerFlagsDiv.value )
        })
    }

    GetLines()
    {
        return this.codemirror.state.sliceDoc().split("\n")
    }
}
