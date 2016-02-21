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
    Infix2Postfix.prototype.convert = function (expr, separator) {
        if (separator === void 0) { separator = ";"; }
        this.output = '';
        this.stack = [];
        this.separator = separator;
        var wasClosingBracket = false;
        for (var i = 0; i < expr.length; i++) {
            var ch = expr.charAt(i).toLowerCase();
            //console.log("For "+ch+" Stack (bottom->top): " + this.stack); // *debug log*
            switch (ch) {
                case "*":
                case "/":
                case "-":
                case "+":
                    if (!wasClosingBracket)
                        this.output += this.separator;
                    else
                        wasClosingBracket = false;
                    this.getOperator(ch);
                    break;
                case "(":
                    this.stack.push(ch);
                    break;
                case ")":
                    this.getCloseParen(ch);
                    wasClosingBracket = true;
                    break;
                default:
                    this.output += ch;
            }
        }
        var separatorAdded = false;
        while (this.stack.length > 0) {
            if (!separatorAdded) {
                this.output += this.separator;
                separatorAdded = true;
            }
            this.output += this.stack.pop();
        }
        return this.output;
    };
    Infix2Postfix.prototype.getOperator = function (opCur) {
        if (this.stack.length > 0) {
            // get previos operator and it's priority
            var opPrev = this.stack.pop();
            var opPrevPrior = this.opPriority[opPrev];
            // get priority for current operator
            var opCurPrior = this.opPriority[opCur];
            if (opPrevPrior >= opCurPrior) {
                // put previous operator to output string
                this.output += opPrev;
            }
            else {
                // put opPrev back to stack
                this.stack.push(opPrev);
            }
        }
        this.stack.push(opCur); // put current operator to stack
    };
    Infix2Postfix.prototype.getCloseParen = function (ch) {
        var separatorAdded = false;
        while (this.stack.length > 0) {
            var chx = this.stack.pop();
            if (chx == "(")
                break; // we're done
            else if (!separatorAdded) {
                this.output += this.separator;
                separatorAdded = true;
            }
            this.output += chx; // output it
        } // end while
    };
    return Infix2Postfix;
})();
exports.Infix2Postfix = Infix2Postfix;

//# sourceMappingURL=Infix2Postfix.js.map
