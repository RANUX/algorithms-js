import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import epm = require('../../parsers/PostfixEval');
export declare class EvalPostfixTests extends tsUnit.TestClass {
    postfix: epm.PostfixEval;
    testEval_Empty(): void;
    testEval_Expression(): void;
}
