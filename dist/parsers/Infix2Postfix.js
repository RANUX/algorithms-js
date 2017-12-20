"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts infix numerical expression to postfix
 */
class Infix2Postfix {
    constructor() {
        this.opPriority = {
            '/': 2,
            '*': 2,
            '+': 1,
            '-': 1,
        };
    }
    convert(expr, separator = ';') {
        this.output = '';
        this.stack = [];
        this.separator = separator;
        let wasClosingBracket = false;
        for (let i = 0; i < expr.length; i++) {
            const ch = expr.charAt(i).toLowerCase();
            // console.log("For "+ch+" Stack (bottom->top): " + this.stack); // *debug log*
            switch (ch) {
                case '*':
                case '/':
                case '-':
                case '+':
                    if (!wasClosingBracket) {
                        this.output += this.separator;
                    }
                    else {
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
        while (this.stack.length > 0) {
            if (!separatorAdded) {
                this.output += this.separator;
                separatorAdded = true;
            }
            this.output += this.stack.pop();
        }
        return this.output;
    }
    getOperator(opCur) {
        if (this.stack.length > 0) {
            // get previos operator and it's priority
            const opPrev = this.stack.pop();
            const opPrevPrior = this.opPriority[opPrev];
            // get priority for current operator
            const opCurPrior = this.opPriority[opCur];
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
    }
    getCloseParen(ch) {
        let separatorAdded = false;
        while (this.stack.length > 0) {
            const chx = this.stack.pop();
            if (chx === '(') {
                break;
            }
            else if (!separatorAdded) {
                this.output += this.separator;
                separatorAdded = true;
            }
            this.output += chx; // output it
        } // end while
    }
}
exports.Infix2Postfix = Infix2Postfix;

//# sourceMappingURL=Infix2Postfix.js.map
