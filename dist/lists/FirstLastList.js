"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
////////////////////////////////////////////////////////////////
class LinkElem {
    toString() {
        return JSON.stringify(this);
    }
    /**
     *
     */
    constructor(data) {
        this.value = data;
        this.next = null;
    }
} // end class Element
exports.LinkElem = LinkElem;
////////////////////////////////////////////////////////////////
/**
 * FirstLastList linked list realization.
 */
class FirstLastList {
    constructor() {
        this.clear();
    }
    isEmpty() {
        return this.first == null;
    }
    insert(index, value) {
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
    }
    set(index, value) {
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
    }
    get(index) {
        var current = this.first; // start at beginning
        var i = 0;
        while (current != null && index != i) {
            current = current.next; // move to next link
            i++;
        }
        return current.value;
    }
    delete(index) {
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
    }
    pop() {
        return this.delete(this.size() - 1);
    }
    insertLast(value) {
        var newLink = new LinkElem(value); // make new link
        if (this.isEmpty())
            this.first = newLink; // first --> newLink
        else
            this.last.next = newLink; // old last --> newLink
        this.last = newLink; // newLink <-- last
        this._size++;
    }
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
    push(value) {
        this.insertLast(value);
        return this.size();
    }
    insertFirst(value) {
        var newLink = new LinkElem(value);
        if (this.isEmpty())
            this.last = newLink;
        newLink.next = this.first; // newLink --> old first
        this.first = newLink; // first --> newLink
        this._size++;
    }
    /**
     * Insert value at start of the list
     *
     * @param {*} value any
     * @return new list size
     */
    unshift(value) {
        this.insertFirst(value);
        return this.size();
    }
    /**
     * Retrieve and delete first element of the list
     *
     * @returns {*} (description)
     */
    shift() {
        return this.deleteFirst();
    }
    deleteFirst() {
        var temp = this.first.value;
        if (this.first.next == null)
            this.last = null; // null <-- last
        this.first = this.first.next; // first --> old next
        this._size--;
        return temp;
    }
    toString() {
        var current = this.first; // start at beginning
        var str = [];
        while (current != null) {
            str.push(current); // print data
            current = current.next; // move to next link
        }
        console.log("[" + str.join(', ') + "]");
    }
    size() {
        return this._size;
    }
    clear() {
        this.first = null;
        this.last = null;
        this._size = 0;
    }
    peekFirst() {
        return this.first.value;
    }
    peekLast() {
        return this.last.value;
    }
    /**
 * Peek a value from end of the list without remove
 *
 * @param value.
 */
    peek() {
        return this.peekLast();
    }
    contains(value) {
        return this.indexOf(value) != -1;
    }
    indexOf(value) {
        var current = this.first; // start at beginning
        var i = 0;
        while (current != null && current.value != value) {
            current = current.next; // move to next link
            i++;
        }
        return (current != null) ? i : -1;
    }
} // end class FirstLastList
exports.FirstLastList = FirstLastList;
////////////////////////////////////////////////////////////////
/**
 * SortedFirstLastList linked list realization.
 */
class SortedFirstLastList extends FirstLastList {
    insertFirst(value) {
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
    }
} // end class FirstLastList
exports.SortedFirstLastList = SortedFirstLastList;
//////////////////////////////////////////////////////////////// 

//# sourceMappingURL=FirstLastList.js.map
