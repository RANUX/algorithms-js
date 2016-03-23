var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var ObjectHelpers_1 = require('../../helpers/ObjectHelpers');
var FrequencyTable_1 = require('../../btrees/FrequencyTable');
var HuffmanTree_1 = require('../../btrees/HuffmanTree');
var TNode_1 = require('../../btrees/TNode');
/**
* HuffmanTreeTests
*/
var HuffmanTreeTests = (function (_super) {
    __extends(HuffmanTreeTests, _super);
    function HuffmanTreeTests() {
        _super.apply(this, arguments);
    }
    HuffmanTreeTests.prototype.setUp = function () {
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
        this.ftable = new FrequencyTable_1.default("beep boop beer!");
        this.ftable.build();
        this.tree = new HuffmanTree_1.default(this.ftable.frequencies);
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
    return HuffmanTreeTests;
})(tsUnit.TestClass);
exports.HuffmanTreeTests = HuffmanTreeTests;

//# sourceMappingURL=HuffmanTreeTests.js.map
