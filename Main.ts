import * as srtm from "./examples/Sort";
import * as stkm from "./examples/Stack";
import * as qm  from "./examples/Queues";

class Startup {
    
    
    public static main(): number 
    {
	    var sortExamples = new srtm.SortExample();
        sortExamples.logBubbleSort(); 
        sortExamples.logSelectionSort(); 
        sortExamples.logInsertionSort();


        var stackExamples = new stkm.StackExample();
        stackExamples.logArrayStack();
        
        var queueExamples = new qm.QueueExamples();
        queueExamples.logCircularQueue();
        
        return 0;
    }
}

Startup.main();
