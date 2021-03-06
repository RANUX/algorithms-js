import * as tsUnit from '../../node_modules/ts-unit';
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
    
    testSearchInEmptyArray()
    {
        this.areIdentical( -1, this.search.indexOf(1, []));
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
    
    testStrNotFound()
    {
        this.areIdentical( -1, this.search.indexOf("test", this.sortedStr));
    }
    
    testNumNotFound()
    {
        this.areIdentical( -1, this.search.indexOf(100, this.sortedNum));
    }
    
}