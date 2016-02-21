export interface IList
{
    /**
     * Inserts a value into the list at a specified position. The size of the list will increase by one.
     *
     * @param index The position (0, 1, 2...) at which the value should be inserted.
     * @param value The value to add.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
     insert(index : number, value : any);

    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
     push(value : any);

    /**
     * Deletes the value from a specified position in the list. The size of the list will decrease by one.
     *
     * @param index The position (0, 1, 2...) from which the value should be deleted.
     * @return The value that was contained at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
    delete(index: number) : any;

    /**
     * Deletes the first ocurrence of a specified value. The size of the list will decrease by one if the value is
     * found.
     *
     * @param value The value to be deleted.
     * @return <code>true</code> if removed; otherwise <code>false</code> if not found.
     */
    delete(value : any) : boolean;

    /**
     * Deletes all elements from the list. The size of the list will be reset to zero (0).
     */
     clear();

    /**
     * Sets the value at a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @param value The value to set at the specified position.
     * @return The value originally at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
    set(index : number, value : any) : any;

    /**
     * Obtains the value from a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @return The value at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index &lt; 0 || index &gt;= size()).
     */
    get(index : number) : any;

    /**
     * Obtains the position of the first occurrence of a specified value within a list.
     *
     * @param value The value for which the index is required.
     * @return The position (0, 1, 2...) of the first occurrence of value; otherwise -1.
     */
    indexOf(value : any) : number;

    /**
     * Determines if the list contains a specified value.
     *
     * @param value The value for which to search.
     * @return <code>true</code> if the value is found; otherwise <code>false</code>.
     */
    contains(value : any) : boolean;

    /**
     * Obtains the number of elements in the list.
     *
     * @return The number of elements in the list.
     */
    size() : number;

    /**
     * Determines if the list is empty or not.
     *
     * @return <code>true</code> if the list is empty (<code>size() == 0</code>); otherwise returns <code>false</code>.
     */
    isEmpty() : boolean;
}