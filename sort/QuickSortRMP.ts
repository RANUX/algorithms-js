import { ISort } from './ISort';
import { swap }  from '../helpers/ArrayHelpers'


/**
 * QuickSortRMP (QuickSort Rightmost Pivot) good for random items in array. 
 * ( Best  N(logN) - random, worse O(N^2) - sorted arrays)
 * 
 * @export
 * @class QuickSort
 * @implements {ISort}
 */
export default class QuickSortRMP implements ISort {
    
    array : any[];
    
    sort( array : any[],  compareFn?: any ) : any[]
    {
        this.array = array;
        this.quickSortRightmostPivot( 0, this.array.length-1);
        return this.array;
    }
    
    quickSortRightmostPivot(left, right)
    {
        if ( left >= right )                                             // sorted, size <= 1
            return;
        else {
            var pivot = this.array[right];                               // rightmost item
            
            var rangeIndex = this.splitToParts( left, right, pivot );
            
            this.quickSortRightmostPivot( left, rangeIndex-1 );          // sort left side
            this.quickSortRightmostPivot( rangeIndex+1, right );         // sort right side
            
        }
    }
    
    splitToParts(left :number, right :number, pivot :any) : number
    {
        var l = left - 1;
        var r = right;
        
        while (true)
        {
            while ( this.array[++l] < pivot );     // nop
            while ( this.array[--r] > pivot );     // nop

            if ( l >= r )
                break;
            else
                swap(l, r, this.array);
        }
        swap( l, right, this.array );  // restore pivot
        return l;
    }
};
