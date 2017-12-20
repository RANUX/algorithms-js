import * as tsUnit from '../../node_modules/ts-unit';
import epm = require('../../parsers/PostfixEval');

export class PostfixEvalTests extends tsUnit.TestClass {

    postfix = new epm.PostfixEval();
    
    testEval_Empty() {
        var postfix = this.postfix.eval("");
        this.areIdentical(0, postfix);
    }

    testEval_Number() {
        var postfix = this.postfix.eval("4");
        this.areIdentical(4, postfix);
    }
    
    testEval_Expression() {
        var result = this.postfix.eval("3;4;5;+*6;1;2;+/-");
        this.areIdentical(25, result);
    }
    
    testEval_ComplexExpression() {
        // eval "6+10/2+(20-5/5)*54";
        var result = this.postfix.eval("6;10;2;/20;5;5;/-54;*++");
        this.areIdentical(1037, result);
        
    }
    
}