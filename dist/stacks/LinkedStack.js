var ffl = require("../lists/FirstLastList");
/**
 * LinkedStack
 */
var LinkedStack = (function () {
    function LinkedStack() {
        this.list = new ffl.FirstLastList();
    }
    LinkedStack.prototype.push = function (value) {
        this.list.insertFirst(value);
        return this.list.size();
    };
    LinkedStack.prototype.pop = function () {
        return this.list.deleteFirst();
    };
    LinkedStack.prototype.peek = function () {
        return this.list.peekFirst().data;
    };
    LinkedStack.prototype.clear = function () {
        this.list.clear();
    };
    LinkedStack.prototype.length = function () {
        return this.list.size();
    };
    LinkedStack.prototype.isEmpty = function () {
        return (this.list.size() == 0);
    };
    return LinkedStack;
})();
exports.LinkedStack = LinkedStack;

//# sourceMappingURL=LinkedStack.js.map
