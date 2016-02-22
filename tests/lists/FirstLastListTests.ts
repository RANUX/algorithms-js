import absListTests = require('./AbstractListTests')
import * as ilists  from "../../lists/IList";
import * as fllists  from "../../lists/FirstLastList";

/**
 * FirstLastListTests extends absListTests.
 */
export class FirstLastListTests extends absListTests.AbstractListTestsTests {
    
    
    protected createList() : ilists.IList {
        return new fllists.FirstLastList();
    }
}