class Godbolt
{
    // defaultFlags()
    // {
    //     return "/DEBUG /O0:FULL /Z7 /Zo /Zi";
    // }

    GetSourceLinkFromShortLink( shortenedUrl )
    {
        let godboltUrl = shortenedUrl
        godboltUrl = godboltUrl.replace(/[/]$/,'') // don't double /
        godboltUrl = godboltUrl + '/code/1'

        // already converted?
        if( shortenedUrl.match(/[/]code[/]1$/) !== null )
        {
            return {
                ok: true,
                value: shortenedUrl,
            }
        }

        // wrong link or conversion?
        if( godboltUrl.match(/godbolt.org[/]z/) === null)
        {
            return {
                ok: false,
                errorMessage: 'Unknown short link format'
            }
        }
        
        return {
            ok: true,
            value: godboltUrl,
        }
    }

    async Download( sourceCode = "", compiler = "vcpp_v19_latest_x64", optimizationLevel = 0, compilerFlags = "/DEBUG /Z7 /Zo /Zi" )
    {
        // Pasted and claned from Godbold page. It is official api, so it is chill.

        compilerFlags = (
            optimizationLevel === 2? '/O2' 
            :
            optimizationLevel === 1? '/O1' 
            :
            '/O0'  // does MSVC even has this?
        ) + compilerFlags

        let downloadArgs = {
            "source": sourceCode, // "//\n// Including this stl file generates so much extra code :(\n//\n// #include <iostream>\n\n#include <stdio.h>\n#include <stdlib.h>\n\nstruct red \n{\n    int x = 0;\n};\n\nstruct blue \n{\n    int y = 0;\n    const void* pNext;\n};\n\nvoid print(const blue* b)\n{\n//    std::cout << \"This will not crash in debug: \" << reinterpret_cast<const red*>(b->pNext)->x << std::endl;\n    printf(\"%d\", reinterpret_cast<const red*>(b->pNext)->x);\n}\n\nint main(int arg, char **argv) \n{\n    int x;\n    int val;\n    val = atoi(argv[1]); // std::cin >> val;\n\n    blue b;\n\n    if (val != 0)\n    {\n        red r {10};\n        b.pNext = &r;\n    }\n    else \n    {\n        b.pNext = nullptr;\n    }\n\n    b.y = 99;\n    print(&b);\n\n   return 0;\n}",
            "compiler": compiler, // "vcpp_v19_latest_x64",
            "options": {
                "userArguments": compilerFlags, // "/DEBUG /O0:FULL /Z7 /Zo /Zi",
                "compilerOptions": {
                    "producePp": null,
                    "produceGccDump": {},
                    "produceOptInfo": false,
                    "produceCfg": false,
                    "produceIr": null,
                    "produceOptPipeline": null,
                    "produceDevice": false,
                    "overrides": []
                },
                "filters": {
                    "binaryObject": false,
                    "binary": false,
                    "execute": false,
                    "intel": true,
                    "demangle": true,
                    "labels": true,
                    "libraryCode": true,
                    "directives": true,
                    "commentOnly": true,
                    "trim": false,
                    "debugCalls": false
                },
                "tools": [],
                "libraries": [],
                "executeParameters": {
                    "args": "",
                    "stdin": ""
                }
            },
            "lang": "c++",
            "files": [],
            "bypassCache": 0,
            "allowStoreCodeDebug": true
        }

        let download = await fetch(
            "https://godbolt.org/api/compiler/" + compiler + "/compile",
           {
                "headers": {
                    "accept": "application/json, text/javascript, */*; q=0.01",
                    "content-type": "application/json",
                },
                //"referrer": "https://godbolt.org/z/js5njzqMW", // PSSSST! Had to store a credit card number somewhere safe ...
                //"referrerPolicy": "strict-origin-when-cross-origin",
                "body": JSON.stringify( downloadArgs ), // "{\"source\":\"//\\n// Including this stl file generates so much extra code :(\\n//\\n// #include <iostream>\\n\\n#include <stdio.h>\\n#include <stdlib.h>\\n\\nstruct red \\n{\\n    int x = 0;\\n};\\n\\nstruct blue \\n{\\n    int y = 0;\\n    const void* pNext;\\n};\\n\\nvoid print(const blue* b)\\n{\\n//    std::cout << \\\"This will not crash in debug: \\\" << reinterpret_cast<const red*>(b->pNext)->x << std::endl;\\n    printf(\\\"%d\\\", reinterpret_cast<const red*>(b->pNext)->x);\\n}\\n\\nint main(int arg, char **argv) \\n{\\n    int x;\\n    int val;\\n    val = atoi(argv[1]); // std::cin >> val;\\n\\n    blue b;\\n\\n    if (val != 0)\\n    {\\n        red r {10};\\n        b.pNext = &r;\\n    }\\n    else \\n    {\\n        b.pNext = nullptr;\\n    }\\n\\n    b.y = 99;\\n    print(&b);\\n\\n   return 0;\\n}\",\"compiler\":\"vcpp_v19_latest_x64\",\"options\":{\"userArguments\":\"/DEBUG /O0:FULL /Z7 /Zo /Zi\",\"compilerOptions\":{\"producePp\":null,\"produceGccDump\":{},\"produceOptInfo\":false,\"produceCfg\":false,\"produceIr\":null,\"produceOptPipeline\":null,\"produceDevice\":false,\"overrides\":[]},\"filters\":{\"binaryObject\":false,\"binary\":false,\"execute\":false,\"intel\":true,\"demangle\":true,\"labels\":true,\"libraryCode\":true,\"directives\":true,\"commentOnly\":true,\"trim\":false,\"debugCalls\":false},\"tools\":[],\"libraries\":[],\"executeParameters\":{\"args\":\"\",\"stdin\":\"\"}},\"lang\":\"c++\",\"files\":[],\"bypassCache\":0,\"allowStoreCodeDebug\":true}",
                "method": "POST",
                //  "mode": "cors", // FUCK CORS CURSE!
                //  "credentials": "include"
            }
        );

        return {
            download
        }
    }
    
}