var sort = require("../sort/Sort");
var SortExample = (function () {
    function SortExample() {
        this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        this.simpleSort = new sort.SimpleSort();
    }
    SortExample.prototype.logBubbleSort = function () {
        console.log("before bubble sort: [" + this.data + "]");
        this.simpleSort.bubbleSort(this.data);
        console.log(this.data);
    };
    SortExample.prototype.logSelectionSort = function () {
        console.log("before select sort: [" + this.data + "]");
        this.simpleSort.selectionSort(this.data);
        console.log(this.data);
    };
    SortExample.prototype.logInsertionSort = function () {
        console.log("before insertion sort: [" + this.data + "]");
        this.simpleSort.insertionSort(this.data);
        console.log(this.data);
    };
    return SortExample;
})();
exports.SortExample = SortExample;
//# sourceMappingURL=Sort.js.map