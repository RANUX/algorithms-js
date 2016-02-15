import * as iqm from "../queues/IQueue";

/**
 * CircularQueue ( other name Circular buffer)
 */
export class CircularQueue implements iqm.IQueue {
    
    maxSize : number; 
    rear    : number;
    front   : number;
    qArray  : any[];
    nItems  : number;
    
    constructor(size : number) {
        this.maxSize = size;
        this.qArray  = new Array(this.maxSize);
        this.clear();
        this.nItems = 0;
        this.front  = 0;
        this.rear   = -1;
    }
    
    enqueue(value : any) {
        if ( this.isFull() ) {
            throw new RangeError('CircularQueue is Full. MaxSize is ' + this.maxSize);
        }
        
        if( this.rear == this.maxSize-1 )
            this.rear = -1;
        
        this.qArray[++this.rear] = value;
        this.nItems++;
    }
    
    dequeue() : any {
        if ( this.isEmpty() ) {
            throw new RangeError('CircularQueue is Empty.');
        }
        var item = this.qArray[this.front++];
        if ( this.front == this.maxSize )
            this.front = 0;
        this.nItems--;
        
        return item;
    }
    
    clear() {
        this.rear    = -1;
        this.front   =  0;
    }
    
    size() : number {
        return this.nItems;
    }
    
    isEmpty() : boolean {
        return (this.nItems == 0);
    }
    
    isFull() : boolean {
        return this.nItems == this.maxSize;
    }
    

    peekFront() : any {
        return this.qArray[this.front];
    }
    

    peekRear()  : any {
        return this.qArray[this.rear];
    }
    
    
}