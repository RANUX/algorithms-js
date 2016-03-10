import { ISort } from './ISort';
import { swap }  from '../helpers/ArrayHelpers'
import { InsertionSort } from './SimpleSort'

/**
 * QuickSortM (QuickSort Median). ( N(logN) in most cases )
 * 
 * @export
 * @class QuickSort
 * @implements {ISort}
 */
export default class QuickSortM implements ISort {
    
    array : any[];
    
    private insSort : InsertionSort;
    /**
     *
     */
    constructor() {
        this.insSort = new InsertionSort();
    }
    
    sort( array : any[],  compareFn?: any ) : any[]
    {
        this.array = array;
        this.quickSortMedianPivot( 0, this.array.length-1);

        return this.array;
    }
    
    quickSortMedianPivot(left, right )
    {
        var size = right-left+1;
        
        if ( size <= 3 )            // do some simple sort
        {
            this.manualSort(left, right, size);
        }
        else {
            var pivot = this.medianOf3(left, right);                     // Median item
            
            var randeIndex = this.splitToParts( left, right, pivot );
            
            this.quickSortMedianPivot( left, randeIndex-1 );          // sort left side
            this.quickSortMedianPivot( randeIndex+1, right );         // sort right side
            
        }
    }
    
    splitToParts(left :number, right :number, pivot :any) : number
    {
        var l = left;
        var r = right-1;
        
        while (true)
        {
            while ( this.array[++l] < pivot );     // nop
            while ( this.array[--r] > pivot );     // nop

            if ( l >= r )
                break;
            else
                swap(l, r, this.array);
        }
        swap( l, right-1, this.array );  // restore pivot
        return l;
    }
    
    medianOf3(l, r)
    {
        var m = Math.floor((l+r) / 2); // median
        
        if ( this.array[l] > this.array[m])
        {
            swap(l, m, this.array);
        }
        
        if ( this.array[l] > this.array[r])
        {
            swap(l, r, this.array);
        }
        
        if ( this.array[m] > this.array[r])
        {
            swap(m, r, this.array);
        }
        
        swap(m, r-1, this.array);    // put pivot on right
        return this.array[ r-1 ];      // return median value
    }
    
    manualSort( l, r, size )
    {
        if ( size <= 1)
            return;
        
        if ( size == 2)
        {
            if ( this.array[l] > this.array[r])
                swap( l, r, this.array );
        }
        else 
        {
            if( this.array[l] > this.array[r-1] )
                swap( l, r-1, this.array );               // left, center
            
            if( this.array[l] > this.array[r] )
                swap( l, r, this.array);                  // left, right
            
            if( this.array[r-1] > this.array[r] )
                swap(r-1, r, this.array );                // center, right
        }
    }
}

