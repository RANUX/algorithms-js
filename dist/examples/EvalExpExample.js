var i2p = require("../parsers/Infix2Postfix");
var epm = require("../parsers/PostfixEval");
var EvalExpExample = (function () {
    function EvalExpExample() {
        this.converter = new i2p.Infix2Postfix();
        this.pEval = new epm.PostfixEval();
    }
    EvalExpExample.prototype.logEvalExpr = function () {
        var str1 = "6+10/2+(20-5/5)*54";
        console.log('======== PARSERS: convert infix to postfix expression =========');
        var result = this.pEval.eval(this.converter.convert(str1));
        console.log(str1 + ' = ' + result);
    };
    return EvalExpExample;
})();
exports.EvalExpExample = EvalExpExample;
//# sourceMappingURL=EvalExpExample.js.map