var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absListTests = require('./AbstractListTests');
var fllists = require("../../lists/FirstLastList");
/**
 * FirstLastListTests extends absListTests.
 */
var FirstLastListTests = (function (_super) {
    __extends(FirstLastListTests, _super);
    function FirstLastListTests() {
        _super.apply(this, arguments);
    }
    FirstLastListTests.prototype.createList = function () {
        return new fllists.FirstLastList();
    };
    return FirstLastListTests;
})(absListTests.AbstractListTestsTests);
exports.FirstLastListTests = FirstLastListTests;

//# sourceMappingURL=FirstLastListTests.js.map
