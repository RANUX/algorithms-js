"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
var suits = [];
var files = fs.readdirSync(__dirname).forEach(function (fileName) {
    if (/.*Suit.js$/.test(fileName)) {
        console.log('******************************************');
        console.log('* ' + fileName);
        console.log('******************************************');
        require(path.join(__dirname, fileName));
    }
});

//# sourceMappingURL=RunAllTestSuits.js.map
