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
                    this.getOperator(ch);
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
    
    private getOperator(opCur : string) {
        
        if ( this.stack.length > 0 ) 
        {
            // get previos operator and it's priority
            var opPrev      = this.stack.pop();
            var opPrevPrior = this.opPriority[opPrev];
             
             // get priority for current operator
            var opCurPrior = this.opPriority[opCur];
            
            if ( opPrevPrior >= opCurPrior ) 
            {
                // put previous operator to output string
                this.output.push(opPrev);
            } else {                       //if ( opPrevPrior < opCurPrior )  '+' < '*'
                // put opPrev back to stack
                this.stack.push(opPrev);   
            }
            
        }
        
        this.stack.push(opCur); // put current operator to stack
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