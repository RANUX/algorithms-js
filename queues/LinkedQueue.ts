import * as iqm from "./IQueue";
import ffl = require("../lists/FirstLastList");
/**
 * LinkedQueue based on LinkedList
 */
export class LinkedQueue implements iqm.IQueue {
    
    private list : ffl.FirstLastList;
    
    constructor() {
        this.list = new ffl.FirstLastList();
    }
    
    enqueue(value : any) {
        this.list.push(value);
    }
    
    dequeue() : any {
        return this.list.shift();
    }
    
    clear() {
        this.list.clear();
    }
    
    size() : number {
        return this.list.size();
    }
    
    isEmpty() : boolean {
        return (this.list.size() == 0);
    }

    peekFront() : any {
        return this.list.peekFirst().data;
    }
    
    peekRear()  : any {
        return this.list.peekLast().data;
    }
    
    
}