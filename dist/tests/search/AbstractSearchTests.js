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
var AbstractSearchTestsTests = (function (_super) {
    __extends(AbstractSearchTestsTests, _super);
    function AbstractSearchTestsTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortedStr = ["ada", "csharp", "db", "node", "php", "python"];
        _this.sortedNum = [1, 3, 4, 6, 8, 9, 10];
        return _this;
    }
    AbstractSearchTestsTests.prototype.setUp = function () {
        this.search = this.createSearch();
    };
    AbstractSearchTestsTests.prototype.testSearchInEmptyArray = function () {
        this.areIdentical(-1, this.search.indexOf(1, []));
    };
    AbstractSearchTestsTests.prototype.testIndexOfStrArray = function () {
        for (var i = 0; i < this.sortedStr.length; i++) {
            var element = this.sortedStr[i];
            this.areIdentical(i, this.search.indexOf(element, this.sortedStr));
        }
    };
    AbstractSearchTestsTests.prototype.testIndexOfNumArray = function () {
        for (var i = 0; i < this.sortedNum.length; i++) {
            var element = this.sortedNum[i];
            this.areIdentical(i, this.search.indexOf(element, this.sortedNum));
        }
    };
    AbstractSearchTestsTests.prototype.testStrNotFound = function () {
        this.areIdentical(-1, this.search.indexOf("test", this.sortedStr));
    };
    AbstractSearchTestsTests.prototype.testNumNotFound = function () {
        this.areIdentical(-1, this.search.indexOf(100, this.sortedNum));
    };
    return AbstractSearchTestsTests;
}(tsUnit.TestClass));
exports.AbstractSearchTestsTests = AbstractSearchTestsTests;

//# sourceMappingURL=AbstractSearchTests.js.map
