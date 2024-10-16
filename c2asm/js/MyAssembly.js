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
        this.htmlAsm = ''
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
        this.htmlAsm += '<div class="js-code line" data-id="' + escapedLineNumber + '">' + this.EscapedHtml( lineText ) + '</div>'
    }
    End()
    {
        let html = '<div style="display:flex;gap:3rem;overflow:scroll">'
        html += '<div style="width:50%">' + '<h2>C:</h2>' + this.htmlCode + '</div>'
        html += '<div style="width:50%">' + '<h2>Assembly:</h2>' + this.htmlAsm + '</div>'
        html += '</div> <hr>@version .2'

        this.htmlDiv.innerHTML = html
        this.InstallHandlers( this.htmlDiv )
    }
}