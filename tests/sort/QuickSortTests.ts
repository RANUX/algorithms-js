import { AbstractSortTests } from './AbstractSortTests';
import * as isort  from "../../sort/ISort";
import QuickSort from '../../sort/QuickSort';
import * as ahelp from '../../helpers/ArrayHelpers'
/**
* QuickSortTests
*/
export class QuickSortTests extends AbstractSortTests {

    protected createSorting() : isort.ISort {
        return new QuickSort();
    }

    testSplitToParts() {
        var sorting = (<QuickSort> this.sorting);
        var array = sorting.array = [3, 2, 5, 4, 6, 10, 1, 11, 9, 7];

        sorting.splitToParts(0, array.length-1, array[ array.length-1 ]);
        this.areCollectionsIdentical( [3,2,5,4,6,1,7,11,9,10], sorting.array );

        array = [1];
        sorting.array = ahelp.shallowCopy( array );
        sorting.splitToParts(0, array.length-1, 1);
        this.areCollectionsIdentical( [1], sorting.array );
   
    }
    
}