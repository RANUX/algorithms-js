var CPoint = (function () {
    function CPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    CPoint.prototype.toString = function () {
        return "(x" + this.x + ", y" + this.y + ")";
    };
    return CPoint;
})();
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var bs = new BubbleSort();
        bs.sort([5, 2, 3, 6, 2, 0]);
        return 0;
    };
    return Startup;
})();
Startup.main();

//# sourceMappingURL=Main.js.map
