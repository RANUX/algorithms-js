import absSearchTests = require('./AbstractSearchTests')
import BinarySearch from '../../search/BinarySearch';
import * as isearch  from "../../search/ISearch";

/**
* BinarySearchTests
*/
export class BinarySearchTests extends absSearchTests.AbstractSearchTestsTests {

    protected createSearch() : isearch.ISearch
    {
        return new BinarySearch();
    }


    
}