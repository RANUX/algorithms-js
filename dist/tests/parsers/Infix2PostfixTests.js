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
var i2p = require("../../parsers/Infix2Postfix");
var Infix2PostfixTests = (function (_super) {
    __extends(Infix2PostfixTests, _super);
    function Infix2PostfixTests() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inf2Pstfx = new i2p.Infix2Postfix();
        return _this;
    }
    Infix2PostfixTests.prototype.testConvert_Empty = function () {
        var postfix = this.inf2Pstfx.convert("");
        this.areIdentical("", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_Symbol = function () {
        var postfix = this.inf2Pstfx.convert("A", "");
        this.areIdentical("a", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_AplusB = function () {
        var postfix = this.inf2Pstfx.convert("A+B", "");
        this.areIdentical("ab+", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_AplusBminusC = function () {
        var postfix = this.inf2Pstfx.convert("A+B-C", "");
        this.areIdentical("ab+c-", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_AplusBmulC = function () {
        var postfix = this.inf2Pstfx.convert("A+B*C", "");
        this.areIdentical("abc*+", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_AmulBplusC = function () {
        var postfix = this.inf2Pstfx.convert("A*B-C", "");
        this.areIdentical("ab*c-", postfix);
    };
    Infix2PostfixTests.prototype.testConvert_A_mul_BRK_B_plus_C_BRK = function () {
        var postfix = this.inf2Pstfx.convert("A*(B+C)", "");
        this.areIdentical("abc+*", postfix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression1 = function () {
        var postfix = this.inf2Pstfx.convert("A*(B+C)-D/(E+F)", "");
        this.areIdentical("abc+*def+/-", postfix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression2 = function () {
        var postfix = this.inf2Pstfx.convert("A*(B+C+D)-D/(D*E+F)", "");
        this.areIdentical("abc+d+*dde*f+/-", postfix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression3 = function () {
        var postfix = this.inf2Pstfx.convert("3*(4+5)-6/(1+2)", "");
        this.areIdentical("345+*612+/-", postfix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression4 = function () {
        var postfix = this.inf2Pstfx.convert("20-5+400");
        this.areIdentical("20;5;-400;+", postfix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression5 = function () {
        var infix = "203*(50+40)+100";
        var postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical("203;50;40;+*100;+", postfix, "INFIX: " + infix);
    };
    Infix2PostfixTests.prototype.testConvertComplexExpression6 = function () {
        var infix = "203*(50+40)*(10*7+4)";
        var postfix = this.inf2Pstfx.convert(infix);
        this.areIdentical("203;50;40;+*10;7;*4;+;*", postfix, "INFIX: " + infix);
    };
    return Infix2PostfixTests;
}(tsUnit.TestClass));
exports.Infix2PostfixTests = Infix2PostfixTests;

//# sourceMappingURL=Infix2PostfixTests.js.map
