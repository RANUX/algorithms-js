"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tsUnit = require("../../node_modules/tsunit.external/tsUnit");
var Anagram_1 = require("../../recursion/Anagram");
var AnagramTests = (function (_super) {
    __extends(AnagramTests, _super);
    function AnagramTests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnagramTests.prototype.setUp = function () {
        this.anagram = new Anagram_1.default();
    };
    AnagramTests.prototype.testEmpty = function () {
        var word = "";
        this.areCollectionsIdentical([], this.anagram.getAnagrams(word));
    };
    AnagramTests.prototype.testTwoLetters = function () {
        var word = "ab";
        this.areCollectionsIdentical(["ab", "ba"], this.anagram.getAnagrams(word));
    };
    // testAnagrams()
    // {
    //     console.log('================');
    //     this.anagram.anagrams();
    //     console.log('================');
    // }
    AnagramTests.prototype.testThreeLetters = function () {
        var word = "cat";
        this.areCollectionsIdentical(["cat", "cta", "atc", "act", "tca", "tac"], this.anagram.getAnagrams(word));
    };
    AnagramTests.prototype.testRotateChars = function () {
        // two
        this.anagram.chars = ['a', 'b'];
        this.anagram.size = this.anagram.chars.length;
        this.anagram.rotateChars(2);
        this.areCollectionsIdentical(['b', 'a'], this.anagram.chars);
        //three
        this.anagram.chars = ['a', 'b', 'c'];
        this.anagram.size = this.anagram.chars.length;
        this.anagram.rotateChars(3);
        this.areCollectionsIdentical(['b', 'c', 'a'], this.anagram.chars);
        this.anagram.rotateChars(2);
        this.areCollectionsIdentical(['b', 'a', 'c'], this.anagram.chars);
        // four
        this.anagram.chars = ['a', 'b', 'c', 'd', 'e'];
        this.anagram.size = this.anagram.chars.length;
        // put 'a' to i:4
        this.anagram.rotateChars(5);
        this.areCollectionsIdentical(['b', 'c', 'd', 'e', 'a'], this.anagram.chars);
        // put 'c' to i:3
        // newSize : 4
        // pos: 5 - 4  = 1
        // j: pos+1 = 2
        this.anagram.rotateChars(4);
        this.areCollectionsIdentical(['b', 'd', 'e', 'a', 'c'], this.anagram.chars);
        // pos: 5 - 3  = 2
        // newSize : 3
        // j: pos+1 = 3
        this.anagram.rotateChars(3);
        this.areCollectionsIdentical(['b', 'd', 'a', 'c', 'e'], this.anagram.chars);
        this.anagram.rotateChars(2);
        this.areCollectionsIdentical(['b', 'd', 'a', 'e', 'c'], this.anagram.chars);
    };
    return AnagramTests;
}(tsUnit.TestClass));
exports.AnagramTests = AnagramTests;

//# sourceMappingURL=AnagramTests.js.map
