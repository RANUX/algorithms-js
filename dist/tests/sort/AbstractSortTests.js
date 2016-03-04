var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var shuffle = require('knuth-shuffle');
var AbstractSortTestsTests = (function (_super) {
    __extends(AbstractSortTestsTests, _super);
    function AbstractSortTestsTests() {
        _super.apply(this, arguments);
        this.unsortedStr = ["d", "ada", "csharp", "cpp", "db", "python", "cpp", "node", "js", "php"];
        this.unsortedNum = [3, 4, 10, 1, 6, 8, 9];
        this.sortedNum = [1, 3, 4, 6, 8, 9, 10];
    }
    AbstractSortTestsTests.prototype.setUp = function () {
        this.sorting = this.createSorting();
        // randomize unsorted
        shuffle.knuthShuffle(this.unsortedStr);
        this.sortedStr = this.unsortedStr.sort();
    };
    AbstractSortTestsTests.prototype.testSortStringArray = function () {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.unsortedStr));
    };
    AbstractSortTestsTests.prototype.testSortNumArray = function () {
        this.areCollectionsIdentical(this.sortedNum, this.sorting.sort(this.unsortedNum));
    };
    return AbstractSortTestsTests;
})(tsUnit.TestClass);
exports.AbstractSortTestsTests = AbstractSortTestsTests;

//# sourceMappingURL=AbstractSortTests.js.map
