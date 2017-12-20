"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const absListTests = require("./AbstractListTests");
const fllists = require("../../lists/FirstLastList");
/**
 * FirstLastListTests extends absListTests.
 */
class FirstLastListTests extends absListTests.AbstractListTestsTests {
    createList() {
        return new fllists.FirstLastList();
    }
}
exports.FirstLastListTests = FirstLastListTests;

//# sourceMappingURL=FirstLastListTests.js.map
