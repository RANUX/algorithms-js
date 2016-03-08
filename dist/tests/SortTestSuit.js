var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var utils = require("./utils");
var fs = require("fs");
var path = require("path");
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTests;
runTests();

//# sourceMappingURL=SortTestSuit.js.map
