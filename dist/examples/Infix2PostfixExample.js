var pm = require("../parsers/Infix2Postfix");
var Infix2PostfixExample = (function () {
    function Infix2PostfixExample() {
        this.converter = new pm.Infix2Postfix();
    }
    Infix2PostfixExample.prototype.logConvertExpr = function () {
        var str1 = "A+B-C";
        var str2 = "A*(B+C)-D/(E+F)";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        this.convert(str1);
        this.convert(str2);
    };
    Infix2PostfixExample.prototype.convert = function (str) {
        console.log('Infix expression: ' + str);
        console.log('Postfix expression: ' + this.converter.convert(str).toUpperCase());
    };
    return Infix2PostfixExample;
})();
exports.Infix2PostfixExample = Infix2PostfixExample;

//# sourceMappingURL=Infix2PostfixExample.js.map
