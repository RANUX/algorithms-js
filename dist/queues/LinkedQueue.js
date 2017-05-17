"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ffl = require("../lists/FirstLastList");
/**
 * LinkedQueue based on LinkedList
 */
var LinkedQueue = (function () {
    function LinkedQueue() {
        this.list = new ffl.FirstLastList();
    }
    LinkedQueue.prototype.enqueue = function (value) {
        this.list.push(value);
    };
    LinkedQueue.prototype.dequeue = function () {
        return this.list.shift();
    };
    LinkedQueue.prototype.clear = function () {
        this.list.clear();
    };
    LinkedQueue.prototype.size = function () {
        return this.list.size();
    };
    LinkedQueue.prototype.isEmpty = function () {
        return (this.list.size() == 0);
    };
    LinkedQueue.prototype.peekFront = function () {
        return this.list.peekFirst().data;
    };
    LinkedQueue.prototype.peekRear = function () {
        return this.list.peekLast().data;
    };
    return LinkedQueue;
}());
exports.LinkedQueue = LinkedQueue;

//# sourceMappingURL=LinkedQueue.js.map
