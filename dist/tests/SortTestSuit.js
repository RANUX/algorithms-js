var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var MergeSortSimpleTests = require('./sort/MergeSortSimpleTests');
var MergeSortTests = require('./sort/MergeSortTests');
var utils = require("./utils");
// Instantiate tsUnit and pass in modules that contain tests
var result = new tsUnit.Test(MergeSortSimpleTests).run();
console.log(utils.getTapResults(result));
var result = new tsUnit.Test(MergeSortTests).run();
console.log(utils.getTapResults(result));

//# sourceMappingURL=SortTestSuit.js.map
