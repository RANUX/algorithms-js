var fs = require("fs");
var path = require("path");
var suits = [];
var files = fs.readdirSync(__dirname).forEach(function (fileName) {
    if (/.*Suit.js$/.test(fileName)) {
        console.log('================= ' + fileName + ' =================');
        require(path.join(__dirname, fileName));
    }
});

//# sourceMappingURL=RunAllTestSuits.js.map
