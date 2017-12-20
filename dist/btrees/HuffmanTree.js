"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PriorityQueue_1 = require("../queues/PriorityQueue");
const FrequencyTable_1 = require("./FrequencyTable");
const TNode_1 = require("./TNode");
class HuffmanTree {
    constructor(str) {
        this.str = str;
        var ftable = new FrequencyTable_1.default(this.str);
        ftable.build();
        this.frequencies = ftable.frequencies;
    }
    build() {
        this.toDescendingFrequencyQueue();
        while (this.descFreqQueue.size() > 1) {
            var lItem = this.descFreqQueue.dequeue();
            var rItem = this.descFreqQueue.dequeue();
            var item = {
                'node': new TNode_1.default(null, lItem.node, rItem.node),
                'frequency': lItem.frequency + rItem.frequency
            };
            this.descFreqQueue.enqueue(item, (val, aItem) => val.frequency > aItem.frequency);
        }
        this.root = this.descFreqQueue.dequeue().node;
    }
    toDescendingFrequencyQueue() {
        this.descFreqQueue = new PriorityQueue_1.default();
        for (var key in this.frequencies) {
            var item = {
                'node': new TNode_1.default(key),
                'frequency': this.frequencies[key]
            };
            this.descFreqQueue.enqueue(item, (val, aItem) => val.frequency > aItem.frequency);
        }
    }
    decode() {
        var result = [];
        this.createCodeMapTable();
        for (var i = 0; i < this.str.length; i++) {
            var char = this.str.charAt(i);
            result.push(this.codeMapTable[char]);
        }
        return result;
    }
    createCodeMapTable() {
    }
}
exports.default = HuffmanTree;
;

//# sourceMappingURL=HuffmanTree.js.map
