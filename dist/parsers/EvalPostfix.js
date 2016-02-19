/**
 * EvalPostfix
 */
var PostfixEval = (function () {
    function PostfixEval() {
        this.op = {
            "+": function (a, b) {
                return a + b;
            },
            "-": function (a, b) {
                return a - b;
            },
            "*": function (a, b) {
                return a * b;
            },
            "/": function (a, b) {
                return a / b;
            }
        };
    }
    PostfixEval.prototype.eval = function (expr) {
        var stack = [];
        for (var i = 0; i < expr.length; i++) {
            var ch = expr.charAt(i).toLowerCase();
            switch (ch) {
                case "+":
                case "*":
                case "/":
                case "-":
                    var val1 = stack.pop();
                    var val2 = stack.pop();
                    // compute expression and push ansver to stack
                    stack.push(this.op[ch](val2, val1));
                    break;
                default:
                    stack.push(parseFloat(ch));
            }
        }
        return stack.length > 0 ? stack[0] : 0;
    };
    return PostfixEval;
})();
exports.PostfixEval = PostfixEval;
//# sourceMappingURL=EvalPostfix.js.map