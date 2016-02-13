import * as srt from "./examples/Sort";
import * as stk from "./examples/Stack";

class Startup {
    
    
    public static main(): number 
    {
	    var sortExamples = new srt.SortExample();
        sortExamples.logBubbleSort(); 
        sortExamples.logSelectionSort(); 
        sortExamples.logInsertionSort();


        var stackExamples = new stk.StackExample();
        stackExamples.logArrayStack();
        
        return 0;
    }
}

Startup.main();
