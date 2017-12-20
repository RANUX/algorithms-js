"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FrequencyTable {
    constructor(text) {
        this.frequencies = {};
        this.text = text;
    }
    build() {
        for (var i = 0; i < this.text.length; i++) {
            var char = this.text.charAt(i);
            if (!isNaN(this.frequencies[char]))
                this.frequencies[char]++;
            else
                this.frequencies[char] = 1;
        }
    }
    toString() {
        for (var key in this.frequencies) {
            console.log(key + ' : ' + this.frequencies[key]);
        }
    }
}
exports.default = FrequencyTable;
;

//# sourceMappingURL=FrequencyTable.js.map
