"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
const HuffmanTree_1 = require("../../btrees/HuffmanTree");
const TNode_1 = require("../../btrees/TNode");
/**
* HuffmanTreeTests
*/
class HuffmanTreeTests extends tsUnit.TestClass {
    setUp() {
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
    }
    buildTreeTest() {
        this.tree.build();
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    }
    testSortDescendingByFrequency() {
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
    }
    testDecode() {
        this.tree.build();
        console.log(this.tree.decode());
    }
}
exports.HuffmanTreeTests = HuffmanTreeTests;

//# sourceMappingURL=HuffmanTreeTests.js.map
