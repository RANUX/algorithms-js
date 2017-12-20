"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const absSearchTests = require("./AbstractSearchTests");
const BinarySearch_1 = require("../../search/BinarySearch");
/**
* BinarySearchTests
*/
class BinarySearchTests extends absSearchTests.AbstractSearchTestsTests {
    createSearch() {
        return new BinarySearch_1.default();
    }
}
exports.BinarySearchTests = BinarySearchTests;

//# sourceMappingURL=BinarySearchTests.js.map
