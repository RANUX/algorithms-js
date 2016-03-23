var PriorityQueue_1 = require('../queues/PriorityQueue');
var TNode_1 = require('./TNode');
var HuffmanTree = (function () {
    function HuffmanTree(frequencies) {
        this.frequencies = frequencies;
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
            this.descFreqQueue.enqueue(item, function (val, aItem) { return item.frequency > aItem.frequency; });
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
            this.descFreqQueue.enqueue(item, function (val, aItem) { return item.frequency > aItem.frequency; });
        }
    };
    return HuffmanTree;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HuffmanTree;
;

//# sourceMappingURL=HuffmanTree.js.map
