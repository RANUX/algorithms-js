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
var absSearchTests = require("./AbstractSearchTests");
var BinarySearch_1 = require("../../search/BinarySearch");
/**
* BinarySearchTests
*/
var BinarySearchTests = (function (_super) {
    __extends(BinarySearchTests, _super);
    function BinarySearchTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinarySearchTests.prototype.createSearch = function () {
        return new BinarySearch_1.default();
    };
    return BinarySearchTests;
}(absSearchTests.AbstractSearchTestsTests));
exports.BinarySearchTests = BinarySearchTests;

//# sourceMappingURL=BinarySearchTests.js.map
