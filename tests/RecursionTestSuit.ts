import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import AnagramTests = require('./recursion/AnagramTests');

import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(AnagramTests).run();
console.log(utils.getTapResults(result));