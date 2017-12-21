"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ArrayStack implements IStack
 */
class ArrayStack {
    constructor() {
        this.clear();
    }
    push(value) {
        this.a[++this.top] = value;
        return this.a.length;
    }
    pop() {
        return this.a[this.top--];
    }
    peek() {
        return this.a[this.top];
    }
    clear() {
        this.top = -1;
        this.a = [];
    }
    length() {
        return this.top + 1;
    }
    size() {
        return this.length();
    }
    isEmpty() {
        return this.top === -1;
    }
    toString() {
        if (this.isEmpty()) {
            return 'Top: -1: Stack content: []';
        }
        let aStr = '[';
        for (let i = 0; i <= this.top; i++) {
            aStr += this.a[i] + ', ';
        }
        aStr = aStr.slice(0, aStr.length - 2);
        aStr += ']';
        return 'Top: ' + this.top + ' Stack content: ' + aStr;
    }
}
exports.ArrayStack = ArrayStack;

//# sourceMappingURL=ArrayStack.js.map
