"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffl = require("../lists/FirstLastList");
/**
 * LinkedStack
 */
class LinkedStack {
    constructor() {
        this.list = new ffl.FirstLastList();
    }
    push(value) {
        this.list.insertFirst(value);
        return this.list.size();
    }
    pop() {
        return this.list.deleteFirst();
    }
    peek() {
        return this.list.peekFirst().data;
    }
    clear() {
        this.list.clear();
    }
    length() {
        return this.list.size();
    }
    size() {
        return this.length();
    }
    isEmpty() {
        return (this.list.size() === 0);
    }
}
exports.LinkedStack = LinkedStack;

//# sourceMappingURL=LinkedStack.js.map
