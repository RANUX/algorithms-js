
/**
 * ArrayHelpers
 */

    
/**
 * Merge the contents of two arrays together into the first array. 
 * 
 * @param first  array
 * @param second seccond
 */
export function merge(first : any[], second : any[]) {
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
export function removeDuplicates(a : any[]) {
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


export function isEmpty(array : any[])
{
    return (array.length === 0);
}

export function isNotEmpty(array : any[])
{
    return (array.length !== 0);
}

export function shallowCopy(a :any[]) :any[]
{
    var result = [];
    
    if ( a.length == 0 )
        return result;
    
    for (var index = 0; index < a.length; index++) {
        result.push( a[index] );
    }
    
    return result;
}


export function makeIterator(array){
    var first   = 0;
    var last    = array.length-1;
    var current = 0;
    
    return {
       current : function() {
           return array[ current ]; 
       },
       done : function () {
           return current < first || current > last;
       },
       next: function(){
           current++;
       }
       
       
    }
}