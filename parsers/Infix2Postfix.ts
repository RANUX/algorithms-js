/**
 * Converts infix numerical expression to postfix
 */
export class Infix2Postfix {
    
    private opPriority = {
        "/" : 2,
        "*" : 2,
        "+" : 1,
        "-" : 1
    };
    
    private output : string[];
    private stack  : string[];
    
    convert( expr : string ) : string {
        this.output = [];
        this.stack  = [];
        for (var i = 0; i < expr.length; i++){                  // for each char
            var ch = expr.charAt(i).toLowerCase();
            //console.log("For "+ch+" Stack (bottom->top): " + this.stack); // *debug log*
            switch (ch) {
                case "*":
                case "/":
                case "-":
                case "+":
                    this.getOperator(ch, this.opPriority[ch]);
                    break;
                case "(":
                    this.stack.push(ch);
                    break;
                case ")":
                    this.getCloseParen(ch);
                    break;
                
                default:
                    this.output.push(ch);
            }
        }
        while ( this.stack.length > 0 )
            this.output.push( this.stack.pop() );
        
        return this.output.join('');
    }
    
    private getOperator(ch : string, priority: number) {
        /*while ( this.stack.length > 0 ) 
        {
            
        }*/
        
        this.stack.push(ch);
/*
        while ( stack.length > 0 &&  this.opPriority[opTop] > this.opPriority[op] || op == "("){
            var opTop = stack.pop();
            if ( op == "(" ) {
                stack.push(op);
            } else if ( this.opPriority[opTop] >= this.opPriority[op] ) {  //( + >= - )?
                output.push(opTop);
                stack.push(op);
            } else { // opTop < opThis  ( + < * )?
                stack.push(opTop);
                break;
            }
        }
        stack.push(op);
        */
    }
    
    private getCloseParen(ch: string) {
        while( this.stack.length > 0) 
        {
            var chx = this.stack.pop();
            
            if( chx == "(" )           // if popped '('
                break;                 // we're done
            else                       // if popped operator
                this.output.push(chx);  // output it
         }  // end while
    }
}