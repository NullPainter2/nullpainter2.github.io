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
    godboltCompileResult: new GodboltCompileResult(),
    storage: new MyLocalStorage(),
}

app.textEditor.Install(
    app.editor$,
    app.storage.Get( 'source' ),
    app.storage.Get( 'optimizationLevel' ),
    app.storage.Get( 'compilerFlags' ),
    async ( sourceText, optimizationLevel, flags ) => {
        
        app.storage.Set( 'source', sourceText )
    
        // "/DEBUG /O0:FULL /Z7 /Zo /Zi"
        app.storage.Set( 'compilerFlags', flags )
        app.storage.Set( 'optimizationLevel', String(optimizationLevel) ) 
    
        //app.storage.Set( 'compiler', compiler )
        let compiler = app.textEditor.GetCompiler()

        app.textEditor.SetLoading(true)
        let d = await app.godbolt.Download( sourceText, compiler, optimizationLevel, flags ) // @test
        let json = await d.download.json()

        app.godboltCompileResult.Set( json )
        app.textEditor.SetLoading(false)
        app.textEditor.SetHasError( json.code != 0 ) // Tested on: MSVC

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
                let stripingInitalComments = true // MSVC license bs
                for(let i = 0; i < arr.length; i++ )
                {
                    let lineNumber = arr[ i ].source && typeof( arr[ i ].source.line ) == 'number' ? arr[ i ].source.line : null
                    let lineText = arr[ i ].text || ''
    
                    if( stripingInitalComments ) {
                        if( lineText[0] == '#' ) {
                            continue;
                        }
                        stripingInitalComments = false
                    }
                    
                    app.assembly.AddAsmSource( lineNumber, lineText )
                }
            }
        }
        app.assembly.End( )
    }
)
