import * as ahm from "../helpers/ArrayHelpers";
import * as i2p  from "../parsers/Infix2Postfix"
import * as epm  from "../parsers/PostfixEval"


export class EvalExprExample {
    
    private converter : i2p.Infix2Postfix = new i2p.Infix2Postfix();
    private pEval     : epm.PostfixEval   = new epm.PostfixEval();
    
    logEvalExpr() {
        var str1 = "6+10/2+(20-5/5)*54";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        
        var postfix = this.converter.convert(str1);
        var result = this.pEval.eval( postfix );
        console.log(str1 + ' = ' + result );
    }
   
}