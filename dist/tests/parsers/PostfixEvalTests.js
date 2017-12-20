"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const epm = require("../../parsers/PostfixEval");
const inf2pm = require("../../parsers/Infix2Postfix");
class PostfixEvalTests extends tsUnit.TestClass {
    constructor() {
        super(...arguments);
        this.postfix = new epm.PostfixEval();
        this.inf2pstfx = new inf2pm.Infix2Postfix();
    }
    testEval_Empty() {
        const postfix = this.postfix.eval('');
        this.areIdentical(0, postfix);
    }
    testEval_Number() {
        const postfix = this.postfix.eval('4');
        this.areIdentical(4, postfix);
    }
    testEval_Expression() {
        const result = this.postfix.eval('3;4;5;+*6;1;2;+/-');
        this.areIdentical(25, result);
    }
    testEval_ComplexExpression() {
        // eval "6+10/2+(20-5/5)*54";
        const result = this.postfix.eval('6;10;2;/20;5;5;/-54;*++');
        this.areIdentical(1037, result);
    }
    testEvalExpressions() {
        const exprs = ['0-4/2', '100/5+0', '4-3*(300/2)', '6530/2+(56-100)'];
        for (const expr of exprs) {
            const postfixExpr = this.inf2pstfx.convert(expr);
            this.areIdentical(eval(expr), this.postfix.eval(postfixExpr));
        }
    }
}
exports.PostfixEvalTests = PostfixEvalTests;

//# sourceMappingURL=PostfixEvalTests.js.map
