import * as tsUnit from '../../node_modules/ts-unit';
import HanoiTowers from '../../recursion/HanoiTower';
/**
 * HanoiTowers
 */
export class HanoiTowerTests extends tsUnit.TestClass {
    
    private towers : HanoiTowers;
    
    setUp() {
        this.towers = new HanoiTowers();
    }
    
    testOneDisk() {
        var nTowers = 1;
        this.towers.solve(nTowers);
        
        this.areCollectionsIdentical([
             [[1], [], []],
             [[], [], [1]]
            ], this.towers.solution);
        
    }
    
    testTwoDisks() {
        var nTowers = 2;
        this.towers.solve(nTowers);
        
        this.areCollectionsIdentical([
            [[1,2],  [], []],
            [ [2],  [1],  []],
            [  [],  [1], [2]],
            [  [],   [], [1,2]]
            ], 
            this.towers.solution);
        
    }
    
    testTreeDisks() {
        var nTowers = 3;
        this.towers.solve(nTowers);
        this.areCollectionsIdentical([
            [[1,2,3],    [],      [] ],
            [  [2,3],    [],     [1] ],
            [    [3],   [2],     [1] ],
            [    [3], [1,2],      [] ],
            [     [], [1,2],     [3] ],
            [    [1],   [2],     [3] ],
            [    [1],    [],   [2,3] ],
            [     [],    [], [1,2,3] ],
            ], 
            this.towers.solution);
        
        this.towers.clearSolution();
        this.areCollectionsIdentical([], this.towers.solution);

    }
    
    
    
}