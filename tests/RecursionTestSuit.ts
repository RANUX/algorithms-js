import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import AnagramTests = require('./recursion/AnagramTests');
import HanoiTowersTests = require('./recursion/HanoiTowerTests');
import TriangleNumsTests = require('./recursion/TriangleNumsTests');


import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(AnagramTests).run();
console.log(utils.getTapResults(result));

var result = new tsUnit.Test(HanoiTowersTests).run();
console.log(utils.getTapResults(result));

var result = new tsUnit.Test(TriangleNumsTests).run();
console.log(utils.getTapResults(result));