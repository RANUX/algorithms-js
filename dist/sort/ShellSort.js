/**
 * ShellSort
 */
var ShellSort = (function () {
    function ShellSort() {
    }
    ShellSort.prototype.sort = function (a, compareFn) {
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
    return ShellSort;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShellSort;
;

//# sourceMappingURL=ShellSort.js.map
