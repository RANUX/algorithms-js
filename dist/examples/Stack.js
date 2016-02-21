var stack = require("../stacks/ArrayStack");
var lstk = require("../stacks/LinkedStack");
var shuffle = require('knuth-shuffle');
var StackExample = (function () {
    function StackExample() {
        this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        this.aStack = new stack.ArrayStack();
        this.lStack = new lstk.LinkedStack();
    }
    StackExample.prototype.logStacks = function () {
        this.logStack(this.aStack, "ARRAY STACK");
        this.logStack(this.lStack, "LINKED STACK");
    };
    StackExample.prototype.logStack = function (stack, stackName) {
        console.log("===== SIMPLE " + stackName + " EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        console.log("Data before insert into stack: " + this.data);
        for (var i in this.data) {
            stack.push(this.data[i]);
        }
        console.log("Full Stack: " + stack.length() + " " + stack.toString());
        var popedItems = "";
        for (var e in this.data) {
            popedItems += stack.pop() + ", ";
        }
        popedItems = popedItems.slice(0, popedItems.length - 2);
        console.log("popedItems : [ " + popedItems + " ]");
        console.log("Empty Stack: " + stack.length() + " " + stack.toString());
    };
    return StackExample;
})();
exports.StackExample = StackExample;

//# sourceMappingURL=Stack.js.map
