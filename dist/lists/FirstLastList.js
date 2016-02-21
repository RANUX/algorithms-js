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
})();
exports.LinkElem = LinkElem; // end class Element
////////////////////////////////////////////////////////////////
/**
 * FirstLastList linked list realization.
 */
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
    FirstLastList.prototype.insertFirst = function (value) {
        var newLink = new LinkElem(value);
        if (this.isEmpty())
            this.last = newLink;
        newLink.next = this.first; // newLink --> old first
        this.first = newLink; // first --> newLink
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
})();
exports.FirstLastList = FirstLastList; // end class FirstLastList
//////////////////////////////////////////////////////////////// 

//# sourceMappingURL=FirstLastList.js.map
