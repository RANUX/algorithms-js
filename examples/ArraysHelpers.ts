import * as helpers from "../arrays/ArrayHelpers";
import shuffle = require('knuth-shuffle');


export class ArrayHelpersExamples {
	    data1       : any[] = ["a", "b", "c", "d"];
        data2       : any[] = ["e", "f", "g", "h"];
        
        logMergeArrays () {
            console.log("======= ARRAY HELPERS: merge two arrays =========");
            console.log("Merge two arrays: " + this.data1 + " and " + this.data2);
            var result = helpers.merge(this.data1, this.data2);
            console.log("Merged: " + result);
        }
        
        logRemoveDuplicates () {
            console.log("======= ARRAY HELPERS: remove duplicates from array =========");
            var data = [ 1, 1, 1, 2, 5, 7, 7, 7, 5, 3, 6, 6];
            data = shuffle.knuthShuffle(data);
            
            console.log("Array before rm duplicates: " + data);
            helpers.removeDuplicates(data);
            console.log("Array after rm duplicates: " + data);
            
        }
        
}