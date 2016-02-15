/**
 * ArrayHelpers
 */
var ArrayHelpers = (function () {
    function ArrayHelpers() {
    }
    /**
     * Merge the contents of two arrays together into the first array.
     *
     * @param first  array
     * @param second seccond
     */
    ArrayHelpers.prototype.merge = function (first, second) {
        for (var i in second) {
            first.push(second[i]);
        }
        return first;
    };
    return ArrayHelpers;
})();
exports.ArrayHelpers = ArrayHelpers;

//# sourceMappingURL=ArrayHelpers.js.map
