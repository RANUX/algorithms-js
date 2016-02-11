import * as m from "../sort/Sort";

export namespace Examples {
    export class Sort {
        
        data       : Object[] = ["d", "csharp", "cpp", "python", "node", "js"];
        simpleSort :  m.Sort.SimpleSort = new m.Sort.SimpleSort();

        
        logBubbleSort() {
            console.log("before bubble sort: [" + this.data + "]");
            this.simpleSort.bubbleSort(this.data);
            console.log(this.data);
        }
        
        logSelectSort() {
            console.log("before select sort: [" + this.data + "]");
            this.simpleSort.selectSort(this.data);
            console.log(this.data);
        }
        
    }
}