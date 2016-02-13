var stack = require("../stack/ArrayStack");
var shuffle = require('knuth-shuffle');
var StackExample = (function () {
    function StackExample() {
        this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        this.aStack = new stack.ArrayStack();
    }
    StackExample.prototype.logArrayStack = function () {
        console.log("===== SIMPLE ARRAY STACK EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        console.log("Data before insert into stack: " + this.data);
        for (var i in this.data) {
            this.aStack.push(this.data[i]);
        }
        console.log("Full Stack: " + this.aStack.length() + " " + this.aStack.toString());
        var popedItems = "";
        for (var e in this.data) {
            popedItems += this.aStack.pop() + ", ";
        }
        popedItems = popedItems.slice(0, popedItems.length - 2);
        console.log("popedItems : [ " + popedItems + " ]");
        console.log("Empty Stack: " + this.aStack.length() + " " + this.aStack.toString());
    };
    return StackExample;
})();
exports.StackExample = StackExample;

//# sourceMappingURL=Stack.js.map
