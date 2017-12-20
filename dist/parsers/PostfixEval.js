"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * EvalPostfix
 */
class PostfixEval {
    constructor() {
        this.op = {
            '+': (a, b) => {
                return a + b;
            },
            '-': (a, b) => {
                return a - b;
            },
            '*': (a, b) => {
                return a * b;
            },
            '/': (a, b) => {
                return a / b;
            }
        };
    }
    eval(expr, separator = ';') {
        var stack = [];
        var num = '';
        for (var i = 0; i < expr.length; i++) {
            var ch = expr.charAt(i).toLowerCase();
            switch (ch) {
                case '+':
                case '*':
                case '/':
                case '-':
                    const val1 = stack.pop();
                    const val2 = stack.pop();
                    // compute expression and push ansver to stack
                    stack.push(this.op[ch](val2, val1));
                    break;
                case separator:
                    if (num) {
                        stack.push(parseFloat(num));
                    }
                    num = '';
                    break;
                default:
                    num += ch;
            }
        }
        return stack.length > 0 ? stack[0] : (num ? parseFloat(num) : 0);
    }
}
exports.PostfixEval = PostfixEval;

//# sourceMappingURL=PostfixEval.js.map
