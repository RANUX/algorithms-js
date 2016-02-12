var m = require("../sort/Sort");
var Examples;
(function (Examples) {
    var Sort = (function () {
        function Sort() {
            this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
            this.simpleSort = new m.Sort.SimpleSort();
        }
        Sort.prototype.logBubbleSort = function () {
            console.log("before bubble sort: [" + this.data + "]");
            this.simpleSort.bubbleSort(this.data);
            console.log(this.data);
        };
        Sort.prototype.logSelectionSort = function () {
            console.log("before select sort: [" + this.data + "]");
            this.simpleSort.selectionSort(this.data);
            console.log(this.data);
        };
        Sort.prototype.logInsertionSort = function () {
            console.log("before insertion sort: [" + this.data + "]");
            this.simpleSort.insertionSort(this.data);
            console.log(this.data);
        };
        return Sort;
    })();
    Examples.Sort = Sort;
})(Examples = exports.Examples || (exports.Examples = {}));

//# sourceMappingURL=Sort.js.map
