"use strict";
/**
 * ArrayHelpers
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Merge the contents of two arrays together into the first array.
 *
 * @param first  array
 * @param second seccond
 */
function merge(first, second) {
    for (var i in second) {
        first.push(second[i]);
    }
    return first;
}
exports.merge = merge;
/**
 * Remove duplicates from array
 *
 * @param {any[]} any array with data
 */
function removeDuplicates(a) {
    for (var i = 0; i < a.length; i++) {
        var lastIndex = a.lastIndexOf(a[i]);
        while (lastIndex > i) {
            a.splice(lastIndex, 1);
            lastIndex = a.lastIndexOf(a[i]);
        }
    }
}
exports.removeDuplicates = removeDuplicates;
function isEmpty(array) {
    return (array.length === 0);
}
exports.isEmpty = isEmpty;
function isNotEmpty(array) {
    return (array.length !== 0);
}
exports.isNotEmpty = isNotEmpty;
function shallowCopy(a) {
    var result = [];
    if (a.length == 0)
        return result;
    for (var index = 0; index < a.length; index++) {
        result.push(a[index]);
    }
    return result;
}
exports.shallowCopy = shallowCopy;
function makeIterator(array) {
    var first = 0;
    var last = array.length - 1;
    var current = 0;
    return {
        current: function () {
            return array[current];
        },
        done: function () {
            return current < first || current > last;
        },
        next: function () {
            current++;
        }
    };
}
exports.makeIterator = makeIterator;
function swap(i, j, array) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
}
exports.swap = swap;
/**
 * Compare string in descending order
 *
 * @export
 * @param a (description)
 * @param b (description)
 * @returns {number} (description)
 */
function compareStrDesc(a, b) {
    if (a > b)
        return -1;
    else if (a < b)
        return 1;
    else
        return 0;
}
exports.compareStrDesc = compareStrDesc;
function checkSorted(a, isDump) {
    if (isDump === void 0) { isDump = false; }
    var l = -1;
    var r = a.length;
    var pivotIndex = Math.floor(a.length / 2);
    var pivot = a[pivotIndex];
    while (a[++l] <= pivot)
        ; // nop
    while (a[--r] >= pivot)
        ; // nop
    if (isDump) {
        console.log('pivotIndex: ' + pivotIndex + '  pivot: ' + pivot);
        console.log('l: ' + l + ' r: ' + r);
        for (var i = 5; i >= -5; i--) {
            console.log('i: ' + i + '  a[' + (l - i) + ']: ' + a[l - i] + '  a[' + (r + i) + ']: ' + a[r + i]);
        }
    }
    return (a[l - 1] === a[r + 1]);
}
exports.checkSorted = checkSorted;

//# sourceMappingURL=ArrayHelpers.js.map
