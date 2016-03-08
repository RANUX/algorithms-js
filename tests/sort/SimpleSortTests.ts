import { AbstractSortTests } from './AbstractSortTests';
import * as isort  from "../../sort/ISort";
import * as simpsort  from "../../sort/SimpleSort";

export class BubbleSortTests extends AbstractSortTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.BubbleSort();
    }
    
}

export class SelectionSortTests extends AbstractSortTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.SelectionSort();
    }
    
}

export class InsertionSortTests extends AbstractSortTests {
    
    protected createSorting() : isort.ISort {
        return new simpsort.InsertionSort();
    }
    
}