import * as srtm from "./examples/Sort";
import * as stkm from "./examples/Stack";
import * as qm   from "./examples/Queues";
import * as hm   from "./examples/ArraysHelpers";

class Startup {
    
    
    public static main(): number 
    {
	    var sortExamples = new srtm.SortExample();
        sortExamples.logBubbleSort(); 
        sortExamples.logSelectionSort(); 
        sortExamples.logInsertionSort();


        var stackExamples = new stkm.StackExample();
        stackExamples.logArrayStack();
        
        var ahelpsers = new hm.ArrayHelpersExamples();
        ahelpsers.logMergeArrays();
        ahelpsers.logRemoveDuplicates();
        
        
        return 0;
    }
}

Startup.main();
