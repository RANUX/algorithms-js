"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const absListTests = require("./AbstractListTests");
const linkList = require("../../lists/LinkedList");
/**
 * LinkedListTests extends absListTests.
 */
class LinkedListTests extends absListTests.AbstractListTestsTests {
    createList() {
        return new linkList.LinkedList();
    }
}
exports.LinkedListTests = LinkedListTests;

//# sourceMappingURL=LinkedListTests.js.map
