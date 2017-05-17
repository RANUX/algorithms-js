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
var QuickSortRMP_1 = require("../../sort/QuickSortRMP");
var ahelp = require("../../helpers/ArrayHelpers");
/**
* QuickSortTests
*/
var QuickSortRMPTests = (function (_super) {
    __extends(QuickSortRMPTests, _super);
    function QuickSortRMPTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickSortRMPTests.prototype.createSorting = function () {
        return new QuickSortRMP_1.default();
    };
    QuickSortRMPTests.prototype.testSplitToParts = function () {
        var sorting = this.sorting;
        var array = sorting.array = [3, 2, 5, 4, 6, 10, 1, 11, 9, 7];
        sorting.splitToParts(0, array.length - 1, array[array.length - 1]);
        this.areCollectionsIdentical([3, 2, 5, 4, 6, 1, 7, 11, 9, 10], sorting.array);
        array = [1];
        sorting.array = ahelp.shallowCopy(array);
        sorting.splitToParts(0, array.length - 1, 1);
        this.areCollectionsIdentical([1], sorting.array);
    };
    return QuickSortRMPTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.QuickSortRMPTests = QuickSortRMPTests;

//# sourceMappingURL=QuickSortRMPTests.js.map
