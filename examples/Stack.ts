import * as m from "../stack/ArrayStack";
import shuffle = require('knuth-shuffle');

export namespace Examples {
    export class Stack {
        
        data       : any[] = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        aStack :   m.Stack.ArrayStack = new m.Stack.ArrayStack();
        
        logArrayStack () {
            shuffle.knuthShuffle(this.data);
            
            for(var e in this.data) {
                this.aStack.push(e);
                console.log("Stack size: " + this.aStack.length());
            }
            
            for(var e in this.data) {
                this.aStack.pop();
                console.log("Stack size: " + this.aStack.length());
            }
        }
    }
}