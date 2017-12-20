"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ffl = require("../lists/FirstLastList");
/**
 * LinkedQueue based on LinkedList
 */
class LinkedQueue {
    constructor() {
        this.list = new ffl.FirstLastList();
    }
    enqueue(value) {
        this.list.push(value);
    }
    dequeue() {
        return this.list.shift();
    }
    clear() {
        this.list.clear();
    }
    size() {
        return this.list.size();
    }
    isEmpty() {
        return (this.list.size() == 0);
    }
    peekFront() {
        return this.list.peekFirst().data;
    }
    peekRear() {
        return this.list.peekLast().data;
    }
}
exports.LinkedQueue = LinkedQueue;

//# sourceMappingURL=LinkedQueue.js.map
