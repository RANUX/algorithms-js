"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSortTests_1 = require("./AbstractSortTests");
const simpsort = require("../../sort/SimpleSort");
class BubbleSortTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new simpsort.BubbleSort();
    }
}
exports.BubbleSortTests = BubbleSortTests;
class SelectionSortTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new simpsort.SelectionSort();
    }
}
exports.SelectionSortTests = SelectionSortTests;
class InsertionSortTests extends AbstractSortTests_1.AbstractSortTests {
    createSorting() {
        return new simpsort.InsertionSort();
    }
}
exports.InsertionSortTests = InsertionSortTests;

//# sourceMappingURL=SimpleSortTests.js.map
