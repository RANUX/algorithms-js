/**
 * Converts infix numerical expression to postfix
 */
export class Infix2Postfix {

    private opPriority = {
        '/' : 2,
        '*' : 2,
        '+' : 1,
        '-' : 1,
    };

    private output: string;
    private stack: string[];
    private separator: string;

    convert( expr: string, separator = ';' ): string {
        this.output = '';
        this.stack  = [];
        this.separator = separator;

        let wasClosingBracket = false;
        for (let i = 0; i < expr.length; i++) {                  // for each char
            const ch = expr.charAt(i).toLowerCase();
            // console.log("For "+ch+" Stack (bottom->top): " + this.stack); // *debug log*
            switch (ch) {
                case '*':
                case '/':
                case '-':
                case '+':
                    if ( !wasClosingBracket ) {
                        this.output += this.separator;
                    } else {
                        wasClosingBracket = false;
                    }
                    this.getOperator(ch);
                    break;
                case '(':
                    this.stack.push(ch);
                    break;
                case ')':
                    this.getCloseParen(ch);
                    wasClosingBracket = true;
                    break;

                default:
                    this.output += ch;

            }
        }

        let separatorAdded = false;
        while ( this.stack.length > 0 ) {
            if ( !separatorAdded ) {
                this.output += this.separator;
                separatorAdded = true;
            }
            this.output +=  this.stack.pop();
        }

        return this.output;
    }

    private getOperator(opCur: string) {

        if ( this.stack.length > 0 ) {
            // get previos operator and it's priority
            const opPrev      = this.stack.pop();
            const opPrevPrior = this.opPriority[opPrev];

             // get priority for current operator
            const opCurPrior = this.opPriority[opCur];

            if ( opPrevPrior >= opCurPrior ) {
                // put previous operator to output string
                this.output += opPrev;
            } else {                       // if ( opPrevPrior < opCurPrior )  '+' < '*'
                // put opPrev back to stack
                this.stack.push(opPrev);
            }

        }

        this.stack.push(opCur); // put current operator to stack
    }

    private getCloseParen(ch: string) {
        let separatorAdded = false;
        while (this.stack.length > 0) {
            const chx = this.stack.pop();

            if ( chx === '(' ) {           // if popped '('
                break;
            } else                       // if popped operator
                if ( !separatorAdded ) {
                    this.output += this.separator;
                    separatorAdded = true;
                }
            this.output += chx;  // output it
         }  // end while
    }
}
