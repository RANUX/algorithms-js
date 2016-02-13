var m = require("../stack/ArrayStack");
var shuffle = require('knuth-shuffle');
var Examples;
(function (Examples) {
    var Stack = (function () {
        function Stack() {
            this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
            this.aStack = new m.Stack.ArrayStack();
        }
        Stack.prototype.logArrayStack = function () {
            shuffle.knuthShuffle(this.data);
            for (var e in this.data) {
                this.aStack.push(e);
                console.log("Stack size: " + this.aStack.length());
            }
            for (var e in this.data) {
                this.aStack.pop();
                console.log("Stack size: " + this.aStack.length());
            }
        };
        return Stack;
    })();
    Examples.Stack = Stack;
})(Examples = exports.Examples || (exports.Examples = {}));

//# sourceMappingURL=Stack.js.map
