"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ahelp = require("../helpers/ArrayHelpers");
/**
 * KnapsackProblemLight only weights without prices.
 */
/**
 * (description)
 *
 * @export
 * @class KnapsackProblemLight
 */
var KnapsackProblemLight = (function () {
    /**
     * Creates an instance of KnapsackProblemLight.
     *
     * @param {number[]} weights shoud be sorted descending
     */
    function KnapsackProblemLight(weights) {
        this.setWeights(weights);
    }
    /**
     * Solve Knapsack Problem with weights only
     *
     * @param {number} goalW - maximum sum weight
     * @returns (description)
     */
    KnapsackProblemLight.prototype.solve = function (goalW) {
        this.result = [];
        this.stack = [];
        for (var i = 0; i < this.weights.length; i++) {
            this.solveRecursive(goalW, i);
            if (this.stack.length > 0)
                break; // solution found
        }
        return this.result;
    };
    /**
     * Set new weights
     *
     * @param {number[]}  weights shoud be sorted descending
     */
    KnapsackProblemLight.prototype.setWeights = function (weights) {
        this.weights = weights;
    };
    KnapsackProblemLight.prototype.solveRecursive = function (goalW, i) {
        //console.log('goalW: ' + goalW + ' i: ' + i);
        if (i == this.weights.length) {
            return undefined;
        }
        else if (goalW == this.weights[i]) {
            this.result = ahelp.shallowCopy(this.stack);
            this.result.push(this.weights[i]); // items found
            return this.weights[i];
        }
        else if (goalW > this.weights[i]) {
            this.stack.push(this.weights[i]);
            var w = this.solveRecursive(goalW - this.weights[i], i + 1); // go to next weight
            if (!w)
                return this.stack.pop();
        }
        else if (goalW < this.weights[i]) {
            var w = this.solveRecursive(goalW, i + 1); // go to next weight
            if (!w)
                return this.stack.pop();
        }
        //console.log('goalW: ' + goalW + ' i: ' + i + ' stack: ' + this.stack);
    };
    return KnapsackProblemLight;
}());
exports.default = KnapsackProblemLight;

//# sourceMappingURL=KnapsackProblemLight.js.map
