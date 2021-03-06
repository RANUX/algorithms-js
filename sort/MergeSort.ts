import * as isort from "./ISort"

/**
 * MergeSort optimized
 */
export default class MergeSort implements isort.ISort {
    
    public array : any[];
    
    sort( array :any[], compareFn ) :any[]
    {
        var result = new Array(array.length);
        this.array = array;
        
        this.mergeSort( result, 0, array.length-1, compareFn);
        return result;
    }
    
    mergeSort( resultArray :any[], startIndex :number, endIndex :number,  compareFn :any) :any[]
    {
        if ( startIndex >= endIndex  ) {
            return;
        }
        var mid = Math.floor( ( startIndex + endIndex ) / 2 );
        
        this.mergeSort( resultArray, startIndex, mid, compareFn);
        this.mergeSort( resultArray, mid+1, endIndex, compareFn);
        
        this.merge(startIndex, mid+1, endIndex, resultArray, compareFn);
    }
    
    merge( l, r, upBound, resultArray, compareFn = (a,b) => { return a < b } )
    {
        
        var j = 0;                        // resultArray index
        var lowBound = l;
        var mid = r-1;
        var n = upBound-lowBound+1;       // # of items
        
        
        while(l <= mid && r <= upBound)             // left an right array is not empty
            if( compareFn( this.array[l], this.array[r] ) )
                resultArray[j++] = this.array[l++];
            else
                resultArray[j++] = this.array[r++];

        while(l <= mid)                             // if left contains elements
            resultArray[j++] = this.array[l++];

        while(r <= upBound)                         // if right contains elements
            resultArray[j++] = this.array[r++];
 
        for(j=0; j<n; j++)                          // replace unsorted to sorted items
            this.array[lowBound+j] = resultArray[j];

    }
    
    
}