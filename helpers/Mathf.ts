/**
 * Mathf
 */
export default class Mathf {
    
    static log10(x) {
        return Math.log(x) / Math.LN10;
    };
    
    
    /**
     * Get number of digits in positive int value;
     * 
     * @static
     * @param {number} n > 0
     * @returns num of digits
     */
    static numOfDigits(n :number )
    {
        return Math.floor( Mathf.log10( n ) + 1 );
    }
    
     /**
     *  The Math.pow() function returns the base to the exponent power, that is, base^exponent
     * 
     * @static
     * @param {number} base (description)
     * @param {number} exp (description)
     * @returns {number} (description)
     */
    static pow(base :number, exp :number) :number {
        if ( exp < 0 )
            throw "Only for positive exponent";
            
        if ( exp == 0 )
            return 1;
        else if ( exp === 1)
            return base;
        
        
        var r =  this.pow( base*base, Math.floor( exp/2 ));
        
        if ( exp % 2 == 1 )
            r = base * r;
            
        return r;
    }
}