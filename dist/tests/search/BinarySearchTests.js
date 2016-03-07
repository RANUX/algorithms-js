var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absSearchTests = require('./AbstractSearchTests');
var BinarySearch_1 = require('../../search/BinarySearch');
/**
* BinarySearchTests
*/
var BinarySearchTests = (function (_super) {
    __extends(BinarySearchTests, _super);
    function BinarySearchTests() {
        _super.apply(this, arguments);
    }
    BinarySearchTests.prototype.createSearch = function () {
        return new BinarySearch_1.default();
    };
    return BinarySearchTests;
})(absSearchTests.AbstractSearchTestsTests);
exports.BinarySearchTests = BinarySearchTests;

//# sourceMappingURL=BinarySearchTests.js.map
