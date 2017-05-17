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
var tsUnit = require("../../node_modules/tsunit.external/tsUnit");
var ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
var HuffmanTree_1 = require("../../btrees/HuffmanTree");
var TNode_1 = require("../../btrees/TNode");
/**
* HuffmanTreeTests
*/
var HuffmanTreeTests = (function (_super) {
    __extends(HuffmanTreeTests, _super);
    function HuffmanTreeTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HuffmanTreeTests.prototype.setUp = function () {
        this.str = "beep boop beer!";
        this.SP_010 = new TNode_1.default(' ');
        this.P_011 = new TNode_1.default('p');
        this.empty01 = new TNode_1.default(null, this.SP_010, this.P_011);
        this.B_00 = new TNode_1.default('b');
        this.empty0 = new TNode_1.default(null, this.B_00, this.empty01);
        this.EXCL_1000 = new TNode_1.default('!');
        this.R_1001 = new TNode_1.default('r');
        this.empty100 = new TNode_1.default(null, this.EXCL_1000, this.R_1001);
        this.O_101 = new TNode_1.default('o');
        this.empty10 = new TNode_1.default(null, this.empty100, this.O_101);
        this.E_11 = new TNode_1.default('e');
        this.empty1 = new TNode_1.default(null, this.empty10, this.E_11);
        this.root = new TNode_1.default(null, this.empty0, this.empty1);
        this.tree = new HuffmanTree_1.default(this.str);
    };
    HuffmanTreeTests.prototype.buildTreeTest = function () {
        this.tree.build();
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    };
    HuffmanTreeTests.prototype.testSortDescendingByFrequency = function () {
        var expTable = {
            '!': 1,
            'r': 1,
            'o': 2,
            ' ': 2,
            'p': 2,
            'b': 3,
            'e': 4,
        };
        this.tree.toDescendingFrequencyQueue();
        for (var key in expTable) {
            this.isTrue(ObjectHelpers_1.equal({ 'node': new TNode_1.default(key), 'frequency': expTable[key] }, this.tree.descFreqQueue.dequeue()));
        }
    };
    HuffmanTreeTests.prototype.testDecode = function () {
        this.tree.build();
        console.log(this.tree.decode());
    };
    return HuffmanTreeTests;
}(tsUnit.TestClass));
exports.HuffmanTreeTests = HuffmanTreeTests;

//# sourceMappingURL=HuffmanTreeTests.js.map
