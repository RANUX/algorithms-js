/**
 * PriorityQueue
 */
var PriorityQueue = (function () {
    function PriorityQueue() {
        this.clear();
    }
    PriorityQueue.prototype.enqueue = function (value) {
        var j;
        if (this.nItems == 0) {
            this.qArray[this.nItems++] = value;
        }
        else {
            for (j = this.nItems - 1; j >= 0; j--) {
                if (value > this.qArray[j])
                    this.qArray[j + 1] = this.qArray[j]; // shift upward
                else
                    break; // done shifting
            } // end for
            this.qArray[j + 1] = value; // insert it
            this.nItems++;
        } // end else (nItems > 0)
    };
    PriorityQueue.prototype.dequeue = function () {
        return this.qArray[--this.nItems];
    };
    PriorityQueue.prototype.clear = function () {
        this.nItems = 0;
        this.qArray = [];
    };
    PriorityQueue.prototype.size = function () {
        return 0;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return (this.nItems == 0);
    };
    PriorityQueue.prototype.isFull = function () {
        return false;
    };
    PriorityQueue.prototype.peekFront = function () {
        return this.qArray[this.nItems - 1];
    };
    PriorityQueue.prototype.peekRear = function () {
        if (this.isEmpty()) {
            throw new RangeError('PriorityQueue is Empty.');
        }
        return this.qArray[0];
    };
    return PriorityQueue;
})();
exports.PriorityQueue = PriorityQueue;

//# sourceMappingURL=PriorityQueue.js.map
