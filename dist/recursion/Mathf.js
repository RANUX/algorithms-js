/**
 * Mathf
 */
var Mathf = (function () {
    function Mathf() {
    }
    /**
     *  The Math.pow() function returns the base to the exponent power, that is, base^exponent
     *
     * @static
     * @param {number} base (description)
     * @param {number} exp (description)
     * @returns {number} (description)
     */
    Mathf.pow = function (base, exp) {
        if (exp < 0)
            throw "Only for positive exponent";
        if (exp == 0)
            return 1;
        else if (exp === 1)
            return base;
        var r = this.pow(base * base, Math.floor(exp / 2));
        if (exp % 2 == 1)
            r = base * r;
        return r;
    };
    return Mathf;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Mathf;

//# sourceMappingURL=Mathf.js.map
