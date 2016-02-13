var srt = require("./examples/Sort");
var stk = require("./examples/Stack");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var sortExamples = new srt.Examples.Sort();
        sortExamples.logBubbleSort();
        sortExamples.logSelectionSort();
        sortExamples.logInsertionSort();
        var stackExamples = new stk.Examples.Stack();
        stackExamples.logArrayStack();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
