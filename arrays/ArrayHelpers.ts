
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
}