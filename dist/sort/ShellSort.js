/**
 * ShellSort based on Knuth Gap Sequence
 * ShellSort analysis with sequences you can find here http://www.cs.princeton.edu/~rs/shell/paperF.pdf
 */
var ShellSort = (function () {
    function ShellSort() {
    }
    ShellSort.prototype.sort = function (a, compareFn) {
        if (compareFn === void 0) { compareFn = function (a, b) { return (a > b); }; }
        var out, temp, inn;
        var h = 1;
        var maxLen = Math.floor(a.length / 3);
        // Knuth Interval Gap Sequence
        while (h <= maxLen)
            h += 3 * h + 1; // (1, 4, 13, 40, 121, ... )
        // when h = 1 this is only insertion sort
        while (h > 0) {
            for (out = h; out < a.length; out++) {
                temp = a[out];
                inn = out;
                while (inn > h - 1 && compareFn(a[inn - h], temp)) {
                    a[inn] = a[inn - h];
                    inn -= h;
                }
                a[inn] = temp;
            }
            h = Math.floor((h - 1) / 3); // (..., 121, 40, 13, 4, 1 )
        }
        return a;
    };
    return ShellSort;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShellSort;
;

//# sourceMappingURL=ShellSort.js.map
