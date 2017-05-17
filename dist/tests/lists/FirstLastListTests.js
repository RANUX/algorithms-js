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
var absListTests = require("./AbstractListTests");
var fllists = require("../../lists/FirstLastList");
/**
 * FirstLastListTests extends absListTests.
 */
var FirstLastListTests = (function (_super) {
    __extends(FirstLastListTests, _super);
    function FirstLastListTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstLastListTests.prototype.createList = function () {
        return new fllists.FirstLastList();
    };
    return FirstLastListTests;
}(absListTests.AbstractListTestsTests));
exports.FirstLastListTests = FirstLastListTests;

//# sourceMappingURL=FirstLastListTests.js.map
