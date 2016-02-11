var m = require("../sort/Sort");
var Examples;
(function (Examples) {
    var Sort = (function () {
        function Sort() {
            this.data = ["d", "csharp", "cpp", "python", "node", "js"];
        }
        Sort.prototype.logBubbleSort = function () {
            var bs = new m.Sort.BubbleSort();
            console.log("before sort: [" + this.data + "]");
            bs.sort(this.data);
            console.log(this.data);
        };
        Sort.prototype.logSelectSort = function () {
            var ss = new m.Sort.SelectSort();
            console.log("before sort: [" + this.data + "]");
            ss.sort(this.data);
            console.log(this.data);
        };
        return Sort;
    })();
    Examples.Sort = Sort;
})(Examples = exports.Examples || (exports.Examples = {}));

//# sourceMappingURL=Sort.js.map
