"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const HanoiTower_1 = require("../../recursion/HanoiTower");
/**
 * HanoiTowers
 */
class HanoiTowerTests extends tsUnit.TestClass {
    setUp() {
        this.towers = new HanoiTower_1.default();
    }
    testOneDisk() {
        var nTowers = 1;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1], [], []],
            [[], [], [1]]
        ], this.towers.solution);
    }
    testTwoDisks() {
        var nTowers = 2;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1, 2], [], []],
            [[2], [1], []],
            [[], [1], [2]],
            [[], [], [1, 2]]
        ], this.towers.solution);
    }
    testTreeDisks() {
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
    }
}
exports.HanoiTowerTests = HanoiTowerTests;

//# sourceMappingURL=HanoiTowerTests.js.map
