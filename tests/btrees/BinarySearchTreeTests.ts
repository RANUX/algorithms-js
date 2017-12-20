import * as tsUnit from '../../node_modules/ts-unit';
import TNode from '../../btrees/TNode';
import BinarySearchTree from '../../btrees/BinarySearchTree';
import { equal } from '../../helpers/ObjectHelpers';
/**
* BinarySearchTreeTests
*/
export class BinarySearchTreeTests extends tsUnit.TestClass {

    private A : TNode<string>;
    private D : TNode<string>;
    private F : TNode<string>;
    private H : TNode<string>;
    private I : TNode<string>;
    private K : TNode<string>;
    private L : TNode<string>;
    private M : TNode<string>;
    private P : TNode<string>;
    private root : TNode<string>;
    private tree : BinarySearchTree<string>;



    setUp() {
        this.A = new TNode("A");                        //          I
        this.H = new TNode("H");                        //       D......L
        this.K = new TNode("K");                        //     A...F   K..M
        this.P = new TNode("P");                        //         H       P
        this.F = new TNode("F", null, this.H);
        this.M = new TNode("M", null, this.P);
        this.D = new TNode("D", this.A, this.F);
        this.L = new TNode("L", this.K, this.M);
        this.I = new TNode("I", this.D, this.L);
        this.root = this.I;

        this.tree = new BinarySearchTree<string>();
        this.tree.insert(this.I.value);
        this.tree.insert(this.D.value);
        this.tree.insert(this.L.value);
        this.tree.insert(this.A.value);
        this.tree.insert(this.F.value);
        this.tree.insert(this.K.value);
        this.tree.insert(this.M.value);
        this.tree.insert(this.H.value);
        this.tree.insert(this.P.value);
    }


    testInsert() {
        this.isTrue(equal( this.root, this.tree.root));
    }

    testSearch() {
        this.isTrue( equal( this.A, this.tree.search(this.A.value) ));
        this.isTrue( equal( this.D, this.tree.search(this.D.value) ));
        this.isTrue( equal( this.F, this.tree.search(this.F.value) ));
        this.isTrue( equal( this.H, this.tree.search(this.H.value) ));
        this.isTrue( equal( this.I, this.tree.search(this.I.value) ));
        this.isTrue( equal( this.K, this.tree.search(this.K.value) ));
        this.isTrue( equal( this.L, this.tree.search(this.L.value) ));
        this.isTrue( equal( this.M, this.tree.search(this.M.value) ));
        this.isTrue( equal( this.P, this.tree.search(this.P.value) ));

        this.isTrue(this.tree.search("UNKNOWN") == null);
    }

    testDeleteLeafNode() {
        var deleted = this.tree.delete(this.H.value);
        this.isTrue( equal( deleted, this.H ));
        
        this.F.larger = null;
        this.isTrue( equal( this.root, this.tree.root) );
    }

    testDeleteTNodeWithOneChild() {
        var deleted = this.tree.delete(this.M.value);
        this.isTrue( deleted != null );
        
        this.isTrue( equal( this.M, deleted ));

        this.L.larger = this.P;
        this.isTrue( equal( this.root, this.tree.root) );
    }

    testDeleteTNodeWithTwoChildren() {
        var deleted = this.tree.delete(this.I.value);
        this.isTrue( deleted != null );
        
        this.areIdentical( this.I.value, deleted.value);
        
        this.I.value = this.K.value;
        this.L.smaller = null;
        this.isTrue( equal( this.root, this.tree.root) );
    }

    testDeleteRootTNodeUntilTreeIsEmpty() {
        while (this.tree.root != null) {
            var key     = this.tree.root.value;
            var deleted = this.tree.delete(key);
            
            this.isTrue( deleted != null );
            this.areIdentical(key, deleted.value);
        }
    }
}