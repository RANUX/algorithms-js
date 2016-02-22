var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absListTests = require('./AbstractListTests');
var fllists = require("../../lists/FirstLastList");
/**
 * SortedFirstLastListTests extends absListTests.
 */
var SortedFirstLastListTests = (function (_super) {
    __extends(SortedFirstLastListTests, _super);
    function SortedFirstLastListTests() {
        _super.apply(this, arguments);
    }
    SortedFirstLastListTests.prototype.createList = function () {
        return new fllists.SortedFirstLastList();
    };
    SortedFirstLastListTests.prototype.testShiftAndUnshiftElement = function () {
        // unshift unsorted array
        for (var i in this.data) {
            this.list.unshift(this.data[i]);
        }
        // sort test data
        this.data.sort(function (n1, n2) { return n1 - n2; });
        for (var i in this.data) {
            this.areIdentical(this.data[i], this.list.shift());
        }
        this.isTrue(this.list.isEmpty());
    };
    return SortedFirstLastListTests;
})(absListTests.AbstractListTestsTests);
exports.SortedFirstLastListTests = SortedFirstLastListTests;

//# sourceMappingURL=SortedFirstLastListTests.js.map
