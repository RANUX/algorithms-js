/**
 * ArrayStack implements IStack
 */
var Stack;
(function (Stack) {
    var ArrayStack = (function () {
        function ArrayStack() {
            this.clear();
        }
        ArrayStack.prototype.push = function (value) {
            this.a[++this.top] = value;
            return this.a.length;
        };
        ArrayStack.prototype.pop = function () {
            return this.a[this.top--];
        };
        ArrayStack.prototype.peek = function () {
            return this.a[this.top];
        };
        ArrayStack.prototype.clear = function () {
            this.top = -1;
            this.a = [];
        };
        ArrayStack.prototype.length = function () {
            return this.top + 1;
        };
        ArrayStack.prototype.isEmpty = function () {
            return !this.a;
        };
        ArrayStack.prototype.toString = function () {
            var aStr = "[";
            for (var i = 0; i <= this.top; i++) {
                aStr += this.a[i] + ", ";
            }
            aStr = aStr.slice(0, aStr.length - 2);
            aStr += "]";
            return "Top: " + this.top + " Stack content: " + aStr;
        };
        return ArrayStack;
    })();
    Stack.ArrayStack = ArrayStack;
})(Stack = exports.Stack || (exports.Stack = {}));

//# sourceMappingURL=ArrayStack.js.map
