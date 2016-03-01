/**
 * HanoiTowers
 */
var HanoiTower = (function () {
    function HanoiTower() {
        this.solution = [];
        this.towers = {
            1: [],
            2: [],
            3: [] // dst
        };
    }
    HanoiTower.prototype.saveSolution = function () {
        var strcopy = JSON.parse(JSON.stringify([this.towers[1], this.towers[2], this.towers[3]]));
        this.solution.push(strcopy);
    };
    HanoiTower.prototype.solve = function (nTowers) {
        var n = nTowers;
        while (n > 0) {
            this.towers[1].unshift(n);
            n--;
        }
        this.saveSolution();
        this.solveRecursive(nTowers, 1, 2, 3);
        //console.log(this.solution);
    };
    HanoiTower.prototype.solveRecursive = function (nTowers, src, tmp, dst) {
        if (nTowers == 1) {
            this.towers[dst].unshift(this.towers[src].shift());
            this.saveSolution();
            //console.log("Disk 1 from " + src + " to "+ dst);
            return;
        }
        this.solveRecursive(nTowers - 1, src, dst, tmp);
        this.towers[dst].unshift(this.towers[src].shift());
        this.saveSolution();
        //console.log("Disk " + nTowers +  " from " + src + " to "+ dst);
        this.solveRecursive(nTowers - 1, tmp, src, dst);
    };
    return HanoiTower;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HanoiTower;

//# sourceMappingURL=HanoiTower.js.map
