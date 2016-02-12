var m = require("./examples/Sort");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var sortExamples = new m.Examples.Sort();
        sortExamples.logBubbleSort();
        sortExamples.logSelectionSort();
        sortExamples.logInsertionSort();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
