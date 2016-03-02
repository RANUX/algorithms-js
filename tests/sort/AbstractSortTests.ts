import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import * as isort  from "../../sort/ISort";
import shuffle = require('knuth-shuffle');

export abstract class AbstractSortTestsTests extends tsUnit.TestClass {
    
    unsorted       : any[] = [ "d", "ada", "csharp", "cpp", "db", "python", "cpp", "node", "js", "php"];
    sorting        : isort.ISort;
    sorted         : any[];
    
    
    protected abstract createSorting() : isort.ISort;
    
    setUp() {
        this.sorting = this.createSorting();
        
        // randomize unsorted
        shuffle.knuthShuffle(this.unsorted);
        this.sorted = this.unsorted.sort( (a, b) => b - a );
        
    }
    
    testSortSimpleArray()
    {
        this.areCollectionsIdentical( this.sorted, this.sorting.sort(this.unsorted));
    }
    
}