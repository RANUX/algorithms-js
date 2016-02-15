import * as ahm from "../arrays/ArrayHelpers";



export class ArrayHelpersExamples {
	    data1       : any[] = ["a", "b", "c", "d"];
        data2       : any[] = ["e", "f", "g", "h"];
        
        helpers     :   ahm.ArrayHelpers = new ahm.ArrayHelpers();
        
        logMergeArrays () {
            console.log("======= ARRAY HELPERS: merge two arrays =========")
            console.log("Merge two arrays: " + this.data1 + " and " + this.data2);
            var result = this.helpers.merge(this.data1, this.data2);
            console.log("Merged: " + result);
        }
        
}