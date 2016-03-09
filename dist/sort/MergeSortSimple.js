var h = require("../helpers/ArrayHelpers");
/**
 * MergeSortSimple unoptimized version of Merge Sort Algorithm
 */
var MergeSortSimple = (function () {
    function MergeSortSimple() {
    }
    MergeSortSimple.prototype.sort = function (array, compareFn) {
        return this.mergeSort(array, 0, array.length - 1, compareFn);
    };
    MergeSortSimple.prototype.mergeSort = function (array, startIndex, endIndex, compareFn) {
        if (startIndex > endIndex)
            return [];
        else if (startIndex == endIndex) {
            var result = [];
            result.push(array[startIndex]);
            return result;
        }
        var splitIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        var left = this.mergeSort(array, startIndex, splitIndex, compareFn);
        var right = this.mergeSort(array, splitIndex + 1, endIndex, compareFn);
        return this.merge(left, right, compareFn);
    };
    MergeSortSimple.prototype.merge = function (left, right, compareFn) {
        if (compareFn === void 0) { compareFn = function (a, b) { return a < b; }; }
        var result = []; // <- this is ineffective for memory usage, but algorithm much simplier
        var l = h.makeIterator(left);
        var r = h.makeIterator(right);
        while (!l.done() || !r.done()) {
            if (l.done()) {
                result.push(r.current());
                r.next();
            }
            else if (r.done()) {
                result.push(l.current());
                l.next();
            }
            else if (compareFn(l.current(), r.current())) {
                result.push(l.current());
                l.next();
            }
            else {
                result.push(r.current());
                r.next();
            }
        }
        return result;
    };
    return MergeSortSimple;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MergeSortSimple;

//# sourceMappingURL=MergeSortSimple.js.map
