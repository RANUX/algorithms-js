var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var AbstractListTestsTests = (function (_super) {
    __extends(AbstractListTestsTests, _super);
    function AbstractListTestsTests() {
        _super.apply(this, arguments);
        this.data = [1, 2, 3, 4, 1, 9, 5, 7, 10];
    }
    AbstractListTestsTests.prototype.setUp = function () {
        this.list = this.createList();
    };
    AbstractListTestsTests.prototype.testInsertIntoEmptyList = function () {
        this.areIdentical(0, this.list.size());
        this.isTrue(this.list.isEmpty());
        this.list.insert(0, this.data[0]);
        this.areIdentical(1, this.list.size());
        this.isFalse(this.list.isEmpty());
        this.areIdentical(this.data[0], this.list.get(0));
    };
    AbstractListTestsTests.prototype.testInsertBetweenElements = function () {
        this.list.insert(0, this.data[0]);
        this.list.insert(1, this.data[1]);
        this.list.insert(1, this.data[2]);
        this.areIdentical(3, this.list.size());
        this.areIdentical(this.data[0], this.list.get(0));
        this.areIdentical(this.data[2], this.list.get(1));
        this.areIdentical(this.data[1], this.list.get(2));
    };
    AbstractListTestsTests.prototype.testInsertBeforeFirstElement = function () {
        this.list.insert(0, this.data[0]);
        this.list.insert(0, this.data[1]);
        this.areIdentical(2, this.list.size());
        this.areIdentical(this.data[1], this.list.get(0));
        this.areIdentical(this.data[0], this.list.get(1));
    };
    AbstractListTestsTests.prototype.testShiftAndUnshiftElement = function () {
        this.list.insert(0, this.data[0]);
        this.areIdentical(2, this.list.unshift(this.data[2]));
        this.areIdentical(this.data[2], this.list.shift());
        this.areIdentical(1, this.list.size());
    };
    AbstractListTestsTests.prototype.testInsertAfterLastElement = function () {
        this.list.insert(0, this.data[0]);
        this.list.insert(1, this.data[1]);
        this.areIdentical(2, this.list.size());
        this.areIdentical(this.data[0], this.list.get(0));
        this.areIdentical(this.data[1], this.list.get(1));
    };
    AbstractListTestsTests.prototype.testPushPopElement = function () {
        this.list.insert(0, this.data[0]);
        this.areIdentical(2, this.list.push(this.data[1]));
        this.areIdentical(this.data[1], this.list.pop());
        this.areIdentical(1, this.list.size());
        this.areIdentical(this.data[0], this.list.pop());
        this.isTrue(this.list.isEmpty());
    };
    /* TODO: check this out
    testInsertOutOfBounds() {
        
        try {
            this.list.insert(-1, this.data[0]);
            this.fail("Shoud thrown exception")
        } catch (RangeError) {
            // expected
        }

        try {
            this.list.insert(1, this.data[1]);
            this.fail("Shoud thrown exception")
        } catch (RangeError) {
            // expected
        }
    }*/
    AbstractListTestsTests.prototype.testDeleteOnlyElement = function () {
        this.list.push(this.data[0]);
        this.areIdentical(1, this.list.size());
        this.areIdentical(this.data[0], this.list.get(0));
        this.areIdentical(this.data[0], this.list.delete(0));
        this.isTrue(this.list.isEmpty());
    };
    AbstractListTestsTests.prototype.testPushPopDelInsertElements = function () {
        var i = 0;
        for (i = 0; i < 2; i++) {
            this.list.push(this.data[i]);
        }
        this.list.insert(1, this.data[i]);
        this.areIdentical(3, this.list.size());
        this.areIdentical(this.data[i], this.list.delete(1));
        this.areIdentical(2, this.list.size());
        i--;
        while (i >= 0) {
            this.areIdentical(this.data[i], this.list.pop());
            i--;
        }
    };
    AbstractListTestsTests.prototype.testClear = function () {
        this.list.push(this.data[0]);
        this.list.push(this.data[1]);
        this.list.push(this.data[2]);
        this.isFalse(this.list.isEmpty());
        this.list.clear();
        this.isTrue(this.list.isEmpty());
        this.isTrue(this.list.size() == 0);
    };
    return AbstractListTestsTests;
})(tsUnit.TestClass);
exports.AbstractListTestsTests = AbstractListTestsTests;

//# sourceMappingURL=AbstractListTests.js.map
