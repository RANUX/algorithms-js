var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var utils = require("./utils");
var BinarySearchTests = require('./search/BinarySearchTests');
var result = new tsUnit.Test(BinarySearchTests).run();
console.log(utils.getTapResults(result));

//# sourceMappingURL=SearchTestSuit.js.map
