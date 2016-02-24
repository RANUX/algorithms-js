////////////////////////////////////////////////////////////////
var Element = (function () {
    // -------------------------------------------------------------
    function Element(value) {
        this.value = value;
    }
    Element.prototype.attachBefore = function (current) {
        console.assert(current != null, "next can't be null");
        this.next = current;
        this.previous = current.previous;
        current.previous = this;
        this.previous.next = this;
    };
    Element.prototype.detach = function () {
        this.previous.next = this.next;
        this.next.previous = this.previous;
    };
    Element.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Element;
})(); // end class Element
////////////////////////////////////////////////////////////////
/**
 * Doubly LinkedList
 */
var LinkedList = (function () {
    function LinkedList() {
        this._headAndTail = new Element(null);
        this.clear();
    }
    /**
    * Inserts a value into the list at a specified position. The size of the list will increase by one.
    *
    * @param index The position (0, 1, 2...) at which the value should be inserted.
    * @param value The value to add.
    * @throws RangeError if the specified position falls outside the range
    *                                   (index < 0 || index >= size()).
    */
    LinkedList.prototype.insert = function (index, value) {
        console.assert((value != null), "value can't be null");
        if (index < 0 || index > this._size) {
            throw new RangeError();
        }
        var element = new Element(value);
        element.attachBefore(this.getElement(index));
        ++this._size;
    };
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
    LinkedList.prototype.push = function (value) {
        var element = new Element(value); // make new link
        if (this.isEmpty()) {
            element.attachBefore(this._headAndTail.next);
        }
        else {
            element.attachBefore(this._headAndTail);
        }
        ++this._size;
        return this.size();
    };
    /**
     * Remove value at end of the list
     *
     * @param {*} value any
     * @return removed item
     */
    LinkedList.prototype.pop = function () {
        if (this.isEmpty())
            return null;
        var element = this._headAndTail.previous;
        element.detach();
        --this._size;
        return element.value;
    };
    /**
     * Retrieve and delete first element of the list
     *
     * @returns {*} (description)
     */
    LinkedList.prototype.shift = function () {
        if (this.isEmpty())
            return null;
        var value = this.get(0);
        this.delete(0);
        return value;
    };
    /**
    * Insert value at start of the list
    *
    * @param {*} value any
    * @return new list size
    */
    LinkedList.prototype.unshift = function (value) {
        this.insert(0, value);
        return this.size();
    };
    /**
     * Deletes the value from a specified position in the list. The size of the list will decrease by one.
     *
     * @param index The position (0, 1, 2...) from which the value should be deleted.
     * @return The value that was contained at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    LinkedList.prototype.delete = function (index) {
        this.checkOutOfBounds(index);
        var element = this.getElement(index);
        element.detach();
        --this._size;
        return element.value;
    };
    /**
     * Deletes all elements from the list. The size of the list will be reset to zero (0).
     */
    LinkedList.prototype.clear = function () {
        this._headAndTail.previous = this._headAndTail;
        this._headAndTail.next = this._headAndTail;
        this._size = 0;
    };
    /**
     * Sets the value at a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @param value The value to set at the specified position.
     * @return The value originally at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    LinkedList.prototype.set = function (index, value) {
        console.assert(value != null, "value can't be null");
        this.checkOutOfBounds(index);
        var element = this.getElement(index);
        var oldValue = element.value;
        element.value = value;
        return oldValue;
    };
    /**
     * Obtains the value from a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @return The value at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    LinkedList.prototype.get = function (index) {
        this.checkOutOfBounds(index);
        var t = this.getElement(index).value;
        return t;
    };
    /**
     * Obtains the position of the first occurrence of a specified value within a list.
     *
     * @param value The value for which the index is required.
     * @return The position (0, 1, 2...) of the first occurrence of value; otherwise -1.
     */
    LinkedList.prototype.indexOf = function (value) {
        console.assert(value != null, "value can't be null");
        var index = 0;
        for (var e = this._headAndTail.next; e != this._headAndTail; e = e.next) {
            if (value == e.value) {
                return index;
            }
            ++index;
        }
        return -1;
    };
    /**
     * Determines if the list contains a specified value.
     *
     * @param value The value for which to search.
     * @return <code>true</code> if the value is found; otherwise <code>false</code>.
     */
    LinkedList.prototype.contains = function (value) {
        return this.indexOf(value) != -1;
    };
    /**
     * Obtains the number of elements in the list.
     *
     * @return The number of elements in the list.
     */
    LinkedList.prototype.size = function () {
        return this._size;
    };
    /**
     * Determines if the list is empty or not.
     *
     * @return <code>true</code> if the list is empty (<code>size() == 0</code>); otherwise returns <code>false</code>.
     */
    LinkedList.prototype.isEmpty = function () {
        return this.size() == 0;
    };
    /**
     * Obtains the element for a specified position.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    LinkedList.prototype.getElement = function (index) {
        if (index < this._size / 2) {
            return this.getElementForwards(index);
        }
        else {
            return this.getElementBackwards(index);
        }
    };
    /**
     * Obtains the element for a specified position starting at the first element and working forwards.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    LinkedList.prototype.getElementForwards = function (index) {
        var element = this._headAndTail.next;
        for (var i = index; i > 0; --i) {
            element = element.next;
        }
        return element;
    };
    /**
     * Obtains the element for a specified position starting at the last element and working backwards.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    LinkedList.prototype.getElementBackwards = function (index) {
        var element = this._headAndTail;
        for (var i = this._size - index; i > 0; --i) {
            element = element.previous;
        }
        return element;
    };
    /**
    * Checks if a specified position is outside the bounds of the list.
    *
    * @param index The index to check.
    * @throws IndexOutOfBoundsException if the specified index is outside the bounds of the list.
    */
    LinkedList.prototype.checkOutOfBounds = function (index) {
        if (this.isOutOfBounds(index)) {
            throw new RangeError();
        }
    };
    /**
     * Determines if the specified index is outside the bounds of the list.
     *
     * @param index The index to check.
     * @return <code>true</code> if outside the bounds; otherwise <code>false</code>.
     */
    LinkedList.prototype.isOutOfBounds = function (index) {
        return index < 0 || index >= this.size();
    };
    LinkedList.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return LinkedList;
})();
exports.LinkedList = LinkedList;

//# sourceMappingURL=LinkedList.js.map
