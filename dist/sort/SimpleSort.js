/**
 * Simple sort algorithms. Complexity O(N^2)
 */
/**
 * BubbleSort
 */
var BubbleSort = (function () {
    function BubbleSort() {
    }
    BubbleSort.prototype.sort = function (a, compareFn) {
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
        return a;
    };
    return BubbleSort;
})();
exports.BubbleSort = BubbleSort;
/**
 * SelectionSort
 */
var SelectionSort = (function () {
    function SelectionSort() {
    }
    SelectionSort.prototype.sort = function (a, compareFn) {
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
        return a;
    };
    return SelectionSort;
})();
exports.SelectionSort = SelectionSort;
/**
 * InsertionSort
 */
var InsertionSort = (function () {
    function InsertionSort() {
    }
    InsertionSort.prototype.sort = function (a, compareFn) {
        var out, temp, inn;
        for (out = 1; out < a.length; out++) {
            temp = a[out];
            inn = out;
            while (inn > 0 && a[inn - 1] > temp) {
                a[inn] = a[inn - 1];
                --inn;
            }
            a[inn] = temp;
        }
        return a;
    };
    return InsertionSort;
})();
exports.InsertionSort = InsertionSort;

//# sourceMappingURL=SimpleSort.js.map
