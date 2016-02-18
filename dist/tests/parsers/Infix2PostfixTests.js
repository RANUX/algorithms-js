var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var i2p = require('../../parsers/Infix2Postfix');
var Infix2PostfixTests = (function (_super) {
    __extends(Infix2PostfixTests, _super);
    function Infix2PostfixTests() {
        _super.apply(this, arguments);
        this.inf2Pstfx = new i2p.Infix2Postfix();
    }
    Infix2PostfixTests.prototype.testConvertEmpty = function () {
        var postfix = this.inf2Pstfx.convert("");
        this.areIdentical("", postfix);
    };
    Infix2PostfixTests.prototype.testConvertSymbol = function () {
        var postfix = this.inf2Pstfx.convert("A");
        this.areIdentical("a", postfix);
    };
    Infix2PostfixTests.prototype.testConvertAplusB = function () {
        var postfix = this.inf2Pstfx.convert("A+B");
        this.areIdentical("ab+", postfix);
    };
    return Infix2PostfixTests;
})(tsUnit.TestClass);
exports.Infix2PostfixTests = Infix2PostfixTests;

//# sourceMappingURL=Infix2PostfixTests.js.map
