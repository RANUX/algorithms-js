"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stk = require("../stacks/ArrayStack");
var Steps;
(function (Steps) {
    Steps[Steps["MENTER"] = 0] = "MENTER";
    Steps[Steps["MRECURSIVE_CALL"] = 1] = "MRECURSIVE_CALL";
    Steps[Steps["MCALL"] = 2] = "MCALL";
    Steps[Steps["MEXIT"] = 3] = "MEXIT";
    Steps[Steps["EXIT"] = 4] = "EXIT";
})(Steps || (Steps = {}));
/**
 * Params
 */
var Params = (function () {
    function Params(n, nextStep) {
        this.n = n;
        this.nextStep = nextStep;
    }
    return Params;
}());
/**
 * TriangleNums
 */
var TriangleNums = (function () {
    function TriangleNums() {
    }
    TriangleNums.prototype.triangleRecursive = function (n) {
        if (n == 1)
            return 1;
        return n + this.triangleRecursive(n - 1);
    };
    TriangleNums.prototype.triangleIterativ = function (n) {
        var stack = new stk.ArrayStack();
        var mParams;
        stack.push(new Params(n, Steps.EXIT)); // init stack with initial params
        var result;
        var step = Steps.MENTER;
        while (!stack.isEmpty()) {
            switch (step) {
                case Steps.MENTER:
                    mParams = stack.peek();
                    if (mParams.n === 1) {
                        result = 1;
                        step = Steps.MEXIT;
                    }
                    else {
                        step = Steps.MRECURSIVE_CALL;
                    }
                    break;
                case Steps.MRECURSIVE_CALL:
                    mParams = new Params(mParams.n - 1, Steps.MCALL);
                    stack.push(mParams);
                    step = Steps.MENTER;
                    break;
                case Steps.MCALL:
                    mParams = stack.peek();
                    result = mParams.n + result;
                    step = Steps.MEXIT;
                    break;
                case Steps.MEXIT:
                    mParams = stack.pop();
                    step = mParams.nextStep;
                    break;
            }
        }
        return result;
    };
    return TriangleNums;
}());
exports.default = TriangleNums;

//# sourceMappingURL=TriangleNums.js.map
