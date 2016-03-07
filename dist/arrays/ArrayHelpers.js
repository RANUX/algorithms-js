/**
 * ArrayHelpers
 */
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

//# sourceMappingURL=ArrayHelpers.js.map
