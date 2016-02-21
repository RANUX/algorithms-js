import * as stack from "../stacks/ArrayStack";
import * as istack from "../stacks/IStack"
import * as lstk from "../stacks/LinkedStack";
import shuffle = require('knuth-shuffle');


export class StackExample {
    
    data       : any[] = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
    aStack :   stack.ArrayStack = new stack.ArrayStack();
    lStack :   lstk.LinkedStack = new lstk.LinkedStack();
    
    logStacks () {
        this.logStack(this.aStack, "ARRAY STACK");
        this.logStack(this.lStack, "LINKED STACK");
    }
    
    
    private logStack(stack : istack.IStack, stackName : string) {
        console.log("===== SIMPLE "+stackName+" EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        
        console.log("Data before insert into stack: " + this.data);
        
        for(var i in this.data) {
            stack.push(this.data[i]);
        }
        
        console.log("Full Stack: " + stack.length() + " " + stack.toString());
        
        var popedItems = "";
        for(var e in this.data) {
            popedItems += stack.pop() + ", ";
        }
        popedItems = popedItems.slice(0, popedItems.length-2);
        console.log( "popedItems : [ " + popedItems + " ]")
        console.log("Empty Stack: " + stack.length() + " " + stack.toString());
    }
}
