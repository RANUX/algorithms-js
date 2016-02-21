import * as mq  from "../queues/CircularQueue";
import * as qp from "../queues/PriorityQueue";
import * as lq from "../queues/LinkedQueue";
import shuffle = require('knuth-shuffle');


export class QueueExamples {
    
    data           : any[] = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
    dataNums       : any[] = [6, 7, 2, 0, 1, 9, 5, 7, 10];
    cQueue         :   mq.CircularQueue = new mq.CircularQueue(8);
    priorQ         :   qp.PriorityQueue = new qp.PriorityQueue();
    lQueue         :   lq.LinkedQueue   = new lq.LinkedQueue();
    
    logCircularQueue () {
        var dequeuedItems = "";
        console.log("===== Cirqular Queue EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        
        console.log("Data before insert into circular queue: " + this.data);
        
        for(var i in this.data) {
            this.cQueue.enqueue(this.data[i]);
        }
        
        console.log('Peek Front: ' + this.cQueue.peekFront());
        console.log('Peek Rear: ' + this.cQueue.peekRear());
        
        dequeuedItems += this.cQueue.dequeue() + ", ";
        dequeuedItems += this.cQueue.dequeue() + ", ";
        console.log( " Queue size: " + this.cQueue.size() + " Dequeued several elements: " + dequeuedItems)
        
        this.cQueue.enqueue("1");
        this.cQueue.enqueue("2");
        dequeuedItems ="";
        for(var e in this.data) {
            
            dequeuedItems += this.cQueue.dequeue() + ", ";
        }
        dequeuedItems = dequeuedItems.slice(0, dequeuedItems.length-2);
        console.log( "dequeuedItems : [ " + dequeuedItems + " ]")
        console.log( "is Queue Empty: " + this.cQueue.isEmpty());
    }
    
    logPriorityQueue () {
        var dequeuedItems = "";
        console.log("===== Priority Queue EXAMPLE =====");
        shuffle.knuthShuffle(this.dataNums);
        
        console.log("Data before insert into circular queue: " + this.dataNums);
        
        for(var i in this.dataNums) {
            this.priorQ.enqueue(this.dataNums[i]);
        }
        
        dequeuedItems += this.priorQ.dequeue() + ", ";
        dequeuedItems += this.priorQ.dequeue() + ", ";
        console.log( " Queue size: " + this.priorQ.size() + " Dequeued several elements: " + dequeuedItems)
        
        this.priorQ.enqueue("1");
        this.priorQ.enqueue("2");
        dequeuedItems ="";
        
        for(var e in this.dataNums) {
            
            dequeuedItems += this.priorQ.dequeue() + ", ";
        }
        
        dequeuedItems = dequeuedItems.slice(0, dequeuedItems.length-2);
        console.log( "dequeuedItems : [ " + dequeuedItems + " ]");
        console.log( "is Queue Empty: " + this.priorQ.isEmpty());
        
    }
    
    logLinkedQueue () {
        var dequeuedItems = "";
        console.log("===== LinkedQueue EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        
        console.log("Data before insert into circular queue: " + this.data);
        
        for(var i in this.data) {
            this.lQueue.enqueue(this.data[i]);
        }
        
        
        console.log('Peek Front: ' + this.lQueue.peekFront());
        console.log('Peek Rear: ' + this.lQueue.peekRear());
        
        dequeuedItems += this.lQueue.dequeue() + ", ";
        dequeuedItems += this.lQueue.dequeue() + ", ";
        console.log( " Queue size: " + this.lQueue.size() + " Dequeued several elements: " + dequeuedItems)
        
        
        
        this.lQueue.enqueue("1");
        this.lQueue.enqueue("2");
        dequeuedItems ="";
        for(var e in this.data) {
            
            dequeuedItems += this.lQueue.dequeue() + ", ";
        }
        dequeuedItems = dequeuedItems.slice(0, dequeuedItems.length-2);
        console.log( "dequeuedItems : [ " + dequeuedItems + " ]")
        console.log( "is Queue Empty: " + this.lQueue.isEmpty());
        
    }
    
}