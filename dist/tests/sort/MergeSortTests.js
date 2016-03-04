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
    };
    return MergeSortTests;
})(absSortTests.AbstractSortTestsTests);
exports.MergeSortTests = MergeSortTests;

//# sourceMappingURL=MergeSortTests.js.map
