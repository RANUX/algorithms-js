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
var QuickSortM_1 = require("../../sort/QuickSortM");
/**
* QuickSortTests
*/
var QuickSortMTests = (function (_super) {
    __extends(QuickSortMTests, _super);
    function QuickSortMTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSortMTests.prototype.createSorting = function () {
        return new QuickSortM_1.default();
    };
    QuickSortMTests.prototype.testSplitToParts = function () {
        var sorting = this.sorting;
        var array = sorting.array = [3, 2, 5, 4, 6, 10, 1, 11, 9, 7];
        sorting.splitToParts(0, array.length - 1, array[array.length - 1]);
        //this.areCollectionsIdentical( [3,2,5,4,6,1,7,11,9,10], sorting.array );
        this.areCollectionsIdentical([3, 2, 5, 4, 6, 1, 9, 11, 10, 7], sorting.array);
    };
    QuickSortMTests.prototype.testMedianOf3 = function () {
        var sorting = this.sorting;
        var _variants = [[1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]];
        var left = 0;
        var right = _variants[0].length - 1;
        for (var i in _variants) {
            sorting.array = _variants[i];
            this.areIdentical(2, sorting.medianOf3(left, right));
            this.areCollectionsIdentical([1, 2, 3], sorting.array);
        }
        sorting.array = [1, 2, 3, 4, 5];
        var left = 0;
        var right = sorting.array.length - 1;
        this.areIdentical(3, sorting.medianOf3(left, right));
        this.areCollectionsIdentical([1, 2, 4, 3, 5], sorting.array);
    };
    QuickSortMTests.prototype.testManualSort3 = function () {
        var sorting = this.sorting;
        var left = 0;
        var right = 1;
        sorting.array = [1];
        sorting.manualSort(left, right, 1);
        this.areCollectionsIdentical([1], sorting.array);
        var _variants = [[1, 2], [2, 1]];
        left = 0;
        right = _variants[0].length - 1;
        for (var i in _variants) {
            sorting.array = _variants[i];
            sorting.manualSort(left, right, 2);
            this.areCollectionsIdentical([1, 2], sorting.array);
        }
        _variants = [[1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]];
        left = 0;
        right = _variants[0].length - 1;
        for (var i in _variants) {
            sorting.array = _variants[i];
            sorting.manualSort(left, right, 3);
            this.areCollectionsIdentical([1, 2, 3], sorting.array);
        }
    };
    return QuickSortMTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.QuickSortMTests = QuickSortMTests;

//# sourceMappingURL=QuickSortMTests.js.map
