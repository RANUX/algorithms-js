"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////////////////////////////////
var LinkElem = (function () {
    /**
     *
     */
    function LinkElem(data) {
        this.value = data;
        this.next = null;
    }
    LinkElem.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return LinkElem;
}()); // end class Element
exports.LinkElem = LinkElem;
////////////////////////////////////////////////////////////////
/**
 * FirstLastList linked list realization.
 */
var FirstLastList = (function () {
    function FirstLastList() {
        this.clear();
    }
    FirstLastList.prototype.isEmpty = function () {
        return this.first == null;
    };
    FirstLastList.prototype.insert = function (index, value) {
        var newElem = new LinkElem(value);
        var previous = null;
        var current = this.first;
        var i = 0;
        while (current != null && index > i) {
            previous = current;
            current = current.next; // go to next element
            i++;
        }
        if (previous == null) {
            this.first = newElem;
            this.last = newElem;
        }
        else {
            previous.next = newElem;
        }
        newElem.next = current;
        this._size++;
    };
    FirstLastList.prototype.set = function (index, value) {
        var current = this.first; // start at beginning
        var oldVal = null;
        var i = 0;
        while (current != null && index != i) {
            current = current.next; // move to next link
            i++;
        }
        oldVal = current.value;
        current.value = value;
        return oldVal;
    };
    FirstLastList.prototype.get = function (index) {
        var current = this.first; // start at beginning
        var i = 0;
        while (current != null && index != i) {
            current = current.next; // move to next link
            i++;
        }
        return current.value;
    };
    FirstLastList.prototype.delete = function (index) {
        var previous = null;
        var current = this.first;
        var i = 0;
        while (current != null && index > i) {
            previous = current;
            if (current.next != null)
                current = current.next; // go to next element
            i++;
        }
        if (previous != null && current != null)
            previous.next = current.next;
        this._size--;
        if (previous == null) {
            //console.log("prev: " + previous, "current: " + current + " this.first: " + this.first + " this.last: " + this.last);
            this.first = null;
            this.last = null;
        }
        return current.value;
    };
    FirstLastList.prototype.pop = function () {
        return this.delete(this.size() - 1);
    };
    FirstLastList.prototype.insertLast = function (value) {
        var newLink = new LinkElem(value); // make new link
        if (this.isEmpty())
            this.first = newLink; // first --> newLink
        else
            this.last.next = newLink; // old last --> newLink
        this.last = newLink; // newLink <-- last
        this._size++;
    };
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
    FirstLastList.prototype.push = function (value) {
        this.insertLast(value);
        return this.size();
    };
    FirstLastList.prototype.insertFirst = function (value) {
        var newLink = new LinkElem(value);
        if (this.isEmpty())
            this.last = newLink;
        newLink.next = this.first; // newLink --> old first
        this.first = newLink; // first --> newLink
        this._size++;
    };
    /**
     * Insert value at start of the list
     *
     * @param {*} value any
     * @return new list size
     */
    FirstLastList.prototype.unshift = function (value) {
        this.insertFirst(value);
        return this.size();
    };
    /**
     * Retrieve and delete first element of the list
     *
     * @returns {*} (description)
     */
    FirstLastList.prototype.shift = function () {
        return this.deleteFirst();
    };
    FirstLastList.prototype.deleteFirst = function () {
        var temp = this.first.value;
        if (this.first.next == null)
            this.last = null; // null <-- last
        this.first = this.first.next; // first --> old next
        this._size--;
        return temp;
    };
    FirstLastList.prototype.toString = function () {
        var current = this.first; // start at beginning
        var str = [];
        while (current != null) {
            str.push(current); // print data
            current = current.next; // move to next link
        }
        console.log("[" + str.join(', ') + "]");
    };
    FirstLastList.prototype.size = function () {
        return this._size;
    };
    FirstLastList.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this._size = 0;
    };
    FirstLastList.prototype.peekFirst = function () {
        return this.first.value;
    };
    FirstLastList.prototype.peekLast = function () {
        return this.last.value;
    };
    /**
 * Peek a value from end of the list without remove
 *
 * @param value.
 */
    FirstLastList.prototype.peek = function () {
        return this.peekLast();
    };
    FirstLastList.prototype.contains = function (value) {
        return this.indexOf(value) != -1;
    };
    FirstLastList.prototype.indexOf = function (value) {
        var current = this.first; // start at beginning
        var i = 0;
        while (current != null && current.value != value) {
            current = current.next; // move to next link
            i++;
        }
        return (current != null) ? i : -1;
    };
    return FirstLastList;
}()); // end class FirstLastList
exports.FirstLastList = FirstLastList;
////////////////////////////////////////////////////////////////
/**
 * SortedFirstLastList linked list realization.
 */
var SortedFirstLastList = (function (_super) {
    __extends(SortedFirstLastList, _super);
    function SortedFirstLastList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SortedFirstLastList.prototype.insertFirst = function (value) {
        var newElem = new LinkElem(value);
        var previous = null;
        var current = this.first;
        while (current != null && value > current.value) {
            previous = current;
            current = current.next; // go to next element
        }
        if (previous == null) {
            this.first = newElem;
        }
        else {
            previous.next = newElem;
        }
        newElem.next = current;
        this._size++;
    };
    return SortedFirstLastList;
}(FirstLastList)); // end class FirstLastList
exports.SortedFirstLastList = SortedFirstLastList;
//////////////////////////////////////////////////////////////// 

//# sourceMappingURL=FirstLastList.js.map
