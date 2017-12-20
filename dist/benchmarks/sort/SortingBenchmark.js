"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayHelpers_1 = require("../../helpers/ArrayHelpers");
const ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
class SortingBenchmark {
    constructor(sortingObj, itemsCount = 100000) {
        this.dumpWhenAssert = false;
        this.sorting = sortingObj;
        this.itemsCount = itemsCount;
        this.unsortedNum = new Array(this.itemsCount);
        for (var i = 0; i < this.itemsCount; i++) {
            this.unsortedNum[i] = this.getRandomInt(0, this.itemsCount);
        }
        this.sortedNum = ArrayHelpers_1.shallowCopy(this.unsortedNum).sort((a, b) => b - a);
        this.sortedNumReversed = this.sortedNum.reverse();
    }
    measureNumSortTime(a) {
        var start = new Date().getTime();
        this.sorting.sort(a);
        var end = new Date().getTime();
        console.assert(ArrayHelpers_1.checkSorted(a, this.dumpWhenAssert), 'Something wrong with sorting. Array shoud be sorted!');
        return end - start;
    }
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    logMeasureRndNumsTime() {
        console.log('[' + ObjectHelpers_1.getObjectName(this.sorting) + ' ]' + ' Sorting ' + this.itemsCount + ' random nums execution time: ' + this.measureNumSortTime(this.unsortedNum) + ' ms');
    }
}
exports.default = SortingBenchmark;
;

//# sourceMappingURL=SortingBenchmark.js.map
