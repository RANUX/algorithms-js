import * as iqm from "../queues/IQueue";

/**
 * PriorityQueue
 */
export class PriorityQueue implements iqm.IQueue {
    
    qArray  : any[];
    nItems  : number;
    

    constructor() {
        this.clear();
    }
    
    enqueue(value : any) {
        var j;
        
        if ( this.nItems == 0)                          // if no items, insert in 0
        {
            this.qArray[this.nItems++] = value;
        } 
        else 
        {                                               // if items
            for( j=this.nItems-1; j>=0; j-- )           // start at end,
            {
                if( value > this.qArray[j] )            // if new value larger,
                    this.qArray[j+1] = this.qArray[j];  // shift upward
                else                                    // if smaller,
                    break;                              // done shifting
             }  // end for
            this.qArray[j+1] = value;                   // insert it
            this.nItems++;
         }  // end else (nItems > 0)
        
    }
    
    
    dequeue() : any {
        return this.qArray[--this.nItems];
    }
    
    clear() {
        this.nItems = 0;
        this.qArray = [];
    }
    
    
    size() : number {
        return 0;
    }
    
    isEmpty() : boolean {
        return (this.nItems == 0);
        
    }
    
    isFull() : boolean {
        return false;
    }
    
    peekFront() : any {
        return this.qArray[this.nItems-1];
    }
    
    peekRear()  : any {
        if ( this.isEmpty() ) {
            throw new RangeError('PriorityQueue is Empty.');
        }
        return this.qArray[0];
    }
    
}