import absSortTests = require('./AbstractSortTests')
import * as isort  from "../../sort/ISort";
import MergeSort  from "../../sort/MergeSort";
/**
 * MergeSortTests
 */
export class MergeSortTests extends absSortTests.AbstractSortTestsTests {
    
    protected createSorting() : isort.ISort {
        return new MergeSort();
    }
    
    testMergeSortedArrays() {
        //console.log('--------- test Merge -------');
        var a = [5, 22, 57, 71, 95, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        var result = new Array(a.length);

        var mid =  0 + Math.floor( (a.length - 0) / 2 ); // 5
   
        
        var sorter = new MergeSort();
        sorter.array = a;
        sorter.merge(0, mid, a.length-1, result );
        //console.log(result);
        this.areCollectionsIdentical(m, result);
        //console.log('--------- end Merge -------');
        
    }
}