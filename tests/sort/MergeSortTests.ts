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
        var l = [22, 57, 71, 95];
        var r = [5, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        //      [ 5, 13, 49, 63, 78, 89 ]
        
        var sorter = new MergeSort();
        this.areCollectionsIdentical(m, sorter.merge(l, r));
        
        
    }
}