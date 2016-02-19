import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import i2p = require('../../parsers/Infix2Postfix');
export declare class Infix2PostfixTests extends tsUnit.TestClass {
    inf2Pstfx: i2p.Infix2Postfix;
    testConvert_Empty(): void;
    testConvert_Symbol(): void;
    testConvert_AplusB(): void;
    testConvert_AplusBminusC(): void;
    testConvert_AplusBmulC(): void;
    testConvert_AmulBplusC(): void;
    testConvert_A_mul_BRK_B_plus_C_BRK(): void;
    testConvertComplexExpression1(): void;
    testConvertComplexExpression2(): void;
    testConvertComplexExpression3(): void;
    testConvertComplexExpression4(): void;
    testConvertComplexExpression5(): void;
    testConvertComplexExpression6(): void;
}
