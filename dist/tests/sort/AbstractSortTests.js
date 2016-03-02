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
        this.unsorted = ["d", "ada", "csharp", "cpp", "db", "python", "cpp", "node", "js", "php"];
    }
    AbstractSortTestsTests.prototype.setUp = function () {
        this.sorting = this.createSorting();
        // randomize unsorted
        shuffle.knuthShuffle(this.unsorted);
        this.sorted = this.unsorted.sort(function (a, b) { return b - a; });
    };
    AbstractSortTestsTests.prototype.testSortSimpleArray = function () {
        this.areCollectionsIdentical(this.sorted, this.sorting.sort(this.unsorted));
    };
    return AbstractSortTestsTests;
})(tsUnit.TestClass);
exports.AbstractSortTestsTests = AbstractSortTestsTests;

//# sourceMappingURL=AbstractSortTests.js.map
