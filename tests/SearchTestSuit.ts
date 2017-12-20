import tsUnit = require('../node_modules/ts-unit');
import utils = require("./utils");
import fs   = require("fs");
import path = require("path");

var testsDir = path.join(__dirname, "search");

export default function runTests() {
    var files = fs.readdirSync(testsDir).forEach(function (fileName) {

    if ( /^(?!Abstract).*Tests.js$/ig.test(fileName) ) {
        console.log('================= '+ fileName +' =================');
        var test = require(path.join(testsDir, fileName));
        
        //console.log(test);
            var result = new tsUnit.Test( test ).run();
            console.log(utils.getTapResults(result));

        
    }
});

}
runTests();
