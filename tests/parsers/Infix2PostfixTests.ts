import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import i2p = require('../../parsers/Infix2Postfix');

export class Infix2PostfixTests extends tsUnit.TestClass {

    inf2Pstfx = new i2p.Infix2Postfix();
    
    testConvertEmpty() {
        var postfix = this.inf2Pstfx.convert("");
        this.areIdentical("", postfix);
    }
    
    testConvertSymbol() {
        var postfix = this.inf2Pstfx.convert("A");
        this.areIdentical("a", postfix);
    }
    
    testConvertAplusB() {
        var postfix = this.inf2Pstfx.convert("A+B");
        this.areIdentical("ab+", postfix);
    }

    // testConvertAplusBplusC() {
        
    //     var postfix = this.inf2Pstfx.convert("A+B-C").toUpperCase();
    //     this.areIdentical("AB+C-", postfix);
    // }

}