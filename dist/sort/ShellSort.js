"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ShellSort based on Knuth Gap Sequence
 * ShellSort analysis with sequences you can find here http://www.cs.princeton.edu/~rs/shell/paperF.pdf
 */
class ShellSort {
    sort(a, compareFn = (a, b) => (a > b)) {
        // default is Knuth Gap Sequence
        // You can change to other sequence like: return this.shellSortGonnetAndBaezaSequence( a, compareFn);
        //return this.shellSortGonnetAndBaezaSequence( a, compareFn);
        return this.shellSort(a, compareFn, this.forwardKnuthSequence, this.reverseKnuthSequence);
    }
    shellSortGonnetAndBaezaSequence(a, compareFn = (a, b) => (a > b)) {
        return this.shellSort(a, compareFn, this.forwardGonnetAndBaezaSequence, this.reverseGonnetAndBaezaSequence);
    }
    shellSort(a, compareFn, forwardSequence, reverseSequence) {
        var out, temp, inn;
        var hFloat = forwardSequence(a.length);
        var h = Math.floor(hFloat); // round if sequences is floating
        while (h > 0) {
            for (out = h; out < a.length; out++) {
                temp = a[out];
                inn = out;
                while (inn > h - 1 && compareFn(a[inn - h], temp)) {
                    a[inn] = a[inn - h];
                    inn -= h;
                }
                a[inn] = temp;
            }
            hFloat = reverseSequence(hFloat);
            h = Math.ceil(hFloat);
        }
        return a;
    }
    forwardKnuthSequence(arrayLen) {
        var h = 1;
        var maxLen = arrayLen / 3;
        // Knuth Interval Gap Sequence
        while (h <= maxLen)
            h += 3 * h + 1; // (1, 4, 13, 40, 121, ... )
        // when h = 1 this is only insertion sort
        return h;
    }
    reverseKnuthSequence(h) {
        return (h - 1) / 3; // (..., 121, 40, 13, 4, 1 )
    }
    forwardGonnetAndBaezaSequence(arrayLen) {
        var h = 1;
        var maxLen = arrayLen / (11 / 5 - 1);
        while (h <= maxLen)
            h += (5 * h - 1) / 11; // 
        return h;
    }
    reverseGonnetAndBaezaSequence(h) {
        return (11 * h + 1) / 16;
    }
}
exports.default = ShellSort;
;

//# sourceMappingURL=ShellSort.js.map
