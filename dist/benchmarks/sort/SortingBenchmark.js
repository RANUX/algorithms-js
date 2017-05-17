"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayHelpers_1 = require("../../helpers/ArrayHelpers");
var ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
var SortingBenchmark = (function () {
    function SortingBenchmark(sortingObj, itemsCount) {
        if (itemsCount === void 0) { itemsCount = 100000; }
        this.dumpWhenAssert = false;
        this.sorting = sortingObj;
        this.itemsCount = itemsCount;
        this.unsortedNum = new Array(this.itemsCount);
        for (var i = 0; i < this.itemsCount; i++) {
            this.unsortedNum[i] = this.getRandomInt(0, this.itemsCount);
        }
        this.sortedNum = ArrayHelpers_1.shallowCopy(this.unsortedNum).sort(function (a, b) { return b - a; });
        this.sortedNumReversed = this.sortedNum.reverse();
    }
    SortingBenchmark.prototype.measureNumSortTime = function (a) {
        var start = new Date().getTime();
        this.sorting.sort(a);
        var end = new Date().getTime();
        console.assert(ArrayHelpers_1.checkSorted(a, this.dumpWhenAssert), 'Something wrong with sorting. Array shoud be sorted!');
        return end - start;
    };
    SortingBenchmark.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    SortingBenchmark.prototype.logMeasureRndNumsTime = function () {
        console.log('[' + ObjectHelpers_1.getObjectName(this.sorting) + ' ]' + ' Sorting ' + this.itemsCount + ' random nums execution time: ' + this.measureNumSortTime(this.unsortedNum) + ' ms');
    };
    return SortingBenchmark;
}());
exports.default = SortingBenchmark;
;

//# sourceMappingURL=SortingBenchmark.js.map
