var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var ObjectHelpers_1 = require('../../helpers/ObjectHelpers');
var FrequencyTable_1 = require('../../btrees/FrequencyTable');
/**
* FrequencyTableTests
*/
var FrequencyTableTests = (function (_super) {
    __extends(FrequencyTableTests, _super);
    function FrequencyTableTests() {
        _super.apply(this, arguments);
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
})(tsUnit.TestClass);
exports.FrequencyTableTests = FrequencyTableTests;

//# sourceMappingURL=FrequencyTableTests.js.map
