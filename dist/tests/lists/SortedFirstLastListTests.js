"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const absListTests = require("./AbstractListTests");
const fllists = require("../../lists/FirstLastList");
/**
 * SortedFirstLastListTests extends absListTests.
 */
class SortedFirstLastListTests extends absListTests.AbstractListTestsTests {
    createList() {
        return new fllists.SortedFirstLastList();
    }
    testShiftAndUnshiftElement() {
        // unshift unsorted array
        for (var i in this.data) {
            this.list.unshift(this.data[i]);
        }
        // sort test data
        this.data.sort((n1, n2) => n1 - n2);
        for (var i in this.data) {
            this.areIdentical(this.data[i], this.list.shift());
        }
        this.isTrue(this.list.isEmpty());
    }
}
exports.SortedFirstLastListTests = SortedFirstLastListTests;

//# sourceMappingURL=SortedFirstLastListTests.js.map
