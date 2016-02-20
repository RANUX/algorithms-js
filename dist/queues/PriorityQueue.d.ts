import * as iqm from "../queues/IQueue";
/**
 * PriorityQueue
 */
export declare class PriorityQueue implements iqm.IQueue {
    qArray: any[];
    nItems: number;
    constructor();
    enqueue(value: any): void;
    dequeue(): any;
    clear(): void;
    size(): number;
    isEmpty(): boolean;
    isFull(): boolean;
    peekFront(): any;
    peekRear(): any;
}
