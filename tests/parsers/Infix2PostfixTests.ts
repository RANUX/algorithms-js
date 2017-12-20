import * as tsUnit from '../../node_modules/ts-unit';
import i2p = require('../../parsers/Infix2Postfix');

export class Infix2PostfixTests extends tsUnit.TestClass {

    inf2Pstfx = new i2p.Infix2Postfix();
    
    testConvert_Empty() {
        var postfix = this.inf2Pstfx.convert("");
        this.areIdentical("", postfix);
    }
    
    testConvert_Symbol() {
        var postfix = this.inf2Pstfx.convert("A", "");
        this.areIdentical("a", postfix);
    }
    
    testConvert_AplusB() {
        var postfix = this.inf2Pstfx.convert("A+B", "");
        this.areIdentical("ab+", postfix);
    }

    testConvert_AplusBminusC() {
        
        var postfix = this.inf2Pstfx.convert("A+B-C", "");
        this.areIdentical("ab+c-", postfix);
    }
    
    testConvert_AplusBmulC() {
        var postfix = this.inf2Pstfx.convert("A+B*C", "");
        this.areIdentical("abc*+", postfix);
    }
    
    testConvert_AmulBplusC() {
        var postfix = this.inf2Pstfx.convert("A*B-C", "");
        this.areIdentical("ab*c-", postfix);
    }
    
    testConvert_A_mul_BRK_B_plus_C_BRK() {
        var postfix = this.inf2Pstfx.convert("A*(B+C)", "");
        this.areIdentical("abc+*", postfix);
    }
    
    testConvertComplexExpression1() {
        var postfix = this.inf2Pstfx.convert("A*(B+C)-D/(E+F)", "");
        this.areIdentical("abc+*def+/-", postfix);
    }
    
    testConvertComplexExpression2() {
        var postfix = this.inf2Pstfx.convert("A*(B+C+D)-D/(D*E+F)", "");
        this.areIdentical("abc+d+*dde*f+/-", postfix);
    }
    
    testConvertComplexExpression3() {
        var postfix = this.inf2Pstfx.convert("3*(4+5)-6/(1+2)", "");
        this.areIdentical("345+*612+/-", postfix);
    }
    
    testConvertComplexExpression4() {
        var postfix = this.inf2Pstfx.convert("20-5+400");
        this.areIdentical("20;5;-400;+", postfix);
    }
    
     testConvertComplexExpression5() {
        var infix = "203*(50+40)+100";
        var postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical("203;50;40;+*100;+", postfix, "INFIX: " +infix);
    }
    
    testConvertComplexExpression6() {
        var infix = "203*(50+40)*(10*7+4)";
        var postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical("203;50;40;+*10;7;*4;+;*", postfix, "INFIX: " +infix);
    }
}