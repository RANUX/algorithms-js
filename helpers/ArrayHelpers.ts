
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

export function swap(i :number, j :number, array :any[])
{
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
}


/**
 * Compare string in descending order
 * 
 * @export
 * @param a (description)
 * @param b (description)
 * @returns {number} (description)
 */
export function compareStrDesc(a, b) : number {
    if (a>b) return -1;
    else if (a<b) return 1;
    else return 0;
}


export function checkSorted( a :any[], isDump = false ) :boolean
{
    var l = -1;
    var r = a.length;
    
    
    var pivotIndex = Math.floor( a.length/2 );
    var pivot = a[ pivotIndex ];
    

    while ( a[++l] <= pivot );     // nop
    while ( a[--r] >= pivot );     // nop

    if ( isDump )
    {
        console.log('pivotIndex: ' + pivotIndex + '  pivot: ' + pivot );
        console.log('l: ' + l + ' r: ' + r);
        for (var i = 5; i >= -5; i--) {
            console.log('i: ' +i + '  a['+(l-i)+']: ' + a[l-i] + '  a['+(r+i)+']: ' + a[r+i]);
        }
    }
    return (a[l-1] === a[r+1]);
}