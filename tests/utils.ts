import fs   = require("fs");
import path = require("path");
import tsUnit = require('../node_modules/ts-unit');

export function getTapResults(result) {
    var newLine = '\r\n';
    var template = '1..' + (result.passes.length + result.errors.length).toString() + newLine;

    for (var i = 0; i < result.errors.length; i++) {
        template += 'not ok ' + result.errors[i].message + ' ' + result.errors[i].testName + " . " + result.errors[i].funcName + newLine;
    }

    for (var i = 0; i < result.passes.length; i++) {
        template += 'ok ' + result.passes[i].testName + " . " + result.passes[i].funcName + newLine;
    }

    return template;
}

export function runTests(testsDir) 
{
    var files = fs.readdirSync(testsDir).forEach(function (fileName) {

    if ( /^(?!Abstract).*Tests.js$/ig.test(fileName) ) {
        console.log('================= '+ fileName +' =================');
        var test = require(path.join(testsDir, fileName));
        
        //console.log(test);
            var result = new tsUnit.Test( test ).run();
            console.log(getTapResults(result));

        
    }});
}