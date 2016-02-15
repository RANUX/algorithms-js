import * as mq from "../queues/CircularQueue";
import shuffle = require('knuth-shuffle');


export class QueueExamples {
    
    data       : any[] = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
    cQueue :   mq.CircularQueue = new mq.CircularQueue(8);
    
    logCircularQueue () {
        var dequeuedItems = "";
        console.log("===== Cirqular Queue EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        
        console.log("Data before insert into circular queue: " + this.data);
        
        for(var i in this.data) {
            this.cQueue.enqueue(this.data[i]);
        }
        
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
        
    }
    
}