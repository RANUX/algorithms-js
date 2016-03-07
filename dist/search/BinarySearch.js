/**
 * BinarySearch find index of value in sorted array
 */
var BinarySearch = (function () {
    function BinarySearch() {
    }
    /**
     * Search index of value in array
     *
     * @param {*} value any
     * @param {any[]} array any
     * @returns {number} index of value in array
     */
    BinarySearch.prototype.indexOf = function (value, array) {
        this.array = array;
        var lowBound = 0;
        var upBound = this.array.length - 1;
        var index = -1;
        while (true) {
            var mid = Math.floor((lowBound + upBound) / 2);
            if (this.array[mid] == value)
                return mid;
            else if (lowBound > upBound)
                return index;
            else {
                if (value < this.array[mid])
                    upBound = mid - 1;
                else
                    lowBound = mid + 1;
            }
        }
    };
    return BinarySearch;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BinarySearch;

//# sourceMappingURL=BinarySearch.js.map
