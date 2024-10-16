/////////////////////////////// JS TOGGLE
// document.querySelectorAll('.js-toggle').forEach( function( toggle ) {
//       let toggled = toggle.querySelector('.js-toggle-toggled')
//       toggle.querySelector('.js-toggle-button').addEventListener('click', function() {
//           if(toggle.classList.contains('CLOSED')) {
//               toggle.classList.remove('CLOSED')
//           } else {
//               toggle.classList.add('CLOSED')              
//           }
//       });
// })

let app = {
    editor$: document.querySelector('#js-editor'),
    asm$: document.querySelector('#js-asm-output'),
    textEditor: new MyTextEditor(),
    assembly: new MyAssembly(),
    godbolt: new Godbolt(),
    storage: new MyLocalStorage(),
}

app.textEditor.Install( app.editor$, app.storage.Get( 'source' ), async ( sourceText ) => {
    
    app.storage.Set( 'source', sourceText )

    let d = await app.godbolt.Download( sourceText ) // @test
    let json = await d.download.json()

    // {text: string}[]
    // obj.stderr

    app.assembly.Begin( app.asm$ )
    {
        {
            let arr = app.textEditor.GetLines()
            for(let i = 0; i < arr.length; i++ )
            {
                let lineNumber = i + 1
                let lineText = arr[ i ]
                app.assembly.AddCSource( lineNumber, lineText )
            }
        }
        
        {
            // {text: string, source?: null|{ file: null, line: number }}    
            let arr = json.asm
            for(let i = 0; i < arr.length; i++ )
            {
                let lineNumber = arr[ i ].source && typeof( arr[ i ].source.line ) == 'number' ? arr[ i ].source.line : null
                let lineText = arr[ i ].text || ''
                app.assembly.AddAsmSource( lineNumber, lineText )
            }
        }
    }
    app.assembly.End( )
})
