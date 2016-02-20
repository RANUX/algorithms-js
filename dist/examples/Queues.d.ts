import * as mq from "../queues/CircularQueue";
import * as mqp from "../queues/PriorityQueue";
export declare class QueueExamples {
    data: any[];
    dataNums: any[];
    cQueue: mq.CircularQueue;
    priorQ: mqp.PriorityQueue;
    logCircularQueue(): void;
    logPriorityQueue(): void;
}
