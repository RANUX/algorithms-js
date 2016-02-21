////////////////////////////////////////////////////////////////
var LinkElem = (function () {
    // -------------------------------------------------------------
    /**
     *
     */
    function LinkElem(data) {
        this.data = data;
    }
    return LinkElem;
})(); // end class Element
////////////////////////////////////////////////////////////////
var FirstLastList = (function () {
    // -------------------------------------------------------------
    function FirstLastList() {
        this.clear();
    }
    // -------------------------------------------------------------
    FirstLastList.prototype.isEmpty = function () {
        return this.first == null;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.insertLast = function (value) {
        var newLink = new LinkElem(value); // make new link
        if (this.isEmpty())
            this.first = newLink; // first --> newLink
        else
            this.last.next = newLink; // old last --> newLink
        this.last = newLink; // newLink <-- last
        this._size++;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.deleteFirst = function () {
        var temp = this.first.data;
        if (this.first.next == null)
            this.last = null; // null <-- last
        this.first = this.first.next; // first --> old next
        this._size--;
        return temp;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.displayList = function () {
        var current = this.first; // start at beginning
        while (current != null) {
            console.log(current); // print data
            current = current.next; // move to next link
        }
        console.log('');
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.size = function () {
        return this._size;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this._size = 0;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.peekFirst = function () {
        return this.first;
    };
    // -------------------------------------------------------------
    FirstLastList.prototype.peekLast = function () {
        return this.last;
    };
    return FirstLastList;
})(); // end class FirstLastList
////////////////////////////////////////////////////////////////
/**
 * LinkedQueue based on LinkedList
 */
var LinkedQueue = (function () {
    function LinkedQueue() {
        this.list = new FirstLastList();
    }
    LinkedQueue.prototype.enqueue = function (value) {
        this.list.insertLast(value);
    };
    LinkedQueue.prototype.dequeue = function () {
        return this.list.deleteFirst();
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
})();
exports.LinkedQueue = LinkedQueue;

//# sourceMappingURL=LinkedQueue.js.map
