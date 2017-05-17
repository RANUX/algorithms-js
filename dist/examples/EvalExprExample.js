"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i2p = require("../parsers/Infix2Postfix");
var epm = require("../parsers/PostfixEval");
var EvalExprExample = (function () {
    function EvalExprExample() {
        this.converter = new i2p.Infix2Postfix();
        this.pEval = new epm.PostfixEval();
    }
    EvalExprExample.prototype.logEvalExpr = function () {
        var str1 = "6+10/2+(20-5/5)*54";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        var postfix = this.converter.convert(str1);
        var result = this.pEval.eval(postfix);
        console.log(str1 + ' = ' + result);
    };
    return EvalExprExample;
}());
exports.EvalExprExample = EvalExprExample;

//# sourceMappingURL=EvalExprExample.js.map
