var tsUnit = require('../node_modules/tsunit.external/tsUnit');
var Infix2PostfixTests = require('./parsers/Infix2PostfixTests');
var PostfixEvalTests = require('./parsers/PostfixEvalTests');
// Instantiate tsUnit and pass in modules that contain tests
var result = new tsUnit.Test(Infix2PostfixTests).run();
console.log(getTapResults(result));
result = new tsUnit.Test(PostfixEvalTests).run();
console.log(getTapResults(result));
// Run the tests
//var result = test.run();
// Show the test results (TAP output)
//console.log(tsUnitTest.getTapResults());
// Show the test results (Your own custom version)
//console.log('Errors: ' + result.errors.length);
function getTapResults(result) {
    var newLine = '\r\n';
    var template = '1..' + (result.passes.length + result.errors.length).toString() + newLine;
    for (var i = 0; i < result.errors.length; i++) {
        template += 'not ok ' + result.errors[i].message + ' ' + result.errors[i].testName + newLine;
    }
    for (var i = 0; i < result.passes.length; i++) {
        template += 'ok ' + result.passes[i].testName + "." + result.passes[i].funcName + newLine;
    }
    return template;
}

//# sourceMappingURL=testSuit.js.map
