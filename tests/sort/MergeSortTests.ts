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
    
}