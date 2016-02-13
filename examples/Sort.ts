import * as m from "../sort/Sort";

export namespace Examples {
    export class Sort {
        
        data       : any[] = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        simpleSort :  m.Sort.SimpleSort = new m.Sort.SimpleSort();

        
        logBubbleSort() {
            console.log("before bubble sort: [" + this.data + "]");
            this.simpleSort.bubbleSort(this.data);
            console.log(this.data);
        }
        
        logSelectionSort() {
            console.log("before select sort: [" + this.data + "]");
            this.simpleSort.selectionSort(this.data);
            console.log(this.data);
        }
        
        logInsertionSort() {
            console.log("before insertion sort: [" + this.data + "]");
            this.simpleSort.insertionSort(this.data);
            console.log(this.data);
        }
        
    }
}