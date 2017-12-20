"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CircularQueue ( other name Circular buffer)
 */
class CircularQueue {
    constructor(size) {
        this.maxSize = size;
        this.qArray = new Array(this.maxSize);
        this.clear();
        this.nItems = 0;
        this.front = 0;
        this.rear = -1;
    }
    enqueue(value) {
        if (this.isFull()) {
            throw new RangeError('CircularQueue is Full. MaxSize is ' + this.maxSize);
        }
        if (this.rear == this.maxSize - 1)
            this.rear = -1;
        this.qArray[++this.rear] = value;
        this.nItems++;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new RangeError('CircularQueue is Empty.');
        }
        var item = this.qArray[this.front++];
        if (this.front == this.maxSize)
            this.front = 0;
        this.nItems--;
        return item;
    }
    clear() {
        this.rear = -1;
        this.front = 0;
    }
    size() {
        return this.nItems;
    }
    isEmpty() {
        return (this.nItems == 0);
    }
    isFull() {
        return this.nItems == this.maxSize;
    }
    peekFront() {
        return this.qArray[this.front];
    }
    peekRear() {
        return this.qArray[this.rear];
    }
}
exports.CircularQueue = CircularQueue;

//# sourceMappingURL=CircularQueue.js.map
