var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absSortTests = require('./AbstractSortTests');
var MergeSort_1 = require("../../sort/MergeSort");
/**
 * MergeSortTests
 */
var MergeSortTests = (function (_super) {
    __extends(MergeSortTests, _super);
    function MergeSortTests() {
        _super.apply(this, arguments);
    }
    MergeSortTests.prototype.createSorting = function () {
        return new MergeSort_1.default();
    };
    MergeSortTests.prototype.testMergeSortedArrays = function () {
        var l = [22, 57, 71, 95];
        var r = [5, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        //      [ 5, 13, 49, 63, 78, 89 ]
        var sorter = new MergeSort_1.default();
        this.areCollectionsIdentical(m, sorter.merge(l, r));
    };
    return MergeSortTests;
})(absSortTests.AbstractSortTestsTests);
exports.MergeSortTests = MergeSortTests;

//# sourceMappingURL=MergeSortTests.js.map
