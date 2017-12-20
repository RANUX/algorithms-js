"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const TriangleNums_1 = require("../../recursion/TriangleNums");
/**
* TriangleNumsTests
*/
class TriangleNumsTests extends tsUnit.TestClass {
    setUp() {
        this.tn = new TriangleNums_1.default();
    }
    testTriangleIterativ() {
        this.areIdentical(1, this.tn.triangleIterativ(1));
        this.areIdentical(3, this.tn.triangleIterativ(2));
        this.areIdentical(6, this.tn.triangleIterativ(3));
        this.areIdentical(10, this.tn.triangleIterativ(4));
        this.areIdentical(15, this.tn.triangleIterativ(5));
    }
    testTriangleRecursive() {
        this.areIdentical(1, this.tn.triangleRecursive(1));
        this.areIdentical(3, this.tn.triangleRecursive(2));
        this.areIdentical(6, this.tn.triangleRecursive(3));
        this.areIdentical(10, this.tn.triangleRecursive(4));
        this.areIdentical(15, this.tn.triangleRecursive(5));
    }
}
exports.TriangleNumsTests = TriangleNumsTests;

//# sourceMappingURL=TriangleNumsTests.js.map
