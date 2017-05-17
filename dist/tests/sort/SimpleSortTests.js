"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractSortTests_1 = require("./AbstractSortTests");
var simpsort = require("../../sort/SimpleSort");
var BubbleSortTests = (function (_super) {
    __extends(BubbleSortTests, _super);
    function BubbleSortTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BubbleSortTests.prototype.createSorting = function () {
        return new simpsort.BubbleSort();
    };
    return BubbleSortTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.BubbleSortTests = BubbleSortTests;
var SelectionSortTests = (function (_super) {
    __extends(SelectionSortTests, _super);
    function SelectionSortTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSortTests.prototype.createSorting = function () {
        return new simpsort.SelectionSort();
    };
    return SelectionSortTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.SelectionSortTests = SelectionSortTests;
var InsertionSortTests = (function (_super) {
    __extends(InsertionSortTests, _super);
    function InsertionSortTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsertionSortTests.prototype.createSorting = function () {
        return new simpsort.InsertionSort();
    };
    return InsertionSortTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.InsertionSortTests = InsertionSortTests;

//# sourceMappingURL=SimpleSortTests.js.map
