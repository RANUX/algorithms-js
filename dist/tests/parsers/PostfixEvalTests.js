"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tsUnit = require("../../node_modules/tsunit.external/tsUnit");
var epm = require("../../parsers/PostfixEval");
var PostfixEvalTests = (function (_super) {
    __extends(PostfixEvalTests, _super);
    function PostfixEvalTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.postfix = new epm.PostfixEval();
        return _this;
    }
    PostfixEvalTests.prototype.testEval_Empty = function () {
        var postfix = this.postfix.eval("");
        this.areIdentical(0, postfix);
    };
    PostfixEvalTests.prototype.testEval_Number = function () {
        var postfix = this.postfix.eval("4");
        this.areIdentical(4, postfix);
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
}(tsUnit.TestClass));
exports.PostfixEvalTests = PostfixEvalTests;

//# sourceMappingURL=PostfixEvalTests.js.map
