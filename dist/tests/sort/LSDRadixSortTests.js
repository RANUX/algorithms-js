"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const shuffle = require("knuth-shuffle");
const LSDRadixSort_1 = require("../../sort/LSDRadixSort");
const ArrayHelpers_1 = require("../../helpers/ArrayHelpers");
/**
* LSDRadixSortTests
*/
class LSDRadixSortTests extends tsUnit.TestClass {
    constructor() {
        super(...arguments);
        this.sortedNums = [2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 8, 9, 11, 13, 15, 17, 17, 18, 21, 21, 21, 22, 24, 25, 26, 28, 29, 31, 31, 33, 34, 35, 36, 40, 41, 42, 42, 44, 48, 49, 51, 53, 53, 54, 56, 56, 59, 59, 60, 61, 61, 62, 62, 64, 64, 64, 66, 69, 71, 71, 74, 74, 74, 76, 77, 78, 78, 79, 79, 81, 84, 87, 87, 88, 89, 91, 91, 91, 92, 92, 92, 96, 96, 98, 98, 99];
        this.lsdSort = new LSDRadixSort_1.default();
    }
    setUp() {
        this.unsortedNums = shuffle.knuthShuffle(ArrayHelpers_1.shallowCopy(this.sortedNums));
    }
    testSort() {
        this.areCollectionsIdentical(this.sortedNums, this.lsdSort.sort(this.unsortedNums));
    }
}
exports.LSDRadixSortTests = LSDRadixSortTests;

//# sourceMappingURL=LSDRadixSortTests.js.map
