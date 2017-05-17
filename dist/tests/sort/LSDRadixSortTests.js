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
var tsUnit = require("../../node_modules/tsunit.external/tsUnit");
var shuffle = require("knuth-shuffle");
var LSDRadixSort_1 = require("../../sort/LSDRadixSort");
var ArrayHelpers_1 = require("../../helpers/ArrayHelpers");
/**
* LSDRadixSortTests
*/
var LSDRadixSortTests = (function (_super) {
    __extends(LSDRadixSortTests, _super);
    function LSDRadixSortTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortedNums = [2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 11, 13, 15, 17, 17, 18, 21, 21, 21, 22, 24, 25, 26, 28, 29, 31, 31, 33, 34, 35, 36, 40, 41, 42, 42, 44, 48, 49, 51, 53, 53, 54, 56, 56, 59, 59, 60, 61, 61, 62, 62, 64, 64, 64, 66, 69, 71, 71, 74, 74, 74, 76, 77, 78, 78, 79, 79, 81, 84, 87, 87, 88, 89, 91, 91, 91, 92, 92, 92, 96, 96, 98, 98, 99];
        _this.lsdSort = new LSDRadixSort_1.default();
        return _this;
    }
    LSDRadixSortTests.prototype.setUp = function () {
        this.unsortedNums = shuffle.knuthShuffle(ArrayHelpers_1.shallowCopy(this.sortedNums));
    };
    LSDRadixSortTests.prototype.testSort = function () {
        this.areCollectionsIdentical(this.sortedNums, this.lsdSort.sort(this.unsortedNums));
    };
    return LSDRadixSortTests;
}(tsUnit.TestClass));
exports.LSDRadixSortTests = LSDRadixSortTests;

//# sourceMappingURL=LSDRadixSortTests.js.map
