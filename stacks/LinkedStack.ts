import istack = require("./IStack");
import ffl = require("../lists/FirstLastList");

/**
 * LinkedStack
 */
export class LinkedStack implements istack.IStack {
    
    private list : ffl.FirstLastList;
    

    constructor() {
        this.list = new ffl.FirstLastList();
    }
    
    push(value: any) : number 
    {
        this.list.insertFirst( value );
        return this.list.size();
    }
    pop() : any 
    {
        return this.list.deleteFirst();
    }
    peek() : any
    {
        return this.list.peekFirst().data;
    }
    clear() : void 
    {
        this.list.clear();
    }
    length() : number 
    {
        return this.list.size();
    }
    isEmpty() : boolean 
    {
        return (this.list.size() == 0);
    }

}