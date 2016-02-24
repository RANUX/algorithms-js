import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import FirstLastListTests = require('./lists/FirstLastListTests');
import SortedFirstLastListTests = require('./lists/SortedFirstLastListTests');
import LinkedListTests = require('./lists/LinkedListTests');
import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(FirstLastListTests).run();
console.log(utils.getTapResults(result));


var result = new tsUnit.Test(SortedFirstLastListTests).run();
console.log(utils.getTapResults(result));

var result = new tsUnit.Test(LinkedListTests).run();
console.log(utils.getTapResults(result));
