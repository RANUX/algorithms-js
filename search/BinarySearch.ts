import * as isearch from './ISearch'
/**
 * BinarySearch find index of value in sorted array
 */
export default class BinarySearch implements isearch.ISearch {
    
    private array : any[];
    

    /**
     * Search index of value in array
     * 
     * @param {*} value any
     * @param {any[]} array any
     * @returns {number} index of value in array
     */
    indexOf ( value :any, array :any[] ) :number{
        this.array = array;
        
        var lowBound = 0;
        var upBound = this.array.length-1;
        var index = -1;

        while (true)
        {
            var mid = Math.floor( (lowBound + upBound ) / 2 );
            
            if ( this.array[ mid ] == value)
                return mid;
            else if ( lowBound > upBound )
                return index;
            else {
                if ( value < this.array[ mid ] )
                    upBound = mid-1;
                else
                    lowBound = mid+1;
            }
                
        }
    }
}