import { InsertionSort, BubbleSort, SelectionSort }   from './sort/SimpleSort';
import ShellSort from './sort/ShellSort';
import QuickSortRMP from './sort/QuickSortRMP'
import SortingBenchmark from './benchmarks/sort/SortingBenchmark'



class Startup {
    
    
    public static main(): number 
    {
        
        var sortBench = new SortingBenchmark( new ShellSort() );
        sortBench.logMeasureRndNumsTime();
        
        var sortBench = new SortingBenchmark( new QuickSortRMP() );
        sortBench.logMeasureRndNumsTime();
        
        sortBench = new SortingBenchmark( new InsertionSort() );
        sortBench.logMeasureRndNumsTime();
        
        return 0;
    }
}

Startup.main();
