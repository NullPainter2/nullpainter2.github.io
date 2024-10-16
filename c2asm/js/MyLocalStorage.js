class MyLocalStorage
{
    // @maybe it has size limit of few MB (can be tested by testing if text is saved whole)
    
    Get( key )
    {
        return localStorage.getItem( key )
    }

    Set( key, value )
    {
        if( typeof( value ) != 'string' ) throw new Error('fuck of and convert it to string bro')

        localStorage.setItem( key, value )
    }
}