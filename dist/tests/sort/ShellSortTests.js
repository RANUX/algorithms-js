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
var AbstractSortTests_1 = require("./AbstractSortTests");
var ShellSort_1 = require("../../sort/ShellSort");
var ShellSortTests = (function (_super) {
    __extends(ShellSortTests, _super);
    function ShellSortTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShellSortTests.prototype.createSorting = function () {
        return new ShellSort_1.default();
    };
    return ShellSortTests;
}(AbstractSortTests_1.AbstractSortTests));
exports.default = ShellSortTests;
;

//# sourceMappingURL=ShellSortTests.js.map
