"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
const FrequencyTable_1 = require("../../btrees/FrequencyTable");
/**
* FrequencyTableTests
*/
class FrequencyTableTests extends tsUnit.TestClass {
    setUp() {
        var str = "beep boop beer!";
        this.ftable = new FrequencyTable_1.default(str);
        this.ftable.build();
    }
    testBuildTable() {
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
    }
}
exports.FrequencyTableTests = FrequencyTableTests;

//# sourceMappingURL=FrequencyTableTests.js.map
