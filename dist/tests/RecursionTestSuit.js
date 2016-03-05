var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var AnagramTests = require('./recursion/AnagramTests');
var HanoiTowersTests = require('./recursion/HanoiTowerTests');
var TriangleNumsTests = require('./recursion/TriangleNumsTests');
var utils = require("./utils");
// Instantiate tsUnit and pass in modules that contain tests
var result = new tsUnit.Test(AnagramTests).run();
console.log(utils.getTapResults(result));
var result = new tsUnit.Test(HanoiTowersTests).run();
console.log(utils.getTapResults(result));
var result = new tsUnit.Test(TriangleNumsTests).run();
console.log(utils.getTapResults(result));

//# sourceMappingURL=RecursionTestSuit.js.map
