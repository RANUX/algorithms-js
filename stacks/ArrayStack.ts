import * as stack from "../stacks/IStack";

/**
 * ArrayStack implements IStack
 */

export class ArrayStack implements stack.IStack {
    
    a   : any[];
    top : number;
    
    constructor() { 
        this.clear();
        
    }
    
    push(value: any) : number {
        this.a[ ++this.top ] = value;
        return this.a.length;
    }
    
    pop() : any {
        return this.a[ this.top-- ];
    }
    
    peek() : any {
        return this.a[ this.top ];
    }
    
    clear() {
        this.top = -1;
        this.a = [];
    }
    
    length() : number  {
        return this.top+1;
    }
    
    size() : number  {
        return this.length();
    }
    
    isEmpty() : boolean {
        return this.top == -1;
    }
    
    
    toString() {
        
        if ( this.isEmpty() )
            return "Top: -1: Stack content: []";
            
        var aStr = "[";

        for (var i = 0; i <= this.top; i++) {
            aStr += this.a[i] + ", ";
            
        }
        aStr = aStr.slice(0, aStr.length-2);
        aStr += "]";
        return "Top: " +this.top + " Stack content: " + aStr;
    }
}
