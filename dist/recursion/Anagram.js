/**
 * Anagram
 */
var Anagram = (function () {
    function Anagram() {
        this.size = 0;
    }
    Anagram.prototype.anagramRecursive = function (newSize) {
        if (newSize == 1)
            return;
        for (var i = 0; i < newSize; i++) {
            this.anagramRecursive(newSize - 1);
            if (newSize == 2)
                this.result.push(this.chars.join(''));
            this.rotateChars(newSize);
        }
    };
    Anagram.prototype.anagrams = function () {
        var size = 4;
        var stack = [];
        for (var i = 0; i < size - 1; i++) {
            stack.push([size - i, 0]);
        }
        console.log(stack);
        while (stack.length > 0) {
            var step = stack.pop();
        }
    };
    Anagram.prototype.getAnagrams = function (word) {
        this.chars = [];
        this.result = [];
        this.size = word.length;
        for (var i = 0; i < word.length; i++) {
            this.chars[i] = word.charAt(i);
        }
        this.anagramRecursive(this.size);
        return this.result;
    };
    Anagram.prototype.rotateChars = function (newSize) {
        var position = this.size - newSize;
        var temp = this.chars[position]; // Save first letter
        //console.log("befor: "+this.chars);
        for (var j = position + 1; j < this.size; j++) {
            this.chars[j - 1] = this.chars[j];
        }
        this.chars[j - 1] = temp;
        //console.log(this.chars);
    };
    return Anagram;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Anagram;

//# sourceMappingURL=Anagram.js.map
