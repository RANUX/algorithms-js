"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i2p = require("../parsers/Infix2Postfix");
const epm = require("../parsers/PostfixEval");
class EvalExprExample {
    constructor() {
        this.converter = new i2p.Infix2Postfix();
        this.pEval = new epm.PostfixEval();
    }
    logEvalExpr() {
        var str1 = "6+10/2+(20-5/5)*54";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        var postfix = this.converter.convert(str1);
        var result = this.pEval.eval(postfix);
        console.log(str1 + ' = ' + result);
    }
}
exports.EvalExprExample = EvalExprExample;

//# sourceMappingURL=EvalExprExample.js.map
