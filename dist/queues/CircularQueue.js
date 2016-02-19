/**
 * CircularQueue ( other name Circular buffer)
 */
var CircularQueue = (function () {
    function CircularQueue(size) {
        this.maxSize = size;
        this.qArray = new Array(this.maxSize);
        this.clear();
        this.nItems = 0;
        this.front = 0;
        this.rear = -1;
    }
    CircularQueue.prototype.enqueue = function (value) {
        if (this.isFull()) {
            throw new RangeError('CircularQueue is Full. MaxSize is ' + this.maxSize);
        }
        if (this.rear == this.maxSize - 1)
            this.rear = -1;
        this.qArray[++this.rear] = value;
        this.nItems++;
    };
    CircularQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw new RangeError('CircularQueue is Empty.');
        }
        var item = this.qArray[this.front++];
        if (this.front == this.maxSize)
            this.front = 0;
        this.nItems--;
        return item;
    };
    CircularQueue.prototype.clear = function () {
        this.rear = -1;
        this.front = 0;
    };
    CircularQueue.prototype.size = function () {
        return this.nItems;
    };
    CircularQueue.prototype.isEmpty = function () {
        return (this.nItems == 0);
    };
    CircularQueue.prototype.isFull = function () {
        return this.nItems == this.maxSize;
    };
    CircularQueue.prototype.peekFront = function () {
        return this.qArray[this.front];
    };
    CircularQueue.prototype.peekRear = function () {
        return this.qArray[this.rear];
    };
    return CircularQueue;
})();
exports.CircularQueue = CircularQueue;
//# sourceMappingURL=CircularQueue.js.map