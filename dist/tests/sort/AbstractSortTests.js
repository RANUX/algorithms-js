var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var shuffle = require('knuth-shuffle');
var ahelp = require('../../helpers/ArrayHelpers');
var AbstractSortTests = (function (_super) {
    __extends(AbstractSortTests, _super);
    function AbstractSortTests() {
        _super.apply(this, arguments);
        this.unsortedStr = ["d", "ada", "csharp", "cpp", "db", "code", "smalltalk", "python", "cpp", "node", "js", "php", "z"];
        this.unsortedNum = [3, 4, 10, 1, 6, 78, 79, 79, 81, 8, 9, 11, 13, 15, 17, 84, 87, 8, 9, 39, 20, 18, 34, 11, 34];
    }
    AbstractSortTests.prototype.setUp = function () {
        this.sorting = this.createSorting();
        // randomize unsorted
        shuffle.knuthShuffle(this.unsortedStr);
        shuffle.knuthShuffle(this.unsortedNum);
        this.sortedStr = ahelp.shallowCopy(this.unsortedStr).sort(ahelp.compareStrDesc);
        this.sortedStrReversed = this.sortedStr.reverse();
        this.sortedNum = ahelp.shallowCopy(this.unsortedNum).sort(function (a, b) { return b - a; });
        this.sortedNumReversed = this.sortedNum.reverse();
    };
    AbstractSortTests.prototype.testSortRandomStringArray = function () {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.unsortedStr));
    };
    AbstractSortTests.prototype.testSortRandomNumArray = function () {
        var r = this.sorting.sort(this.unsortedNum);
        this.areCollectionsIdentical(this.sortedNum, r);
    };
    AbstractSortTests.prototype.testSortReversedStringArray = function () {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.sortedStrReversed));
    };
    AbstractSortTests.prototype.testSortReversedNumArray = function () {
        this.areCollectionsIdentical(this.sortedNum, this.sorting.sort(this.sortedNumReversed));
    };
    AbstractSortTests.prototype.testSortEmptyArray = function () {
        this.areCollectionsIdentical([], this.sorting.sort([]));
    };
    AbstractSortTests.prototype.testSortSortedNumArray = function () {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.sortedStr));
    };
    AbstractSortTests.prototype.testSortSortedStrArray = function () {
        this.areCollectionsIdentical(this.sortedNum, this.sorting.sort(this.sortedNum));
    };
    return AbstractSortTests;
})(tsUnit.TestClass);
exports.AbstractSortTests = AbstractSortTests;

//# sourceMappingURL=AbstractSortTests.js.map
