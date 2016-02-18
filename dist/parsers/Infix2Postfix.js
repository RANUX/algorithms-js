/**
 * Converts infix numerical expression to postfix
 */
var Infix2Postfix = (function () {
    function Infix2Postfix() {
        this.opPriority = {
            "/": 2,
            "*": 2,
            "+": 1,
            "-": 1
        };
    }
    Infix2Postfix.prototype.convert = function (expr) {
        this.output = [];
        this.stack = [];
        for (var i = 0; i < expr.length; i++) {
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
        while (this.stack.length > 0)
            this.output.push(this.stack.pop());
        return this.output.join('');
    };
    Infix2Postfix.prototype.getOperator = function (ch, priority) {
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
    };
    Infix2Postfix.prototype.getCloseParen = function (ch) {
        while (this.stack.length > 0) {
            var chx = this.stack.pop();
            if (chx == "(")
                break; // we're done
            else
                this.output.push(chx); // output it
        } // end while
    };
    return Infix2Postfix;
})();
exports.Infix2Postfix = Infix2Postfix;

//# sourceMappingURL=Infix2Postfix.js.map
