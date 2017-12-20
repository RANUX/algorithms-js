"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const Anagram_1 = require("../../recursion/Anagram");
class AnagramTests extends tsUnit.TestClass {
    setUp() {
        this.anagram = new Anagram_1.default();
    }
    testEmpty() {
        var word = "";
        this.areCollectionsIdentical([], this.anagram.getAnagrams(word));
    }
    testTwoLetters() {
        var word = "ab";
        this.areCollectionsIdentical(["ab", "ba"], this.anagram.getAnagrams(word));
    }
    // testAnagrams()
    // {
    //     console.log('================');
    //     this.anagram.anagrams();
    //     console.log('================');
    // }
    testThreeLetters() {
        var word = "cat";
        this.areCollectionsIdentical(["cat", "cta", "atc", "act", "tca", "tac"], this.anagram.getAnagrams(word));
    }
    testRotateChars() {
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
    }
}
exports.AnagramTests = AnagramTests;

//# sourceMappingURL=AnagramTests.js.map
