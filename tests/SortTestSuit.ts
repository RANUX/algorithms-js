import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import MergeSortTests = require('./sort/MergeSortTests');


import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(MergeSortTests).run();
console.log(utils.getTapResults(result));