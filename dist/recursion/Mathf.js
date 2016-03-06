/**
 * Mathf
 */
var Mathf = (function () {
    function Mathf() {
    }
    Mathf.pow = function (x, y) {
        if (y < 0)
            throw "Only for positive power";
        if (y == 0)
            return 1;
        else if (y === 1) {
            return x;
        }
        var r = this.pow(x * x, Math.floor(y / 2));
        if (y % 2 == 1)
            r = x * r;
        return r;
    };
    return Mathf;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Mathf;

//# sourceMappingURL=Mathf.js.map
