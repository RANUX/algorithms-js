var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var absListTests = require('./AbstractListTests');
var linkList = require("../../lists/LinkedList");
/**
 * LinkedListTests extends absListTests.
 */
var LinkedListTests = (function (_super) {
    __extends(LinkedListTests, _super);
    function LinkedListTests() {
        _super.apply(this, arguments);
    }
    LinkedListTests.prototype.createList = function () {
        return new linkList.LinkedList();
    };
    return LinkedListTests;
})(absListTests.AbstractListTestsTests);
exports.LinkedListTests = LinkedListTests;

//# sourceMappingURL=LinkedListTests.js.map
