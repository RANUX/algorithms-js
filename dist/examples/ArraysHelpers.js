"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers = require("../helpers/ArrayHelpers");
var shuffle = require("knuth-shuffle");
var ArrayHelpersExamples = (function () {
    function ArrayHelpersExamples() {
        this.data1 = ["a", "b", "c", "d"];
        this.data2 = ["e", "f", "g", "h"];
    }
    ArrayHelpersExamples.prototype.logMergeArrays = function () {
        console.log("======= ARRAY HELPERS: merge two arrays =========");
        console.log("Merge two arrays: " + this.data1 + " and " + this.data2);
        var result = helpers.merge(this.data1, this.data2);
        console.log("Merged: " + result);
    };
    ArrayHelpersExamples.prototype.logRemoveDuplicates = function () {
        console.log("======= ARRAY HELPERS: remove duplicates from array =========");
        var data = [1, 1, 1, 2, 5, 7, 7, 7, 5, 3, 6, 6];
        data = shuffle.knuthShuffle(data);
        console.log("Array before rm duplicates: " + data);
        helpers.removeDuplicates(data);
        console.log("Array after rm duplicates: " + data);
    };
    return ArrayHelpersExamples;
}());
exports.ArrayHelpersExamples = ArrayHelpersExamples;

//# sourceMappingURL=ArraysHelpers.js.map
