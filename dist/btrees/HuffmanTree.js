"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PriorityQueue_1 = require("../queues/PriorityQueue");
var FrequencyTable_1 = require("./FrequencyTable");
var TNode_1 = require("./TNode");
var HuffmanTree = (function () {
    function HuffmanTree(str) {
        this.str = str;
        var ftable = new FrequencyTable_1.default(this.str);
        ftable.build();
        this.frequencies = ftable.frequencies;
    }
    HuffmanTree.prototype.build = function () {
        this.toDescendingFrequencyQueue();
        while (this.descFreqQueue.size() > 1) {
            var lItem = this.descFreqQueue.dequeue();
            var rItem = this.descFreqQueue.dequeue();
            var item = {
                'node': new TNode_1.default(null, lItem.node, rItem.node),
                'frequency': lItem.frequency + rItem.frequency
            };
            this.descFreqQueue.enqueue(item, function (val, aItem) { return val.frequency > aItem.frequency; });
        }
        this.root = this.descFreqQueue.dequeue().node;
    };
    HuffmanTree.prototype.toDescendingFrequencyQueue = function () {
        this.descFreqQueue = new PriorityQueue_1.default();
        for (var key in this.frequencies) {
            var item = {
                'node': new TNode_1.default(key),
                'frequency': this.frequencies[key]
            };
            this.descFreqQueue.enqueue(item, function (val, aItem) { return val.frequency > aItem.frequency; });
        }
    };
    HuffmanTree.prototype.decode = function () {
        var result = [];
        this.createCodeMapTable();
        for (var i = 0; i < this.str.length; i++) {
            var char = this.str.charAt(i);
            result.push(this.codeMapTable[char]);
        }
        return result;
    };
    HuffmanTree.prototype.createCodeMapTable = function () {
    };
    return HuffmanTree;
}());
exports.default = HuffmanTree;
;

//# sourceMappingURL=HuffmanTree.js.map
