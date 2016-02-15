var srtm = require("./examples/Sort");
var stkm = require("./examples/Stack");
var qm = require("./examples/Queues");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var sortExamples = new srtm.SortExample();
        sortExamples.logBubbleSort();
        sortExamples.logSelectionSort();
        sortExamples.logInsertionSort();
        var stackExamples = new stkm.StackExample();
        stackExamples.logArrayStack();
        var queueExamples = new qm.QueueExamples();
        queueExamples.logCircularQueue();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
