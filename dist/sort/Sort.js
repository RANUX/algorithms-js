/**
 * BubbleSort
 */
var Sort;
(function (Sort) {
    var BubbleSort = (function () {
        function BubbleSort() {
        }
        BubbleSort.prototype.sort = function (a) {
            for (var out = a.length - 1; out > 0; out--) {
                for (var i = 0; i < out; i++) {
                    if (a[i] > a[i + 1]) {
                        // swap
                        var tmp = a[i];
                        a[i] = a[i + 1];
                        a[i + 1] = tmp;
                    }
                }
            }
        };
        return BubbleSort;
    })();
    Sort.BubbleSort = BubbleSort;
})(Sort = exports.Sort || (exports.Sort = {}));

//# sourceMappingURL=Sort.js.map
