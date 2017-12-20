"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const KnapsackProblemLight_1 = require("../../recursion/KnapsackProblemLight");
/**
* KnapsackProblemLightTests
*/
class KnapsackProblemLightTests extends tsUnit.TestClass {
    setUp() {
    }
    testSolve1ItemExists() {
        var knapasack = new KnapsackProblemLight_1.default([20]);
        this.areCollectionsIdentical([20], knapasack.solve(20));
    }
    testSolve1ItemNotExists() {
        var knapasack = new KnapsackProblemLight_1.default([9, 7]);
        this.areCollectionsIdentical([], knapasack.solve(22));
    }
    testSolve2ItemExists() {
        var knapasack = new KnapsackProblemLight_1.default([10, 10]);
        this.areCollectionsIdentical([10, 10], knapasack.solve(20));
    }
    testSolve() {
        var knapasack = new KnapsackProblemLight_1.default([11, 8, 7, 6, 5]);
        this.areCollectionsIdentical([8, 7, 5], knapasack.solve(20));
        var knapasack = new KnapsackProblemLight_1.default([28, 10, 6, 5, 2]);
        this.areCollectionsIdentical([28, 10, 2], knapasack.solve(40));
        var knapasack = new KnapsackProblemLight_1.default([50, 10, 6, 5, 2]);
        this.areCollectionsIdentical([10, 6], knapasack.solve(16));
    }
}
exports.KnapsackProblemLightTests = KnapsackProblemLightTests;

//# sourceMappingURL=KnapsackProblemLightTests.js.map
