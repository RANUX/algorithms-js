import * as m from "../stack/IStack";

/**
 * ArrayStack implements IStack
 */
export namespace Stack {
 export class ArrayStack implements m.Stack.IStack {
    
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
    
    isEmpty() : boolean {
        return !this.a;
    }
    }
}