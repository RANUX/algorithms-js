import * as iqm from "../queues/IQueue";
/**
 * CircularQueue ( other name Circular buffer)
 */
export declare class CircularQueue implements iqm.IQueue {
    maxSize: number;
    rear: number;
    front: number;
    qArray: any[];
    nItems: number;
    constructor(size: number);
    enqueue(value: any): void;
    dequeue(): any;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    peekFront(): any;
    peekRear(): any;
}
