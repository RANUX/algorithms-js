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
var ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
var FrequencyTable_1 = require("../../btrees/FrequencyTable");
/**
* FrequencyTableTests
*/
var FrequencyTableTests = (function (_super) {
    __extends(FrequencyTableTests, _super);
    function FrequencyTableTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FrequencyTableTests.prototype.setUp = function () {
        var str = "beep boop beer!";
        this.ftable = new FrequencyTable_1.default(str);
        this.ftable.build();
    };
    FrequencyTableTests.prototype.testBuildTable = function () {
        var expTable = {
            'b': 3,
            'e': 4,
            'p': 2,
            ' ': 2,
            'o': 2,
            'r': 1,
            '!': 1
        };
        this.isTrue(ObjectHelpers_1.equal(expTable, this.ftable.frequencies));
    };
    return FrequencyTableTests;
}(tsUnit.TestClass));
exports.FrequencyTableTests = FrequencyTableTests;

//# sourceMappingURL=FrequencyTableTests.js.map
