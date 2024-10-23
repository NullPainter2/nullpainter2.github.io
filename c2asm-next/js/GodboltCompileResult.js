/*
USAGE: 

    // something like this
    
    result = godbolt.Download()
    GodboltCompileResult.Set( result.json() )


    let err = GodboltCompileResult.ErrorForLine( lineNumber ) // 1,2,...
    if( err.exists )
    {
        alert( err.text )
    }
*/
class GodboltCompileResult {
    Set( json )
    {
        this.json = json
    }
    ErrorForLine( lineNumber )
    {
        if( lineNumber < 1 ) 
        {
            throw new Error('lineNumber >= 1!')
        }
/*
{
    "inputFilename": "C:\\Windows\\TEMP\\compiler-explorer-compiler2024923-3372-1msddz7.00rw\\example.cpp",
    "code": 2,
    "okToCache": true,
    "timedOut": false,
    "stdout": [
        {
            "text": "example.cpp"
        },
        {
            "text": "<source>(24): fatal error C1004: unexpected end-of-file found",
            "tag": {
                "line": 24,
                "column": 0,
                "text": "fatal error C1004: unexpected end-of-file found",
                "severity": 3,
                "file": "example.cpp"
            }
        }
    ],
*/    
        if( !this.json || ! this.json.stdout ) return {exists: false}

        let result = null
        for( let i = 0; i < this.json.stdout.length; i++ )
        {
            if( this.json.stdout[ i ].tag )
            {
                if( this.json.stdout[ i ].tag.line === lineNumber )
                {
                    result = this.json.stdout[ i ].tag.text

                    break
                }
            }
        }

        return result? {exists: true, text: result} : {exists: false}
    }
}