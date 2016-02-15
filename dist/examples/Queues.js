var mq = require("../queues/CircularQueue");
var shuffle = require('knuth-shuffle');
var QueueExamples = (function () {
    function QueueExamples() {
        this.data = ["da", "csharp", "cpp", "db", "python", "cpp", "node", "js"];
        this.cQueue = new mq.CircularQueue(8);
    }
    QueueExamples.prototype.logCircularQueue = function () {
        var dequeuedItems = "";
        console.log("===== Cirqular Queue EXAMPLE =====");
        shuffle.knuthShuffle(this.data);
        console.log("Data before insert into circular queue: " + this.data);
        for (var i in this.data) {
            this.cQueue.enqueue(this.data[i]);
        }
        dequeuedItems += this.cQueue.dequeue() + ", ";
        dequeuedItems += this.cQueue.dequeue() + ", ";
        console.log(" Queue size: " + this.cQueue.size() + " Dequeue several elements: " + dequeuedItems);
        this.cQueue.enqueue("1");
        this.cQueue.enqueue("2");
        dequeuedItems = "";
        for (var e in this.data) {
            dequeuedItems += this.cQueue.dequeue() + ", ";
        }
        dequeuedItems = dequeuedItems.slice(0, dequeuedItems.length - 2);
        console.log("dequeuedItems : [ " + dequeuedItems + " ]");
    };
    return QueueExamples;
})();
exports.QueueExamples = QueueExamples;

//# sourceMappingURL=Queues.js.map
