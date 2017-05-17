"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * MergeSort optimized
 */
var MergeSort = (function () {
    function MergeSort() {
    }
    MergeSort.prototype.sort = function (array, compareFn) {
        var result = new Array(array.length);
        this.array = array;
        this.mergeSort(result, 0, array.length - 1, compareFn);
        return result;
    };
    MergeSort.prototype.mergeSort = function (resultArray, startIndex, endIndex, compareFn) {
        if (startIndex >= endIndex) {
            return;
        }
        var mid = Math.floor((startIndex + endIndex) / 2);
        this.mergeSort(resultArray, startIndex, mid, compareFn);
        this.mergeSort(resultArray, mid + 1, endIndex, compareFn);
        this.merge(startIndex, mid + 1, endIndex, resultArray, compareFn);
    };
    MergeSort.prototype.merge = function (l, r, upBound, resultArray, compareFn) {
        if (compareFn === void 0) { compareFn = function (a, b) { return a < b; }; }
        var j = 0; // resultArray index
        var lowBound = l;
        var mid = r - 1;
        var n = upBound - lowBound + 1; // # of items
        while (l <= mid && r <= upBound)
            if (compareFn(this.array[l], this.array[r]))
                resultArray[j++] = this.array[l++];
            else
                resultArray[j++] = this.array[r++];
        while (l <= mid)
            resultArray[j++] = this.array[l++];
        while (r <= upBound)
            resultArray[j++] = this.array[r++];
        for (j = 0; j < n; j++)
            this.array[lowBound + j] = resultArray[j];
    };
    return MergeSort;
}());
exports.default = MergeSort;

//# sourceMappingURL=MergeSort.js.map
