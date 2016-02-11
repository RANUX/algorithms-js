var m = require("../sort/Sort");
var Examples;
(function (Examples) {
    var BubbleSortExample = (function () {
        function BubbleSortExample() {
        }
        BubbleSortExample.prototype.test = function () {
            var bs = new m.Sort.BubbleSort();
            var a = ["d", "csharp", "cpp", "python", "node", "js"];
            console.log("before sort: [" + a + "]");
            bs.sort(a);
            console.log(a);
        };
        return BubbleSortExample;
    })();
    Examples.BubbleSortExample = BubbleSortExample;
})(Examples = exports.Examples || (exports.Examples = {}));

//# sourceMappingURL=Sort.js.map
