var srtm = require("./examples/Sort");
var stkm = require("./examples/Stack");
var qm = require("./examples/Queues");
var hm = require("./examples/ArraysHelpers");
var eee = require("./examples/EvalExprExample");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var sortExamples = new srtm.SortExample();
        sortExamples.logBubbleSort();
        sortExamples.logSelectionSort();
        sortExamples.logInsertionSort();
        new stkm.StackExample().logStacks();
        var queueExamples = new qm.QueueExamples();
        queueExamples.logCircularQueue();
        queueExamples.logPriorityQueue();
        queueExamples.logLinkedQueue();
        var ahelpsers = new hm.ArrayHelpersExamples();
        ahelpsers.logMergeArrays();
        ahelpsers.logRemoveDuplicates();
        var evlExpr = new eee.EvalExprExample();
        evlExpr.logEvalExpr();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
