"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../node_modules/ts-unit");
const utils = require("./utils");
const fs = require("fs");
const path = require("path");
var testsDir = path.join(__dirname, "sort");
function runTests() {
    var files = fs.readdirSync(testsDir).forEach(function (fileName) {
        if (/^(?!Abstract).*Tests.js$/ig.test(fileName)) {
            console.log('================= ' + fileName + ' =================');
            var test = require(path.join(testsDir, fileName));
            //console.log(test);
            var result = new tsUnit.Test(test).run();
            console.log(utils.getTapResults(result));
        }
    });
}
exports.default = runTests;
runTests();

//# sourceMappingURL=SortTestSuit.js.map
