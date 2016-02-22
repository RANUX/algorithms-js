import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import Infix2PostfixTests = require('./parsers/Infix2PostfixTests');
import PostfixEvalTests = require('./parsers/PostfixEvalTests');
import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(Infix2PostfixTests).run();
console.log(utils.getTapResults(result));

result = new tsUnit.Test(PostfixEvalTests).run();
console.log(utils.getTapResults(result));
// Run the tests
//var result = test.run();

// Show the test results (TAP output)
//console.log(tsUnitTest.getTapResults());

// Show the test results (Your own custom version)
//console.log('Errors: ' + result.errors.length);

