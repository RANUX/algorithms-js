export interface IQueue {
    /**
     * Stores a value in the queue. The size of the queue will increase by one.
     *
     * @param value The value to add.
     */
    enqueue(value: any): any;
    /**
     * Retrieves the value at the head of the queue. The size of the queue will decrease by one.
     *
     * @return The value at the head of the queue.
     * @throws RangeError if empty
     */
    dequeue(): any;
    /**
     * Deletes all elements from the queue. The size of the queue will be reset to zero (0).
     */
    clear(): any;
    /**
     * Obtains the number of elements in the queue.
     *
     * @return The number of elements in the queue.
     */
    size(): number;
    /**
     * Determines if the queue is empty or not.
     *
     * @return <code>true</code> if the queue is empty (<code>size() == 0</code>); otherwise returns <code>false</code>.
     */
    isEmpty(): boolean;
    /**
     * Retrieves the value at the head of the queue without deletion
     */
    peekFront(): any;
    /**
     * Retrieves the value at the tail of the queue without deletion
     */
    peekRear(): any;
}
