var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var FirstLastListTests = require('./lists/FirstLastListTests');
var SortedFirstLastListTests = require('./lists/SortedFirstLastListTests');
var LinkedListTests = require('./lists/LinkedListTests');
var utils = require("./utils");
// Instantiate tsUnit and pass in modules that contain tests
var result = new tsUnit.Test(FirstLastListTests).run();
console.log(utils.getTapResults(result));
var result = new tsUnit.Test(SortedFirstLastListTests).run();
console.log(utils.getTapResults(result));
var result = new tsUnit.Test(LinkedListTests).run();
console.log(utils.getTapResults(result));

//# sourceMappingURL=ListsTestSuit.js.map
