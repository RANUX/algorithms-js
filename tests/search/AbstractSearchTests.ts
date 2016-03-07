import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import * as isort  from "../../search/ISearch";
import shuffle = require('knuth-shuffle');

export abstract class AbstractSearchTestsTests extends tsUnit.TestClass {
    
    sortedStr         : string[] = [ "ada", "csharp", "db",  "node", "php", "python" ];
    search            : isort.ISearch;
    sortedNum         : number[] = [ 1, 3, 4, 6, 8, 9, 10 ];
    
    
    protected abstract createSearch() : isort.ISearch;
    
    setUp() {
        this.search = this.createSearch();
    }
    
    testIndexOfStrArray()
    {
        for (var i = 0; i < this.sortedStr.length; i++) {
            var element = this.sortedStr[i];
            this.areIdentical( i, this.search.indexOf(element, this.sortedStr) );
        }
    }
    
    testIndexOfNumArray()
    {
        for (var i = 0; i < this.sortedNum.length; i++) {
            var element = this.sortedNum[i];
            this.areIdentical( i, this.search.indexOf(element, this.sortedNum));
        }
    }
    
}