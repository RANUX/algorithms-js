import absListTests = require('./AbstractListTests')
import * as ilists  from "../../lists/IList";
import * as fllists  from "../../lists/FirstLastList";

/**
 * SortedFirstLastListTests extends absListTests.
 */
export class SortedFirstLastListTests extends absListTests.AbstractListTestsTests {
    
    
    protected createList() : ilists.IList {
        return new fllists.SortedFirstLastList();
    }
    
    testShiftAndUnshiftElement() {
        
        // unshift unsorted array
        for( var i in this.data ) {
            this.list.unshift( this.data[i]);
        }
        
        // sort test data
        this.data.sort( (n1,n2) => n1 - n2 );
        
        for( var i in this.data ) {
            this.areIdentical( this.data[i], this.list.shift());
        }
        
        this.isTrue( this.list.isEmpty() );
    }

}