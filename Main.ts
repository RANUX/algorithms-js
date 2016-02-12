import * as m from "./examples/Sort";

class Startup {
    
    
    public static main(): number 
    {
	    var sortExamples = new m.Examples.Sort();
        sortExamples.logBubbleSort(); 
        sortExamples.logSelectionSort(); 
        sortExamples.logInsertionSort();

        return 0;
    }
}

Startup.main();
