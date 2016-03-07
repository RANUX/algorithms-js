import tsUnit = require('../node_modules/tsunit.external/tsUnit');
import Infix2PostfixTests = require('./parsers/Infix2PostfixTests');
import PostfixEvalTests = require('./parsers/PostfixEvalTests');
import utils = require("./utils");

// Instantiate tsUnit and pass in modules that contain tests

var result = new tsUnit.Test(Infix2PostfixTests).run();
console.log(utils.getTapResults(result));

result = new tsUnit.Test(PostfixEvalTests).run();
console.log(utils.getTapResults(result));
