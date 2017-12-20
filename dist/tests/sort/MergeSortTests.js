"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSortTests_1 = require("./AbstractSortTests");
const MergeSort_1 = require("../../sort/MergeSort");
/**
 * MergeSortTests
 */
class MergeSortTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new MergeSort_1.default();
    }
    testMergeSortedArrays() {
        //console.log('--------- test Merge -------');
        var a = [5, 22, 57, 71, 95, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        var result = new Array(a.length);
        var mid = 0 + Math.floor((a.length - 0) / 2); // 5
        var sorter = new MergeSort_1.default();
        sorter.array = a;
        sorter.merge(0, mid, a.length - 1, result);
        //console.log(result);
        this.areCollectionsIdentical(m, result);
        //console.log('--------- end Merge -------');
    }
}
exports.MergeSortTests = MergeSortTests;

//# sourceMappingURL=MergeSortTests.js.map
