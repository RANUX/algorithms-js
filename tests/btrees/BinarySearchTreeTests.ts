import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import TNode from '../../btrees/TNode';
import BinarySearchTree from '../../btrees/BinarySearchTree';
import { isEqual } from '../../helpers/ObjectHelpers';
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
        this.A = new TNode("A");
        this.H = new TNode("H");
        this.K = new TNode("K");
        this.P = new TNode("P");
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
        this.isTrue(isEqual( this.root, this.tree.root));
        
    }

    testSearch() {
        this.isTrue( isEqual( this.A, this.tree.search(this.A.value) ));
        this.isTrue( isEqual( this.D, this.tree.search(this.D.value) ));
        this.isTrue( isEqual( this.F, this.tree.search(this.F.value) ));
        this.isTrue( isEqual( this.H, this.tree.search(this.H.value) ));
        this.isTrue( isEqual( this.I, this.tree.search(this.I.value) ));
        this.isTrue( isEqual( this.K, this.tree.search(this.K.value) ));
        this.isTrue( isEqual( this.L, this.tree.search(this.L.value) ));
        this.isTrue( isEqual( this.M, this.tree.search(this.M.value) ));
        this.isTrue( isEqual( this.P, this.tree.search(this.P.value) ));

        this.isTrue(this.tree.search("UNKNOWN") == null);
    }

    // testDeleteLeafTNode() {
    //     TNode deleted = this.tree.delete(H.getValue());
    //     assertNotNull(deleted);
    //     this.areIdentical(H.getValue(), deleted.getValue());

    //     F.setLarger(null);
    //     this.areIdentical(Root, this.tree.getRoot());
    // }

    // testDeleteTNodeWithOneChild() {
    //     TNode deleted = this.tree.delete(M.getValue());
    //     assertNotNull(deleted);
    //     this.areIdentical(M.getValue(), deleted.getValue());

    //     L.setLarger(P);
    //     this.areIdentical(Root, this.tree.getRoot());
    // }

    // testDeleteTNodeWithTwoChildren() {
    //     TNode deleted = this.tree.delete(I.getValue());
    //     assertNotNull(deleted);
    //     this.areIdentical(I.getValue(), deleted.getValue());

    //     I.setValue(K.getValue());
    //     L.setSmaller(null);
    //     this.areIdentical(Root, this.tree.getRoot());
    // }

    // testDeleteRootTNodeUntilTreeIsEmpty() {
    //     while (this.tree.getRoot() != null) {
    //         Object key = this.tree.getRoot().getValue();
    //         TNode deleted = this.tree.delete(key);
    //         assertNotNull(deleted);
    //         this.areIdentical(key, deleted.getValue());
    //     }
    // }
}