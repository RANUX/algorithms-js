var SimpleSort_1 = require('./sort/SimpleSort');
var ShellSort_1 = require('./sort/ShellSort');
var QuickSortRMP_1 = require('./sort/QuickSortRMP');
var SortingBenchmark_1 = require('./benchmarks/sort/SortingBenchmark');
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var sortBench = new SortingBenchmark_1.default(new ShellSort_1.default());
        sortBench.logMeasureRndNumsTime();
        var sortBench = new SortingBenchmark_1.default(new QuickSortRMP_1.default());
        sortBench.logMeasureRndNumsTime();
        sortBench = new SortingBenchmark_1.default(new SimpleSort_1.InsertionSort());
        sortBench.logMeasureRndNumsTime();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=RunBenchmarks.js.map
