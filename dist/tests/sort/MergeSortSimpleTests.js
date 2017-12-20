"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSortTests_1 = require("./AbstractSortTests");
const MergeSortSimple_1 = require("../../sort/MergeSortSimple");
/**
 * MergeSortTests
 */
class MergeSortSimpleTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new MergeSortSimple_1.default();
    }
    testMergeSortedArrays() {
        var l = [22, 57, 71, 95];
        var r = [5, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        var sorter = new MergeSortSimple_1.default();
        this.areCollectionsIdentical(m, sorter.merge(l, r));
    }
}
exports.MergeSortSimpleTests = MergeSortSimpleTests;

//# sourceMappingURL=MergeSortSimpleTests.js.map
