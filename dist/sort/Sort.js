/**
 * BubbleSort
 */
var Sort;
(function (Sort) {
    var SimpleSort = (function () {
        function SimpleSort() {
        }
        SimpleSort.prototype.bubbleSort = function (a) {
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
        SimpleSort.prototype.selectSort = function (a) {
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
        return SimpleSort;
    })();
    Sort.SimpleSort = SimpleSort;
})(Sort = exports.Sort || (exports.Sort = {}));

//# sourceMappingURL=Sort.js.map
