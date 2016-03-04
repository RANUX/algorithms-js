var h = require("../arrays/ArrayHelpers");
/**
 * MergeSort
 */
var MergeSort = (function () {
    function MergeSort() {
    }
    MergeSort.prototype.sort = function (list, compareFn) {
        return this.mergeSort(list, 0, list.length - 1, compareFn);
    };
    MergeSort.prototype.mergeSort = function (list, startIndex, endIndex, compareFn) {
        if (startIndex == endIndex) {
            var result = [];
            result.push(list[startIndex]);
            return result;
        }
        var splitIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        var left = this.mergeSort(list, startIndex, splitIndex, compareFn);
        var right = this.mergeSort(list, splitIndex + 1, endIndex, compareFn);
        return this.merge(left, right, compareFn);
    };
    MergeSort.prototype.merge = function (left, right, compareFn) {
        if (compareFn === void 0) { compareFn = function (a, b) { return a < b; }; }
        var result = [];
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
    return MergeSort;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MergeSort;

//# sourceMappingURL=MergeSort.js.map
