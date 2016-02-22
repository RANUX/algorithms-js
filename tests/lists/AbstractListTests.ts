import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import * as lists  from "../../lists/IList";

export abstract class AbstractListTestsTests extends tsUnit.TestClass {
    
    data       : any[] = [1, 2, 3, 4, 1, 9, 5, 7, 10];
    list       : lists.IList;
    
    protected abstract createList() : lists.IList;
    
    setUp() {
        this.list = this.createList();
    }
    
    testInsertIntoEmptyList() {
        this.areIdentical(0, this.list.size());
        this.isTrue(this.list.isEmpty());

        this.list.insert(0, this.data[0]);

        this.areIdentical(1, this.list.size());
        this.isFalse(this.list.isEmpty());
        this.areIdentical(this.data[0], this.list.get(0));
        
    }
    
    testInsertBetweenElements() {
        this.list.insert(0, this.data[0]);
        this.list.insert(1, this.data[1]);
        this.list.insert(1, this.data[2]);
        
        this.areIdentical(3, this.list.size());

        this.areIdentical(this.data[0], this.list.get(0));
        this.areIdentical(this.data[2], this.list.get(1));
        this.areIdentical(this.data[1], this.list.get(2));
    }
    
    testInsertBeforeFirstElement() {
        this.list.insert(0, this.data[0]);
        this.list.insert(0, this.data[1]);

        this.areIdentical(2, this.list.size());
        this.areIdentical(this.data[1], this.list.get(0));
        this.areIdentical(this.data[0], this.list.get(1));
        
    }
    
    testShiftAndUnshiftElement() {
        
        this.list.insert(0, this.data[0]);
        
        this.areIdentical( 2, this.list.unshift( this.data[2]) );
        this.areIdentical(this.data[2], this.list.shift());
        
        this.areIdentical(1, this.list.size());
    }
    
    testInsertAfterLastElement() {
        this.list.insert(0, this.data[0]);
        this.list.insert(1, this.data[1]);

        this.areIdentical(2, this.list.size());
        this.areIdentical(this.data[0], this.list.get(0));
        this.areIdentical(this.data[1], this.list.get(1));
        
    }
    
    testPushPopElement() {
        
        this.list.insert(0, this.data[0]);
        
        this.areIdentical( 2, this.list.push( this.data[1]) );
        this.areIdentical(this.data[1], this.list.pop());
        
        this.areIdentical(1, this.list.size());
        this.areIdentical(this.data[0], this.list.pop());
        
        this.isTrue(this.list.isEmpty());
    }
    /* TODO: check this out
    testInsertOutOfBounds() {
        
        try {
            this.list.insert(-1, this.data[0]);
            this.fail("Shoud thrown exception")
        } catch (RangeError) {
            // expected
        }

        try {
            this.list.insert(1, this.data[1]);
            this.fail("Shoud thrown exception")
        } catch (RangeError) {
            // expected
        }
    }*/
    
    testDeleteOnlyElement() {
        this.list.push(this.data[0]);

        this.areIdentical(1, this.list.size());
        this.areIdentical(this.data[0], this.list.get(0));

        this.areIdentical(this.data[0], this.list.delete(0));

        this.isTrue( this.list.isEmpty());
    }
    
    testPushPopDelInsertElements() {
        
        var i = 0;
        for (i = 0; i < 2; i++) {
            this.list.push(this.data[i]);
        }
        
        this.list.insert(1, this.data[i]);
        
        this.areIdentical(3, this.list.size());
        this.areIdentical(this.data[i], this.list.delete(1));
        this.areIdentical(2, this.list.size());
        
        i--;

        while( i >= 0 ) {
            this.areIdentical(this.data[i], this.list.pop());
            i--;
        }

    }
    
    testClear() {
        this.list.push(this.data[0]);
        this.list.push(this.data[1]);
        this.list.push(this.data[2]);

        this.isFalse(this.list.isEmpty());

        this.list.clear();

        this.isTrue(this.list.isEmpty());
        this.isTrue(this.list.size() == 0);
    }
    
}