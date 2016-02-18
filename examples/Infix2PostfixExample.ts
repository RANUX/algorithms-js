import * as ahm from "../arrays/ArrayHelpers";
import * as pm  from "../parsers/Infix2Postfix"


export class Infix2PostfixExample {
    
    private converter : pm.Infix2Postfix = new pm.Infix2Postfix();
    
    logConvertExpr() {
        var str1 = "A+B-C";
        var str2 = "A*(B+C)-D/(E+F)";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        this.convert(str1);
        this.convert(str2);
    }
    
    private convert(str) {
        console.log('Infix expression: ' + str);
        console.log('Postfix expression: ' + this.converter.convert(str).toUpperCase() );
    }
}