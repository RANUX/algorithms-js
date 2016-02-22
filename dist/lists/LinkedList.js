////////////////////////////////////////////////////////////////
var Element = (function () {
    function Element() {
    }
    // -------------------------------------------------------------
    Element.prototype.Element = function (data) {
        this.data = data;
    };
    return Element;
})(); // end class Element
////////////////////////////////////////////////////////////////
/**
 * Simple LinkedList
 */
var LinkedList = (function () {
    function LinkedList() {
        this.clear();
    }
    /**
    * Inserts a value into the list at a specified position. The size of the list will increase by one.
    *
    * @param index The position (0, 1, 2...) at which the value should be inserted.
    * @param value The value to add.
    * @throws RangeError if the specified position falls outside the range
    *                                   (index &lt; 0 || index &gt;= size()).
    */
    LinkedList.prototype.insert = function (index, value) {
    };
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
    LinkedList.prototype.push = function (value) {
    };
    /**
     * Remove value at end of the list
     *
     * @param {*} value any
     * @return removed item
     */
    LinkedList.prototype.pop = function () {
    };
    /**
     * Retrieve and delete first element of the list
     *
     * @returns {*} (description)
     */
    LinkedList.prototype.shift = function () {
        return null;
    };
    /**
    * Insert value at start of the list
    *
    * @param {*} value any
    * @return new list size
    */
    LinkedList.prototype.unshift = function (value) {
        return 0;
    };
    /**
     * Deletes the first ocurrence of a specified value. The size of the list will decrease by one if the value is
     * found.
     *
     * @param value The value to be deleted.
     * @return <code>true</code> if removed; otherwise <code>false</code> if not found.
     */
    LinkedList.prototype.delete = function (value) {
        return false;
    };
    /**
     * Deletes all elements from the list. The size of the list will be reset to zero (0).
     */
    LinkedList.prototype.clear = function () {
    };
    /**
     * Sets the value at a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @param value The value to set at the specified position.
     * @return The value originally at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
    LinkedList.prototype.set = function (index, value) {
    };
    /**
     * Obtains the value from a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @return The value at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
    LinkedList.prototype.get = function (index) {
    };
    /**
     * Obtains the position of the first occurrence of a specified value within a list.
     *
     * @param value The value for which the index is required.
     * @return The position (0, 1, 2...) of the first occurrence of value; otherwise -1.
     */
    LinkedList.prototype.indexOf = function (value) {
        return 0;
    };
    /**
     * Determines if the list contains a specified value.
     *
     * @param value The value for which to search.
     * @return <code>true</code> if the value is found; otherwise <code>false</code>.
     */
    LinkedList.prototype.contains = function (value) {
        return false;
    };
    /**
     * Obtains the number of elements in the list.
     *
     * @return The number of elements in the list.
     */
    LinkedList.prototype.size = function () {
        return 0;
    };
    /**
     * Determines if the list is empty or not.
     *
     * @return <code>true</code> if the list is empty (<code>size() == 0</code>); otherwise returns <code>false</code>.
     */
    LinkedList.prototype.isEmpty = function () {
        return false;
    };
    /**
     * Obtains the element for a specified position.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    LinkedList.prototype.getElement = function (index) {
        if (index < this.nElems / 2) {
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
        for (var i = this.nElems - index; i > 0; --i) {
            element = element.previous;
        }
        return element;
    };
    return LinkedList;
})();
exports.LinkedList = LinkedList;

//# sourceMappingURL=LinkedList.js.map
