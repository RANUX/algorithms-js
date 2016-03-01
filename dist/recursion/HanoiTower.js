/**
 * HanoiTowers
 */
var HanoiTower = (function () {
    /**
     *
     */
    function HanoiTower() {
        this.clearSolution();
    }
    HanoiTower.prototype.saveSolution = function () {
        var strcopy = JSON.parse(JSON.stringify([this.disks[1], this.disks[2], this.disks[3]]));
        this.solution.push(strcopy);
    };
    HanoiTower.prototype.clearSolution = function () {
        this.solution = [];
        this.disks = {
            1: [],
            2: [],
            3: [] // dst
        };
    };
    HanoiTower.prototype.solve = function (nTowers) {
        this.clearSolution();
        var n = nTowers;
        while (n > 0) {
            this.disks[1].unshift(n);
            n--;
        }
        this.saveSolution();
        this.solveRecursive(nTowers, 1, 2, 3);
        //console.log(this.solution);
    };
    HanoiTower.prototype.solveRecursive = function (nTowers, src, tmp, dst) {
        if (nTowers == 1) {
            this.disks[dst].unshift(this.disks[src].shift());
            this.saveSolution();
            //console.log("Disk 1 from " + src + " to "+ dst);
            return;
        }
        this.solveRecursive(nTowers - 1, src, dst, tmp); // move src disk to tmp
        this.disks[dst].unshift(this.disks[src].shift());
        this.saveSolution();
        //console.log("Disk " + nTowers +  " from " + src + " to "+ dst);
        this.solveRecursive(nTowers - 1, tmp, src, dst); // move tmp disk to dst
    };
    return HanoiTower;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HanoiTower;

//# sourceMappingURL=HanoiTower.js.map
