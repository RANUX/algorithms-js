"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PriorityQueue
 */
class PriorityQueue {
    constructor() {
        this.clear();
    }
    enqueue(value, compareFn = (val, aItem) => val > aItem) {
        var j;
        if (this.nItems == 0) {
            this.qArray[this.nItems++] = value;
        }
        else {
            for (j = this.nItems - 1; j >= 0; j--) {
                if (compareFn(value, this.qArray[j]))
                    this.qArray[j + 1] = this.qArray[j]; // shift upward
                else
                    break; // done shifting
            } // end for
            this.qArray[j + 1] = value; // insert it
            this.nItems++;
        } // end else (nItems > 0)
    }
    dequeue() {
        return this.qArray[--this.nItems];
    }
    clear() {
        this.nItems = 0;
        this.qArray = [];
    }
    size() {
        return this.nItems;
    }
    isEmpty() {
        return (this.nItems == 0);
    }
    isFull() {
        return false;
    }
    peekFront() {
        return this.qArray[this.nItems - 1];
    }
    peekRear() {
        if (this.isEmpty()) {
            throw new RangeError('PriorityQueue is Empty.');
        }
        return this.qArray[0];
    }
}
exports.default = PriorityQueue;

//# sourceMappingURL=PriorityQueue.js.map
