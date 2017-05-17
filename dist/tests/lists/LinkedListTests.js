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
var absListTests = require("./AbstractListTests");
var linkList = require("../../lists/LinkedList");
/**
 * LinkedListTests extends absListTests.
 */
var LinkedListTests = (function (_super) {
    __extends(LinkedListTests, _super);
    function LinkedListTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkedListTests.prototype.createList = function () {
        return new linkList.LinkedList();
    };
    return LinkedListTests;
}(absListTests.AbstractListTestsTests));
exports.LinkedListTests = LinkedListTests;

//# sourceMappingURL=LinkedListTests.js.map
