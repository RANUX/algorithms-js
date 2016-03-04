import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import * as isort  from "../../sort/ISort";
import shuffle = require('knuth-shuffle');

export abstract class AbstractSortTestsTests extends tsUnit.TestClass {
    
    unsortedStr       : any[] = [ "d", "ada", "csharp", "cpp", "db", "python", "cpp", "node", "js", "php"];
    unsortedNum       : any[] = [ 3, 4, 10, 1, 6, 8, 9];
    sorting        : isort.ISort;
    sortedStr         : any[];
    sortedNum         : any[] = [ 1, 3, 4, 6, 8, 9, 10 ];
    
    
    protected abstract createSorting() : isort.ISort;
    
    setUp() {
        this.sorting = this.createSorting();
        
        // randomize unsorted
        shuffle.knuthShuffle(this.unsortedStr);
        this.sortedStr = this.unsortedStr.sort( );
        
    }
    
    testSortStringArray()
    {
        this.areCollectionsIdentical( this.sortedStr, this.sorting.sort(this.unsortedStr));
    }
    
    testSortNumArray()
    {
        this.areCollectionsIdentical( this.sortedNum, this.sorting.sort(this.unsortedNum));
    }
    
}