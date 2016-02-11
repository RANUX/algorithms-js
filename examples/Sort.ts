import * as m from "../sort/Sort";

export namespace Examples {
    export class Sort {
        
        data : Object[] = ["d", "csharp", "cpp", "python", "node", "js"];
        
        
        logBubbleSort() {
            var bs = new m.Sort.BubbleSort();
            console.log("before sort: [" + this.data + "]");
            bs.sort(this.data);
            console.log(this.data);
        }
        
        logSelectSort() {
            var ss = new m.Sort.SelectSort();
            console.log("before sort: [" + this.data + "]");
            ss.sort(this.data);
            console.log(this.data);
        }
        
    }
}