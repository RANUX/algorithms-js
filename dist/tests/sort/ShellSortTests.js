var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AbstractSortTests_1 = require('./AbstractSortTests');
var ShellSort_1 = require('../../sort/ShellSort');
var ShellSortTests = (function (_super) {
    __extends(ShellSortTests, _super);
    function ShellSortTests() {
        _super.apply(this, arguments);
    }
    ShellSortTests.prototype.createSorting = function () {
        return new ShellSort_1.default();
    };
    return ShellSortTests;
})(AbstractSortTests_1.AbstractSortTests);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ShellSortTests;
;

//# sourceMappingURL=ShellSortTests.js.map
