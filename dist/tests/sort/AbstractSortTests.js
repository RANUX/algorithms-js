"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const shuffle = require("knuth-shuffle");
const ahelp = require("../../helpers/ArrayHelpers");
class AbstractSortTests extends tsUnit.TestClass {
    constructor() {
        super(...arguments);
        this.unsortedStr = ["d", "ada", "csharp", "cpp", "db", "code", "smalltalk", "python", "cpp", "node", "js", "php", "z"];
        this.unsortedNum = [3, 4, 10, 1, 6, 78, 79, 79, 81, 8, 9, 11, 13, 15, 17, 84, 87, 8, 9, 39, 20, 18, 34, 11, 34];
    }
    setUp() {
        this.sorting = this.createSorting();
        // randomize unsorted
        shuffle.knuthShuffle(this.unsortedStr);
        shuffle.knuthShuffle(this.unsortedNum);
        this.sortedStr = ahelp.shallowCopy(this.unsortedStr).sort(ahelp.compareStrDesc);
        this.sortedStrReversed = this.sortedStr.reverse();
        this.sortedNum = ahelp.shallowCopy(this.unsortedNum).sort((a, b) => b - a);
        this.sortedNumReversed = this.sortedNum.reverse();
    }
    testSortRandomStringArray() {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.unsortedStr));
    }
    testSortRandomNumArray() {
        var r = this.sorting.sort(this.unsortedNum);
        this.areCollectionsIdentical(this.sortedNum, r);
    }
    testSortReversedStringArray() {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.sortedStrReversed));
    }
    testSortReversedNumArray() {
        this.areCollectionsIdentical(this.sortedNum, this.sorting.sort(this.sortedNumReversed));
    }
    testSortEmptyArray() {
        this.areCollectionsIdentical([], this.sorting.sort([]));
    }
    testSortSortedNumArray() {
        this.areCollectionsIdentical(this.sortedStr, this.sorting.sort(this.sortedStr));
    }
    testSortSortedStrArray() {
        this.areCollectionsIdentical(this.sortedNum, this.sorting.sort(this.sortedNum));
    }
}
exports.AbstractSortTests = AbstractSortTests;

//# sourceMappingURL=AbstractSortTests.js.map
