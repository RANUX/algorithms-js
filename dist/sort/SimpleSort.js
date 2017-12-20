"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple sort algorithms. Complexity O(N^2)
 */
/**
 * BubbleSort
 */
class BubbleSort {
    sort(a, compareFn) {
        for (var out = a.length - 1; out > 0; out--) {
            for (var inn = 0; inn < out; inn++) {
                if (a[inn] > a[inn + 1]) {
                    // swap
                    var tmp = a[inn];
                    a[inn] = a[inn + 1];
                    a[inn + 1] = tmp;
                }
            }
        }
        return a;
    }
}
exports.BubbleSort = BubbleSort;
/**
 * SelectionSort
 */
class SelectionSort {
    sort(a, compareFn) {
        var min, out;
        for (out = 0; out < a.length; out++) {
            min = out;
            for (var inn = out + 1; inn < a.length; inn++) {
                if (a[inn] < a[min])
                    min = inn;
            }
            // swap
            var tmp = a[out];
            a[out] = a[min];
            a[min] = tmp;
        }
        return a;
    }
}
exports.SelectionSort = SelectionSort;
/**
 * InsertionSort
 */
class InsertionSort {
    sort(a, compareFn) {
        return this.insSort(a, 0, a.length - 1, compareFn);
    }
    insSort(a, l, r, compareFn) {
        var out, temp, inn;
        for (out = l + 1; out <= r; out++) {
            temp = a[out];
            inn = out;
            while (inn > 0 && a[inn - 1] > temp) {
                a[inn] = a[inn - 1];
                --inn;
            }
            a[inn] = temp;
        }
        return a;
    }
}
exports.InsertionSort = InsertionSort;

//# sourceMappingURL=SimpleSort.js.map
