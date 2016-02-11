var m = require("../sort/Sort");
var Examples;
(function (Examples) {
    var Sort = (function () {
        function Sort() {
            this.data = ["d", "csharp", "cpp", "python", "node", "js"];
            this.simpleSort = new m.Sort.SimpleSort();
        }
        Sort.prototype.logBubbleSort = function () {
            console.log("before bubble sort: [" + this.data + "]");
            this.simpleSort.bubbleSort(this.data);
            console.log(this.data);
        };
        Sort.prototype.logSelectSort = function () {
            console.log("before select sort: [" + this.data + "]");
            this.simpleSort.selectSort(this.data);
            console.log(this.data);
        };
        return Sort;
    })();
    Examples.Sort = Sort;
})(Examples = exports.Examples || (exports.Examples = {}));

//# sourceMappingURL=Sort.js.map
