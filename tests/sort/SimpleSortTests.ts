import absSortTests = require('./AbstractSortTests')
import * as isort  from "../../sort/ISort";
import * as simpsort  from "../../sort/SimpleSort";

export class BubbleSortTests extends absSortTests.AbstractSortTestsTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.BubbleSort();
    }
    
}

export class SelectionSortTests extends absSortTests.AbstractSortTestsTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.SelectionSort();
    }
    
}

export class InsertionSortTests extends absSortTests.AbstractSortTestsTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.InsertionSort();
    }
    
}