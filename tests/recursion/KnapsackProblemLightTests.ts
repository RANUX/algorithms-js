import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import Knapsack from '../../recursion/KnapsackProblemLight';
/**
* KnapsackProblemLightTests
*/
export class KnapsackProblemLightTests extends tsUnit.TestClass {

    setUp() {
        
    }
    
    testSolve1ItemExists() {
        var knapasack = new Knapsack([20]);
        this.areCollectionsIdentical( [20], knapasack.solve(20) );
    }
    
    testSolve1ItemNotExists() {
        var knapasack = new Knapsack([9, 7]);
        this.areCollectionsIdentical( [], knapasack.solve(22) );
    }
    
    testSolve2ItemExists() {
        var knapasack = new Knapsack([10, 10]);
        this.areCollectionsIdentical( [10, 10], knapasack.solve(20) );
    }
    
    testSolve() {
        var knapasack = new Knapsack([11, 8, 7, 6, 5]);
        this.areCollectionsIdentical( [8, 7, 5], knapasack.solve(20) );
        
        var knapasack = new Knapsack( [28, 10, 6, 5, 2] );
        this.areCollectionsIdentical( [28, 10, 2], knapasack.solve(40) );
        
        var knapasack = new Knapsack( [50, 10, 6, 5, 2] );
        this.areCollectionsIdentical( [10, 6], knapasack.solve(16) );
    }
    
    
    

    
}