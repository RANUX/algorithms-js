"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayHelpers_1 = require("../helpers/ArrayHelpers");
var SimpleSort_1 = require("./SimpleSort");
/**
 * QuickSortM (QuickSort Median). ( N(logN) in most cases )
 *
 * @export
 * @class QuickSort
 * @implements {ISort}
 */
var QuickSortM = (function () {
    /**
     *
     */
    function QuickSortM() {
        this.insSort = new SimpleSort_1.InsertionSort();
    }
    QuickSortM.prototype.sort = function (array, compareFn) {
        this.array = array;
        this.quickSortMedianPivot(0, this.array.length - 1);
        return this.array;
    };
    QuickSortM.prototype.quickSortMedianPivot = function (left, right) {
        var size = right - left + 1;
        if (size <= 3) {
            this.manualSort(left, right, size);
        }
        else {
            var pivot = this.medianOf3(left, right); // Median item
            var randeIndex = this.splitToParts(left, right, pivot);
            this.quickSortMedianPivot(left, randeIndex - 1); // sort left side
            this.quickSortMedianPivot(randeIndex + 1, right); // sort right side
        }
    };
    QuickSortM.prototype.splitToParts = function (left, right, pivot) {
        var l = left;
        var r = right - 1;
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
        ArrayHelpers_1.swap(l, right - 1, this.array); // restore pivot
        return l;
    };
    QuickSortM.prototype.medianOf3 = function (l, r) {
        var m = Math.floor((l + r) / 2); // median
        if (this.array[l] > this.array[m]) {
            ArrayHelpers_1.swap(l, m, this.array);
        }
        if (this.array[l] > this.array[r]) {
            ArrayHelpers_1.swap(l, r, this.array);
        }
        if (this.array[m] > this.array[r]) {
            ArrayHelpers_1.swap(m, r, this.array);
        }
        ArrayHelpers_1.swap(m, r - 1, this.array); // put pivot on right
        return this.array[r - 1]; // return median value
    };
    QuickSortM.prototype.manualSort = function (l, r, size) {
        if (size <= 1)
            return;
        if (size == 2) {
            if (this.array[l] > this.array[r])
                ArrayHelpers_1.swap(l, r, this.array);
        }
        else {
            if (this.array[l] > this.array[r - 1])
                ArrayHelpers_1.swap(l, r - 1, this.array); // left, center
            if (this.array[l] > this.array[r])
                ArrayHelpers_1.swap(l, r, this.array); // left, right
            if (this.array[r - 1] > this.array[r])
                ArrayHelpers_1.swap(r - 1, r, this.array); // center, right
        }
    };
    return QuickSortM;
}());
exports.default = QuickSortM;

//# sourceMappingURL=QuickSortM.js.map
