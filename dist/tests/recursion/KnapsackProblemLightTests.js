var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var KnapsackProblemLight_1 = require('../../recursion/KnapsackProblemLight');
/**
* KnapsackProblemLightTests
*/
var KnapsackProblemLightTests = (function (_super) {
    __extends(KnapsackProblemLightTests, _super);
    function KnapsackProblemLightTests() {
        _super.apply(this, arguments);
    }
    KnapsackProblemLightTests.prototype.setUp = function () {
    };
    KnapsackProblemLightTests.prototype.testSolve1ItemExists = function () {
        var knapasack = new KnapsackProblemLight_1.default([20]);
        this.areCollectionsIdentical([20], knapasack.solve(20));
    };
    KnapsackProblemLightTests.prototype.testSolve1ItemNotExists = function () {
        var knapasack = new KnapsackProblemLight_1.default([20]);
        this.areCollectionsIdentical([], knapasack.solve(22));
    };
    KnapsackProblemLightTests.prototype.testSolve2ItemExists = function () {
        var knapasack = new KnapsackProblemLight_1.default([10, 10]);
        this.areCollectionsIdentical([10, 10], knapasack.solve(20));
    };
    KnapsackProblemLightTests.prototype.testSolve = function () {
        var knapasack = new KnapsackProblemLight_1.default([11, 8, 7, 6, 5]);
        this.areCollectionsIdentical([8, 7, 5], knapasack.solve(20));
        knapasack.setWeights([5, 10, 2, 6, 28]);
        this.areCollectionsIdentical([], knapasack.solve(40));
    };
    return KnapsackProblemLightTests;
})(tsUnit.TestClass);
exports.KnapsackProblemLightTests = KnapsackProblemLightTests;

//# sourceMappingURL=KnapsackProblemLightTests.js.map
