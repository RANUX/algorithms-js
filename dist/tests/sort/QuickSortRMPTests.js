"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSortTests_1 = require("./AbstractSortTests");
const QuickSortRMP_1 = require("../../sort/QuickSortRMP");
const ahelp = require("../../helpers/ArrayHelpers");
/**
* QuickSortTests
*/
class QuickSortRMPTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new QuickSortRMP_1.default();
    }
    testSplitToParts() {
        var sorting = this.sorting;
        var array = sorting.array = [3, 2, 5, 4, 6, 10, 1, 11, 9, 7];
        sorting.splitToParts(0, array.length - 1, array[array.length - 1]);
        this.areCollectionsIdentical([3, 2, 5, 4, 6, 1, 7, 11, 9, 10], sorting.array);
        array = [1];
        sorting.array = ahelp.shallowCopy(array);
        sorting.splitToParts(0, array.length - 1, 1);
        this.areCollectionsIdentical([1], sorting.array);
    }
}
exports.QuickSortRMPTests = QuickSortRMPTests;

//# sourceMappingURL=QuickSortRMPTests.js.map
