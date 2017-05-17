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
var Mathf_1 = require("../../helpers/Mathf");
/**
* MathfTests
*/
var MathfTests = (function (_super) {
    __extends(MathfTests, _super);
    function MathfTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MathfTests.prototype.setUp = function () {
    };
    MathfTests.prototype.testPowEven = function () {
        this.areIdentical(1, Mathf_1.default.pow(2, 0));
        this.areIdentical(2, Mathf_1.default.pow(2, 1));
        this.areIdentical(4, Mathf_1.default.pow(2, 2));
        this.areIdentical(8, Mathf_1.default.pow(2, 3));
        this.areIdentical(16, Mathf_1.default.pow(2, 4));
        this.areIdentical(32, Mathf_1.default.pow(2, 5));
        this.areIdentical(64, Mathf_1.default.pow(2, 6));
        this.areIdentical(128, Mathf_1.default.pow(2, 7));
        this.areIdentical(216, Mathf_1.default.pow(6, 3));
    };
    MathfTests.prototype.testPowOdd = function () {
        this.areIdentical(1, Mathf_1.default.pow(3, 0));
        this.areIdentical(3, Mathf_1.default.pow(3, 1));
        this.areIdentical(9, Mathf_1.default.pow(3, 2));
        this.areIdentical(27, Mathf_1.default.pow(3, 3));
        this.areIdentical(81, Mathf_1.default.pow(3, 4));
        this.areIdentical(243, Mathf_1.default.pow(3, 5));
        this.areIdentical(729, Mathf_1.default.pow(3, 6));
        this.areIdentical(2187, Mathf_1.default.pow(3, 7));
        this.areIdentical(3125, Mathf_1.default.pow(5, 5));
    };
    return MathfTests;
}(tsUnit.TestClass));
exports.MathfTests = MathfTests;

//# sourceMappingURL=MathfTests.js.map
