var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractSortTests_1 = require('./AbstractSortTests');
var simpsort = require("../../sort/SimpleSort");
var BubbleSortTests = (function (_super) {
    __extends(BubbleSortTests, _super);
    function BubbleSortTests() {
        _super.apply(this, arguments);
    }
    BubbleSortTests.prototype.createSorting = function () {
        return new simpsort.BubbleSort();
    };
    return BubbleSortTests;
})(AbstractSortTests_1.AbstractSortTests);
exports.BubbleSortTests = BubbleSortTests;
var SelectionSortTests = (function (_super) {
    __extends(SelectionSortTests, _super);
    function SelectionSortTests() {
        _super.apply(this, arguments);
    }
    SelectionSortTests.prototype.createSorting = function () {
        return new simpsort.SelectionSort();
    };
    return SelectionSortTests;
})(AbstractSortTests_1.AbstractSortTests);
exports.SelectionSortTests = SelectionSortTests;
var InsertionSortTests = (function (_super) {
    __extends(InsertionSortTests, _super);
    function InsertionSortTests() {
        _super.apply(this, arguments);
    }
    InsertionSortTests.prototype.createSorting = function () {
        return new simpsort.InsertionSort();
    };
    return InsertionSortTests;
})(AbstractSortTests_1.AbstractSortTests);
exports.InsertionSortTests = InsertionSortTests;

//# sourceMappingURL=SimpleSortTests.js.map
