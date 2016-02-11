import * as m from "./examples/Sort";

class Startup {
    
    
    public static main(): number 
    {
	    new m.Examples.Sort().logBubbleSort(); 
        new m.Examples.Sort().logSelectSort(); 

        return 0;
    }
}

Startup.main();
