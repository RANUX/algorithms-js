import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import shuffle = require('knuth-shuffle');
import LSDRadixSort  from "../../sort/LSDRadixSort";
import { shallowCopy } from '../../helpers/ArrayHelpers';

/**
* LSDRadixSortTests
*/
export class LSDRadixSortTests extends tsUnit.TestClass {

    private unsortedNums : number[];
    private sortedNums   : number[] =[ 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 11, 13, 15, 17, 17, 18, 21, 21, 21, 22, 24, 25, 26, 28, 29, 31, 31, 33, 34, 35, 36, 40, 41, 42, 42, 44, 48, 49, 51, 53, 53, 54, 56, 56, 59, 59, 60, 61, 61, 62, 62, 64, 64, 64, 66, 69, 71, 71, 74, 74, 74, 76, 77, 78, 78, 79, 79, 81, 84, 87, 87, 88, 89, 91, 91, 91, 92, 92, 92, 96, 96, 98, 98, 99 ];
    private lsdSort      : LSDRadixSort = new LSDRadixSort();
    
    setUp()
    {
        this.unsortedNums = shuffle.knuthShuffle( shallowCopy( this.sortedNums ) );
    }

    testSort() {
        this.areCollectionsIdentical( this.sortedNums, this.lsdSort.sort( this.unsortedNums ) );
        
    }
    
    
}