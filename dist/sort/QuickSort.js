var ArrayHelpers_1 = require('../helpers/ArrayHelpers');
var QuickSort = (function () {
    function QuickSort() {
    }
    QuickSort.prototype.sort = function (array, compareFn) {
        this.array = array;
        this.quickSortRightmostPivot(0, this.array.length - 1);
        return this.array;
    };
    QuickSort.prototype.quickSortRightmostPivot = function (left, right) {
        if (left >= right)
            return;
        else {
            var pivot = this.array[right]; // rightmost item
            var randeIndex = this.splitToParts(left, right, pivot);
            this.quickSortRightmostPivot(left, randeIndex - 1); // sort left side
            this.quickSortRightmostPivot(randeIndex + 1, right); // sort right side
        }
    };
    QuickSort.prototype.splitToParts = function (left, right, pivot) {
        var l = left - 1;
        var r = right;
        while (true) {
            while (this.array[++l] < pivot)
                ; // nop
            while (this.array[--r] > pivot)
                ; // nop
            if (l >= r)
                break;
            else
                ArrayHelpers_1.swap(l, r, this.array);
        }
        ArrayHelpers_1.swap(l, right, this.array); // restore pivot
        return l;
    };
    return QuickSort;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickSort;
;

//# sourceMappingURL=QuickSort.js.map
