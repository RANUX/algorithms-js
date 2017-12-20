"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const Mathf_1 = require("../../helpers/Mathf");
/**
* MathfTests
*/
class MathfTests extends tsUnit.TestClass {
    setUp() {
    }
    testPowEven() {
        this.areIdentical(1, Mathf_1.default.pow(2, 0));
        this.areIdentical(2, Mathf_1.default.pow(2, 1));
        this.areIdentical(4, Mathf_1.default.pow(2, 2));
        this.areIdentical(8, Mathf_1.default.pow(2, 3));
        this.areIdentical(16, Mathf_1.default.pow(2, 4));
        this.areIdentical(32, Mathf_1.default.pow(2, 5));
        this.areIdentical(64, Mathf_1.default.pow(2, 6));
        this.areIdentical(128, Mathf_1.default.pow(2, 7));
        this.areIdentical(216, Mathf_1.default.pow(6, 3));
    }
    testPowOdd() {
        this.areIdentical(1, Mathf_1.default.pow(3, 0));
        this.areIdentical(3, Mathf_1.default.pow(3, 1));
        this.areIdentical(9, Mathf_1.default.pow(3, 2));
        this.areIdentical(27, Mathf_1.default.pow(3, 3));
        this.areIdentical(81, Mathf_1.default.pow(3, 4));
        this.areIdentical(243, Mathf_1.default.pow(3, 5));
        this.areIdentical(729, Mathf_1.default.pow(3, 6));
        this.areIdentical(2187, Mathf_1.default.pow(3, 7));
        this.areIdentical(3125, Mathf_1.default.pow(5, 5));
    }
}
exports.MathfTests = MathfTests;

//# sourceMappingURL=MathfTests.js.map
