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
var HanoiTower_1 = require("../../recursion/HanoiTower");
/**
 * HanoiTowers
 */
var HanoiTowerTests = (function (_super) {
    __extends(HanoiTowerTests, _super);
    function HanoiTowerTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HanoiTowerTests.prototype.setUp = function () {
        this.towers = new HanoiTower_1.default();
    };
    HanoiTowerTests.prototype.testOneDisk = function () {
        var nTowers = 1;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1], [], []],
            [[], [], [1]]
        ], this.towers.solution);
    };
    HanoiTowerTests.prototype.testTwoDisks = function () {
        var nTowers = 2;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1, 2], [], []],
            [[2], [1], []],
            [[], [1], [2]],
            [[], [], [1, 2]]
        ], this.towers.solution);
    };
    HanoiTowerTests.prototype.testTreeDisks = function () {
        var nTowers = 3;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1, 2, 3], [], []],
            [[2, 3], [], [1]],
            [[3], [2], [1]],
            [[3], [1, 2], []],
            [[], [1, 2], [3]],
            [[1], [2], [3]],
            [[1], [], [2, 3]],
            [[], [], [1, 2, 3]],
        ], this.towers.solution);
        this.towers.clearSolution();
        this.areCollectionsIdentical([], this.towers.solution);
    };
    return HanoiTowerTests;
}(tsUnit.TestClass));
exports.HanoiTowerTests = HanoiTowerTests;

//# sourceMappingURL=HanoiTowerTests.js.map
