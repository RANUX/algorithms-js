var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var epm = require('../../parsers/PostfixEval');
var EvalPostfixTests = (function (_super) {
    __extends(EvalPostfixTests, _super);
    function EvalPostfixTests() {
        _super.apply(this, arguments);
        this.postfix = new epm.PostfixEval();
    }
    EvalPostfixTests.prototype.testEval_Empty = function () {
        var postfix = this.postfix.eval("");
        this.areIdentical(0, postfix);
    };
    EvalPostfixTests.prototype.testEval_Expression = function () {
        var result = this.postfix.eval("345+*612+/-");
        this.areIdentical(25, result);
    };
    return EvalPostfixTests;
})(tsUnit.TestClass);
exports.EvalPostfixTests = EvalPostfixTests;
//# sourceMappingURL=EvalPostfixTests.js.map