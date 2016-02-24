import absListTests = require('./AbstractListTests')
import * as ilists  from "../../lists/IList";
import * as linkList  from "../../lists/LinkedList";

/**
 * LinkedListTests extends absListTests.
 */
export class LinkedListTests extends absListTests.AbstractListTestsTests {
    
    
    protected createList() : ilists.IList {
        return new linkList.LinkedList();
    }
}