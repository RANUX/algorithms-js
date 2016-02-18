var srtm = require("./examples/Sort");
var stkm = require("./examples/Stack");
var hm = require("./examples/ArraysHelpers");
var i2pm = require("./examples/Infix2PostfixExample");
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
        var ahelpsers = new hm.ArrayHelpersExamples();
        ahelpsers.logMergeArrays();
        ahelpsers.logRemoveDuplicates();
        var inf2post = new i2pm.Infix2PostfixExample();
        inf2post.logConvertExpr();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
