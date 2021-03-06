"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelpers_1 = require("../helpers/ArrayHelpers");
/**
 * QuickSortRMP (QuickSort Rightmost Pivot) good for random items in array.
 * ( Best  N(logN) - random, worse O(N^2) - sorted arrays)
 *
 * @export
 * @class QuickSort
 * @implements {ISort}
 */
class QuickSortRMP {
    sort(array, compareFn) {
        this.array = array;
        this.quickSortRightmostPivot(0, this.array.length - 1);
        return this.array;
    }
    quickSortRightmostPivot(left, right) {
        if (left >= right)
            return;
        else {
            var pivot = this.array[right]; // rightmost item
            var rangeIndex = this.splitToParts(left, right, pivot);
            this.quickSortRightmostPivot(left, rangeIndex - 1); // sort left side
            this.quickSortRightmostPivot(rangeIndex + 1, right); // sort right side
        }
    }
    splitToParts(left, right, pivot) {
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
    }
}
exports.default = QuickSortRMP;
;

//# sourceMappingURL=QuickSortRMP.js.map
