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
    Install( parentDiv, initialSourceCode, onTextToAsmClicked )
    {
        this.editorParentDiv = document.createElement('div')         
        this.editorParentDiv.innerHTML = `
            <div id="js-codemirror-parent" class="code-editor-parent"></div>
            <button id="js-submit">To assembly</button>
        `
        parentDiv.appendChild( this.editorParentDiv )

        this.editorElementDiv = this.editorParentDiv.querySelector('#js-codemirror-parent')
        this.submitDiv = this.editorParentDiv.querySelector('#js-submit')

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
            onTextToAsmClicked( text )
        })
    }

    GetLines()
    {
        return this.codemirror.state.sliceDoc().split("\n")
    }
}
