import * as m from "../sort/Sort";

export namespace Examples {
    export class BubbleSortExample {
        
        test() {
            var bs = new m.Sort.BubbleSort();
            var a = ["d", "csharp", "cpp", "python", "node", "js"];
            console.log("before sort: [" + a + "]");
            bs.sort(a);
            console.log(a);
        }
    }
}