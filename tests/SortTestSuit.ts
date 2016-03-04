import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import MergeSortSimpleTests = require('./sort/MergeSortSimpleTests');


import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(MergeSortSimpleTests).run();
console.log(utils.getTapResults(result));