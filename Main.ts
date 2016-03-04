import * as stkm from "./examples/Stack";
import * as qm   from "./examples/Queues";
import * as hm   from "./examples/ArraysHelpers";
import * as eee   from "./examples/EvalExprExample";

/*
* DEPRICATED! Watch tests for examples
*/
class Startup {
    
    
    public static main(): number 
    {
        
        new stkm.StackExample().logStacks();
        
        var queueExamples = new qm.QueueExamples();
        queueExamples.logCircularQueue();
        queueExamples.logPriorityQueue();
        queueExamples.logLinkedQueue();
        
        var ahelpsers = new hm.ArrayHelpersExamples();
        ahelpsers.logMergeArrays();
        ahelpsers.logRemoveDuplicates();
        
        var evlExpr  = new eee.EvalExprExample();
        evlExpr.logEvalExpr();
        
        return 0;
    }
}

Startup.main();
