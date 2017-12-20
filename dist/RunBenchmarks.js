"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SimpleSort_1 = require("./sort/SimpleSort");
const ShellSort_1 = require("./sort/ShellSort");
const QuickSortRMP_1 = require("./sort/QuickSortRMP");
const QuickSortM_1 = require("./sort/QuickSortM");
const SortingBenchmark_1 = require("./benchmarks/sort/SortingBenchmark");
class Startup {
    static main() {
        var sortBench = new SortingBenchmark_1.default(new ShellSort_1.default());
        sortBench.logMeasureRndNumsTime();
        sortBench = new SortingBenchmark_1.default(new QuickSortRMP_1.default());
        sortBench.logMeasureRndNumsTime();
        sortBench = new SortingBenchmark_1.default(new QuickSortM_1.default());
        sortBench.logMeasureRndNumsTime();
        sortBench = new SortingBenchmark_1.default(new SimpleSort_1.InsertionSort());
        sortBench.logMeasureRndNumsTime();
        return 0;
    }
}
Startup.main();

//# sourceMappingURL=RunBenchmarks.js.map
