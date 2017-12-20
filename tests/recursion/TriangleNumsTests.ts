import * as tsUnit from '../../node_modules/ts-unit';
import TriangleNums from '../../recursion/TriangleNums';
/**
* TriangleNumsTests
*/
export class TriangleNumsTests extends tsUnit.TestClass {
    
    tn : TriangleNums;
    
    setUp() {
        this.tn = new TriangleNums();
    }

    testTriangleIterativ() {
        
        this.areIdentical(1, this.tn.triangleIterativ(1));
        this.areIdentical(3, this.tn.triangleIterativ(2));
        this.areIdentical(6, this.tn.triangleIterativ(3));
        this.areIdentical(10, this.tn.triangleIterativ(4));
        this.areIdentical(15, this.tn.triangleIterativ(5));
    }
    
    testTriangleRecursive() {
        this.areIdentical(1, this.tn.triangleRecursive(1));
        this.areIdentical(3, this.tn.triangleRecursive(2));
        this.areIdentical(6, this.tn.triangleRecursive(3));
        this.areIdentical(10, this.tn.triangleRecursive(4));
        this.areIdentical(15, this.tn.triangleRecursive(5));
    }
    

}