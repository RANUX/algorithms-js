var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absSortTests = require('./AbstractSortTests');
var MergeSortSimple_1 = require("../../sort/MergeSortSimple");
/**
 * MergeSortTests
 */
var MergeSortSimpleTests = (function (_super) {
    __extends(MergeSortSimpleTests, _super);
    function MergeSortSimpleTests() {
        _super.apply(this, arguments);
    }
    MergeSortSimpleTests.prototype.createSorting = function () {
        return new MergeSortSimple_1.default();
    };
    MergeSortSimpleTests.prototype.testMergeSortedArrays = function () {
        var l = [22, 57, 71, 95];
        var r = [5, 13, 49, 63, 78, 89];
        var m = [5, 13, 22, 49, 57, 63, 71, 78, 89, 95];
        var sorter = new MergeSortSimple_1.default();
        this.areCollectionsIdentical(m, sorter.merge(l, r));
    };
    return MergeSortSimpleTests;
})(absSortTests.AbstractSortTestsTests);
exports.MergeSortSimpleTests = MergeSortSimpleTests;

//# sourceMappingURL=MergeSortSimpleTests.js.map
