/**
 * BubbleSort
 */
var BubbleSort = (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (a) {
        for (var out = a.length - 1; out > 1; out--) {
            var element = a[out];
            console.log(element);
        }
    };
    return BubbleSort;
})();

//# sourceMappingURL=BubbleSort.js.map
