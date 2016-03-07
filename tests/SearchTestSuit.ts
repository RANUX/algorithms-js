import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import utils = require("./utils");
import BinarySearchTests = require('./search/BinarySearchTests');


var result = new tsUnit.Test(BinarySearchTests).run();
console.log(utils.getTapResults(result));