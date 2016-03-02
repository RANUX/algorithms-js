import fs   = require("fs");
import path = require("path");

var suits = [];

var files = fs.readdirSync(__dirname).forEach(function (fileName) {

    if ( /.*Suit.js$/.test(fileName) ) {
        console.log('================= '+ fileName +' =================');
        require(path.join(__dirname, fileName));
    }
});

