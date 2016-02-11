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
                for (var inn = 0; inn < out; inn++) {
                    if (a[inn] > a[inn + 1]) {
                        // swap
                        var tmp = a[inn];
                        a[inn] = a[inn + 1];
                        a[inn + 1] = tmp;
                    }
                }
            }
        };
        return BubbleSort;
    })();
    Sort.BubbleSort = BubbleSort;
    var SelectSort = (function () {
        function SelectSort() {
        }
        SelectSort.prototype.sort = function (a) {
            var min, out;
            for (out = 0; out < a.length; out++) {
                min = out;
                for (var inn = out + 1; inn < a.length; inn++) {
                    if (a[inn] < a[min])
                        min = inn;
                }
                // swap
                var tmp = a[out];
                a[out] = a[min];
                a[min] = tmp;
            }
        };
        return SelectSort;
    })();
    Sort.SelectSort = SelectSort;
})(Sort = exports.Sort || (exports.Sort = {}));

//# sourceMappingURL=Sort.js.map
