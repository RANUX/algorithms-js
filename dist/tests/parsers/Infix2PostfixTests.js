"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const i2p = require("../../parsers/Infix2Postfix");
class Infix2PostfixTests extends tsUnit.TestClass {
    constructor() {
        super(...arguments);
        this.inf2Pstfx = new i2p.Infix2Postfix();
    }
    testConvert_Empty() {
        const postfix = this.inf2Pstfx.convert('');
        this.areIdentical('', postfix);
    }
    testConvert_Symbol() {
        const postfix = this.inf2Pstfx.convert('A', '');
        this.areIdentical('a', postfix);
    }
    testConvert_AplusB() {
        let postfix = this.inf2Pstfx.convert('A+B', '');
        this.areIdentical('ab+', postfix);
    }
    testConvert_AplusBminusC() {
        const postfix = this.inf2Pstfx.convert('A+B-C', '');
        this.areIdentical('ab+c-', postfix);
    }
    testConvert_AplusBmulC() {
        const postfix = this.inf2Pstfx.convert('A+B*C', '');
        this.areIdentical('abc*+', postfix);
    }
    testConvert_AmulBplusC() {
        const postfix = this.inf2Pstfx.convert('A*B-C', '');
        this.areIdentical('ab*c-', postfix);
    }
    testConvert_A_mul_BRK_B_plus_C_BRK() {
        const postfix = this.inf2Pstfx.convert('A*(B+C)', '');
        this.areIdentical('abc+*', postfix);
    }
    testConvertComplexExpression1() {
        const postfix = this.inf2Pstfx.convert('A*(B+C)-D/(E+F)', '');
        this.areIdentical('abc+*def+/-', postfix);
    }
    testConvertComplexExpression2() {
        const postfix = this.inf2Pstfx.convert('A*(B+C+D)-D/(D*E+F)', '');
        this.areIdentical('abc+d+*dde*f+/-', postfix);
    }
    testConvertComplexExpression3() {
        const postfix = this.inf2Pstfx.convert('3*(4+5)-6/(1+2)', '');
        this.areIdentical('345+*612+/-', postfix);
    }
    testConvertComplexExpression4() {
        const postfix = this.inf2Pstfx.convert('20-5+400');
        this.areIdentical('20;5;-400;+', postfix);
    }
    testConvertComplexExpression5() {
        const infix = '203*(50+40)+100';
        const postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical('203;50;40;+*100;+', postfix, 'INFIX: ' + infix);
    }
    testConvertComplexExpression6() {
        const infix = '203*(50+40)*(10*7+4)';
        const postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical('203;50;40;+*10;7;*4;+;*', postfix, 'INFIX: ' + infix);
    }
}
exports.Infix2PostfixTests = Infix2PostfixTests;

//# sourceMappingURL=Infix2PostfixTests.js.map
