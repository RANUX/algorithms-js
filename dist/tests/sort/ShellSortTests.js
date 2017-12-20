"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSortTests_1 = require("./AbstractSortTests");
const ShellSort_1 = require("../../sort/ShellSort");
class ShellSortTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new ShellSort_1.default();
    }
}
exports.default = ShellSortTests;
;

//# sourceMappingURL=ShellSortTests.js.map
