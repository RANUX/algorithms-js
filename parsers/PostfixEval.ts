/**
 * EvalPostfix
 */
export class PostfixEval {
    
/**
 * Eval postfix:	345+*612+/-
 * 
    In  Stack
--------------
    3	3
    4	3,4
    5	3,4,5
    +	3,9
    *	27
    6	27,6
    1	27,6,1
    2	27,6,1,2
    +	27,6,3
    /	27,2
    -	25
---------------
 */
    /**
     *
     */
    
    op : Object;
    
    constructor() {
        this.op = {
            "+" : ( a:number, b:number ) => {
                return a+b;
            },
            "-" : ( a:number, b:number ) => {
                return a-b;
            },
            "*" : ( a:number, b:number ) => {
                return a*b;
            },
            "/" : ( a:number, b:number ) => {
                return a/b;
            }
            
        }
    }
    eval(expr : string, separator = ";") : number {
        var stack  = [];
        var num    = "";
        
        for (var i = 0; i < expr.length; i++)    // for each char
        {    
            var ch = expr.charAt(i).toLowerCase();
            switch (ch) {
                case "+":
                case "*":
                case "/":
                case "-":
                    var val1 = stack.pop();
                    var val2 = stack.pop();
                    // compute expression and push ansver to stack
                    stack.push( this.op[ch](val2, val1) )
                    break;
                case separator:
                    stack.push(parseFloat(num));
                    num = "";
                    break;
                default:
                    num += ch;
                    
            }
        }

        return stack.length > 0 ? stack[0] : (num ? parseFloat(num) : 0);
    }
}