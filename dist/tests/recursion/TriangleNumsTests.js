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
var TriangleNums_1 = require("../../recursion/TriangleNums");
/**
* TriangleNumsTests
*/
var TriangleNumsTests = (function (_super) {
    __extends(TriangleNumsTests, _super);
    function TriangleNumsTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TriangleNumsTests.prototype.setUp = function () {
        this.tn = new TriangleNums_1.default();
    };
    TriangleNumsTests.prototype.testTriangleIterativ = function () {
        this.areIdentical(1, this.tn.triangleIterativ(1));
        this.areIdentical(3, this.tn.triangleIterativ(2));
        this.areIdentical(6, this.tn.triangleIterativ(3));
        this.areIdentical(10, this.tn.triangleIterativ(4));
        this.areIdentical(15, this.tn.triangleIterativ(5));
    };
    TriangleNumsTests.prototype.testTriangleRecursive = function () {
        this.areIdentical(1, this.tn.triangleRecursive(1));
        this.areIdentical(3, this.tn.triangleRecursive(2));
        this.areIdentical(6, this.tn.triangleRecursive(3));
        this.areIdentical(10, this.tn.triangleRecursive(4));
        this.areIdentical(15, this.tn.triangleRecursive(5));
    };
    return TriangleNumsTests;
}(tsUnit.TestClass));
exports.TriangleNumsTests = TriangleNumsTests;

//# sourceMappingURL=TriangleNumsTests.js.map
