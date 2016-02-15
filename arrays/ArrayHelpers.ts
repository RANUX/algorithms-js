
/**
 * ArrayHelpers
 */
export class ArrayHelpers {
    
    
    /**
     * Merge the contents of two arrays together into the first array. 
     * 
     * @param first  array
     * @param second seccond
     */
    merge(first : any[], second : any[]) {
        for (var i in second) 
        {
            first.push(second[i]);
        }
        return first;
    }
    
    /**
     * Remove duplicates from array
     * 
     * @param {any[]} any array with data
     */
    removeDuplicates(a : any[]) {
        var result;
        for (var i = 0; i < a.length; i++) 
        {
            var lastIndex = a.lastIndexOf(a[i]);
            while ( lastIndex > i) 
            {
                a.splice(lastIndex, 1);
                lastIndex = a.lastIndexOf(a[i]);
            }
        }
        
        
    }
}