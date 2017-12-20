import * as tsUnit from '../../node_modules/ts-unit';
import Mathf from '../../helpers/Mathf'
/**
* MathfTests
*/
export class MathfTests extends tsUnit.TestClass {

    setUp() {
        
    }

    testPowEven() {
        this.areIdentical( 1, Mathf.pow(2, 0));
        this.areIdentical( 2, Mathf.pow(2, 1));
        this.areIdentical( 4, Mathf.pow(2, 2));
        this.areIdentical( 8, Mathf.pow(2, 3));
        this.areIdentical( 16, Mathf.pow(2, 4));
        this.areIdentical( 32, Mathf.pow(2, 5));
        this.areIdentical( 64, Mathf.pow(2, 6));
        this.areIdentical( 128, Mathf.pow(2, 7));
        
        this.areIdentical( 216, Mathf.pow(6, 3));
    }
    
    testPowOdd() {
        this.areIdentical( 1, Mathf.pow(3, 0));
        this.areIdentical( 3, Mathf.pow(3, 1));
        this.areIdentical( 9, Mathf.pow(3, 2));
        this.areIdentical( 27, Mathf.pow(3, 3));
        this.areIdentical( 81, Mathf.pow(3, 4));
        this.areIdentical( 243, Mathf.pow(3, 5));
        this.areIdentical( 729, Mathf.pow(3, 6));
        this.areIdentical( 2187, Mathf.pow(3, 7));
        
        this.areIdentical( 3125, Mathf.pow(5, 5));
        
    }
    
}