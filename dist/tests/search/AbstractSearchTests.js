"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
class AbstractSearchTestsTests extends tsUnit.TestClass {
    constructor() {
        super(...arguments);
        this.sortedStr = ["ada", "csharp", "db", "node", "php", "python"];
        this.sortedNum = [1, 3, 4, 6, 8, 9, 10];
    }
    setUp() {
        this.search = this.createSearch();
    }
    testSearchInEmptyArray() {
        this.areIdentical(-1, this.search.indexOf(1, []));
    }
    testIndexOfStrArray() {
        for (var i = 0; i < this.sortedStr.length; i++) {
            var element = this.sortedStr[i];
            this.areIdentical(i, this.search.indexOf(element, this.sortedStr));
        }
    }
    testIndexOfNumArray() {
        for (var i = 0; i < this.sortedNum.length; i++) {
            var element = this.sortedNum[i];
            this.areIdentical(i, this.search.indexOf(element, this.sortedNum));
        }
    }
    testStrNotFound() {
        this.areIdentical(-1, this.search.indexOf("test", this.sortedStr));
    }
    testNumNotFound() {
        this.areIdentical(-1, this.search.indexOf(100, this.sortedNum));
    }
}
exports.AbstractSearchTestsTests = AbstractSearchTestsTests;

//# sourceMappingURL=AbstractSearchTests.js.map
