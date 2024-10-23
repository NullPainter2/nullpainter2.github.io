class MyAssembly
{
    Clear( parentDiv ) {
        parentDiv.querySelectorAll('.js-code').forEach( x => x.classList.remove('HIGHLIGHTED'))
    }

    OnMouseEnter( event, self, parentDiv ) {
        let dataId = self.getAttribute('data-id')

        parentDiv.querySelectorAll('.js-code').forEach(function(x) {
            if( x.getAttribute('data-id') == self.getAttribute('data-id'))
            {
                x.classList.add('HIGHLIGHTED')
            }
            else
            {
                x.classList.remove('HIGHLIGHTED')
            }
        })
    }

    OnMouseLeave( event, self, parentDiv ) {
        this.Clear( parentDiv );
    }

    OnMouseClick( event, self, parentDiv ) {    
        this.Clear( parentDiv );

        parentDiv.querySelectorAll('.js-code').forEach(function(x) {
            if( x.getAttribute('data-id') == self.getAttribute('data-id'))
            {
                x.classList.add('TOGGLED')
            }
            else
            {
                x.classList.remove('TOGGLED')
            }
        })
    }

    InstallHandlers( parentDiv )
    {
        let codes = parentDiv.querySelectorAll('.js-code')
        for( let i = 0; i < codes.length; i++ )
        {
            codes[i].addEventListener('mouseenter', (e) => this.OnMouseEnter(e,codes[i],parentDiv))
            codes[i].addEventListener('mouseleave', (e) => this.OnMouseLeave(e,codes[i],parentDiv))
            codes[i].addEventListener('click', (e) => this.OnMouseClick(e,codes[i],parentDiv))
        }    
    }

    //////////////////////////////////////////
    
    Begin( parentDiv )
    {
        this.htmlAsmArray = []
        this.htmlCode = ''
        this.htmlDiv = parentDiv // @fixme maybe pass to constructor ???
        this.htmlDiv.innerHTML = ''
    }
    EscapedHtml( str )
    {
        return (new Option( str )).innerHTML
    }
    AddCSource( lineNumber, lineText )
    {
        if( typeof( lineNumber ) != 'number' ) throw new Error('expected number, got ' + typeof( lineNumber ))

        this.htmlCode += '<div class="js-code line" data-id="' + lineNumber + '">' + this.EscapedHtml( lineText ) + '</div>'
    }
    AddAsmSource( lineNumber, lineText )
    {        
        let escapedLineNumber = typeof( lineNumber ) != 'number'? '' : lineNumber
        
        const HasInstruction = ( str ) => {
            let is = true
        
            // b$ = 48
            if( str.match(/[a-z][$]\s=/)) is = false
            // $LN3:
            if( str[ 0 ] == '$' ) is = false
        
            // main    PROC
            // void print(blue const *) ENDP                            ; print
            if( str.match(/PROC|ENDP/)) is = false 

            // unsigned __int64 `__local_stdio_printf_options'::`2'::_OptionsStorage DQ 01H DUP (?) ; `__local_stdio_printf_options'::`2'::_OptionsStorage
            if( str.match( /__local_stdio_printf_options/ )) is = false
            
            if( str.length == 0 ) is = false
         
            return is;
        }

        let textHtml = this.EscapedHtml( lineText )

        // hacky parser
        if( HasInstruction( lineText ))
        {
            try {
                let iarr = Array.from(lineText.matchAll(/^(\s*)([a-z][a-z0-9]+)(.*)$/g))
                let before = iarr[0][1]
                let instruction = iarr[0][2]
                let after = iarr[0][3]
                let url = 'https://www.felixcloutier.com/x86/' + encodeURIComponent( instruction ) // @fixme escape
                textHtml = before + '<a href="' + url + '" target="_blank">' + instruction + '</a>' + after
            }
            catch( e )
            {
                //    
            }
        }
        
        this.htmlAsmArray.push({lineNumber, escapedLineNumber, textHtml });
    }
    End()
    {
        let html = '<div style="display:flex;gap:3rem;overflow:scroll">'

        this.htmlAsm = ''
        let currentDataGroupSize = 0
        let aggregatedDataGroupHtml = ''

        const FinishTheGroup = () =>
        {
            if( currentDataGroupSize >= 1 )
            {
                let HEIGHT = '50px';
                this.htmlAsm += (
                    `<div class="js" style="background: #0080001f;position: relative;">`
                        + `<div
                            onclick="
                                let self = this
                                let toggledStyle = self.parentNode.children[1].style
                                if( toggledStyle.overflow == 'hidden' ) {
                                    toggledStyle.height = ''
                                    toggledStyle.overflow = ''
                                    this.textContent = '-'
                                } else {
                                    toggledStyle.height = '${HEIGHT}'
                                    toggledStyle.overflow = 'hidden'
                                    this.textContent = '+'
                                }
                            "
                            style="background: #000;
                                position: absolute;
                                left: -42px;
                                top: 2px;
                                width: 42px;
                                height: 42px;
                                color: #fff;
                                line-height: 42px;
                                font-size: 31px;
                                text-align: center;
                                font-weight: bold;
                                opacity: .5;
                                user-select: none;
                                cursor: pointer;
                            "
                        >+</div>` 
                        + `<div class="js" style="height: ${HEIGHT};overflow: hidden;">`
                        + aggregatedDataGroupHtml
                        + `</div>`
                    + '</div>'
                )
            }
            currentDataGroupSize = 0
            aggregatedDataGroupHtml = ''
        }
        
        for(let i = 0; i< this.htmlAsmArray.length; i++) {
            let {lineNumber, escapedLineNumber, textHtml } = this.htmlAsmArray[i]

            // group data
            // .voltbl is MSVC stuff https://github.com/llvm/llvm-project/issues/44456
            if( this.htmlAsmArray[i].lineNumber === null && textHtml.match(/((^_DATA)|\W(DD|DQ|DB|ORG|.voltbl))\W/)) {
                currentDataGroupSize += 1
                aggregatedDataGroupHtml += '<div class="line">' + textHtml + '</div>'                                                    
            } else {
                
                FinishTheGroup()
                
                if( escapedLineNumber != '' ) {
                    this.htmlAsm += '<div class="js-code line" data-id="' + escapedLineNumber + '">' + textHtml + '</div>'                
                } else {
                    // unmapped code
                    this.htmlAsm += '<div class="line">' + textHtml + '</div>'                                    
                }
            }

            /*
            if( this.htmlAsmArray[i].lineNumber !== null ) {
                this.htmlAsm += '<div class="js-code line" data-id="' + escapedLineNumber + '">' + textHtml + '</div>'                
            } else {
                if(textHtml.match(/DD|DQ|DB|ORG/)) {
                } else {
                    this.htmlAsm += '<div class="js-code line" data-id="' + escapedLineNumber + '" style="background:#f5f5f5">' + textHtml + '</div>'                
                }
            }
            */
        }
           
        FinishTheGroup()
        
        html += '<div style="width:50%">' + '<h2>C:</h2>' + this.htmlCode + '</div>'
        html += '<div style="width:50%">' + '<h2>Assembly:</h2>' + this.htmlAsm + '</div>'
        html += '</div> <hr>@version .4'

        this.htmlDiv.innerHTML = html
        this.InstallHandlers( this.htmlDiv )
    }
}