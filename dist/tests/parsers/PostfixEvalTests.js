var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var epm = require('../../parsers/PostfixEval');
var PostfixEvalTests = (function (_super) {
    __extends(PostfixEvalTests, _super);
    function PostfixEvalTests() {
        _super.apply(this, arguments);
        this.postfix = new epm.PostfixEval();
    }
    PostfixEvalTests.prototype.testEval_Empty = function () {
        var postfix = this.postfix.eval("");
        this.areIdentical(0, postfix);
    };
    PostfixEvalTests.prototype.testEval_Expression = function () {
        var result = this.postfix.eval("3;4;5;+*6;1;2;+/-");
        this.areIdentical(25, result);
    };
    PostfixEvalTests.prototype.testEval_ComplexExpression = function () {
        // eval "6+10/2+(20-5/5)*54";
        var result = this.postfix.eval("6;10;2;/20;5;5;/-54;*++");
        this.areIdentical(1037, result);
    };
    return PostfixEvalTests;
})(tsUnit.TestClass);
exports.PostfixEvalTests = PostfixEvalTests;

//# sourceMappingURL=PostfixEvalTests.js.map
