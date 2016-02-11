var m = require("./examples/Sort");
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        new m.Examples.Sort().logBubbleSort();
        new m.Examples.Sort().logSelectSort();
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
