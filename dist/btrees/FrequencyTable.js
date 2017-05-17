"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrequencyTable = (function () {
    function FrequencyTable(text) {
        this.frequencies = {};
        this.text = text;
    }
    FrequencyTable.prototype.build = function () {
        for (var i = 0; i < this.text.length; i++) {
            var char = this.text.charAt(i);
            if (!isNaN(this.frequencies[char]))
                this.frequencies[char]++;
            else
                this.frequencies[char] = 1;
        }
    };
    FrequencyTable.prototype.toString = function () {
        for (var key in this.frequencies) {
            console.log(key + ' : ' + this.frequencies[key]);
        }
    };
    return FrequencyTable;
}());
exports.default = FrequencyTable;
;

//# sourceMappingURL=FrequencyTable.js.map
