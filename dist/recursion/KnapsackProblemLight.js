var utils = require("../arrays/ArrayHelpers");
/**
 * KnapsackProblemLight only weights without prices
 */
var KnapsackProblemLight = (function () {
    function KnapsackProblemLight(weights) {
        this.setWeights(weights);
        this.stack = [];
    }
    KnapsackProblemLight.prototype.solve = function (goalW) {
        this.result = [];
        for (var i = 0; i < this.weights.length; i++) {
            this.solveRecursive(goalW, i);
            if (this.stack.length > 0)
                break; // solution found
        }
        return this.result;
    };
    KnapsackProblemLight.prototype.setWeights = function (weights) {
        this.weights = weights;
    };
    KnapsackProblemLight.prototype.solveRecursive = function (goalW, i) {
        //console.log('goalW: ' + goalW + ' i: ' + i);
        if (i == this.weights.length) {
            return undefined;
        }
        else if (goalW == this.weights[i]) {
            this.result = utils.shallowCopy(this.stack); // items found
            this.result.push(this.weights[i]);
            return this.weights[i];
        }
        else if (goalW > this.weights[i]) {
            this.stack.push(this.weights[i]);
            var w = this.solveRecursive(goalW - this.weights[i], i + 1); // go to next weight
            if (!w)
                this.stack.pop();
            else
                this.stack.push(w);
        }
        else if (goalW < this.weights[i]) {
            var w = this.solveRecursive(goalW, i + 1); // go to next weight
            if (!w)
                this.stack.pop();
            else
                this.stack.push(w);
        }
        //console.log('goalW: ' + goalW + ' i: ' + i + ' stack: ' + this.stack);
    };
    return KnapsackProblemLight;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KnapsackProblemLight;

//# sourceMappingURL=KnapsackProblemLight.js.map
