import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import TNode from '../../btrees/TNode';
import { equal } from '../../helpers/ObjectHelpers';

/**
* TreeNodeTests
*/
export class TreeNodeTests extends tsUnit.TestClass {


    private A : TNode<string>;
    private D : TNode<string>;
    private F : TNode<string>;
    private H : TNode<string>;
    private I : TNode<string>;
    private K : TNode<string>;
    private L : TNode<string>;
    private M : TNode<string>;
    private P : TNode<string>;
    
    setUp() {
        this.A = new TNode<string>("A");                     //          I
        this.H = new TNode<string>("H");                     //       D......L
        this.K = new TNode<string>("K");                     //     A...F   K..M
        this.P = new TNode<string>("P");                     //         H       P
        this.F = new TNode<string>("F", null, this.H);
        this.M = new TNode<string>("M", null, this.P);
        this.D = new TNode<string>("D", this.A, this.F);
        this.L = new TNode<string>("L", this.K, this.M);
        this.I = new TNode<string>("I", this.D, this.L);
    }

    testMinimum() {
         
        this.areIdentical(this.A, this.A.min());
        this.areIdentical(this.A, this.D.min());
        this.areIdentical(this.F, this.F.min());
        this.areIdentical(this.H, this.H.min());
        this.areIdentical(this.A, this.I.min());
        this.areIdentical(this.K, this.K.min());
        this.areIdentical(this.K, this.L.min());
        this.areIdentical(this.M, this.M.min());
        this.areIdentical(this.P, this.P.min());
    }

    testMaximum() {
        this.areIdentical(this.A, this.A.max());
        this.areIdentical(this.H, this.D.max());
        this.areIdentical(this.H, this.F.max());
        this.areIdentical(this.H, this.H.max());
        this.areIdentical(this.P, this.I.max());
        this.areIdentical(this.K, this.K.max());
        this.areIdentical(this.P, this.L.max());
        this.areIdentical(this.P, this.M.max());
        this.areIdentical(this.P, this.P.max());
    }

    testSuccessor() {
        this.areIdentical(this.D, this.A.successor());
        this.areIdentical(this.F, this.D.successor());
        this.areIdentical(this.H, this.F.successor());
        this.areIdentical(this.I, this.H.successor());
        this.areIdentical(this.K, this.I.successor());
        this.areIdentical(this.L, this.K.successor());
        this.areIdentical(this.M, this.L.successor());
        this.areIdentical(this.P, this.M.successor());
        this.isTrue( this.P.successor() == null );
    }

    testPredecessor() {
        this.isTrue( this.A.predecessor() == null );
        this.areIdentical(this.A, this.D.predecessor());
        this.areIdentical(this.D, this.F.predecessor());
        this.areIdentical(this.F, this.H.predecessor());
        this.areIdentical(this.H, this.I.predecessor());
        this.areIdentical(this.I, this.K.predecessor());
        this.areIdentical(this.K, this.L.predecessor());
        this.areIdentical(this.L, this.M.predecessor());
        this.areIdentical(this.M, this.P.predecessor());
    }

    testIsSmaller() {
        this.isTrue(this.A.isSmaller());
        this.isTrue(this.D.isSmaller());
        this.isFalse(this.F.isSmaller());
        this.isFalse(this.H.isSmaller());
        this.isFalse(this.I.isSmaller());
        this.isTrue(this.K.isSmaller());
        this.isFalse(this.L.isSmaller());
        this.isFalse(this.M.isSmaller());
        this.isFalse(this.P.isSmaller());
    }

    testIsLarger() {
        this.isFalse(this.A.isLarger());
        this.isFalse(this.D.isLarger());
        this.isTrue(this.F.isLarger());
        this.isTrue(this.H.isLarger());
        this.isFalse(this.I.isLarger());
        this.isFalse(this.K.isLarger());
        this.isTrue(this.L.isLarger());
        this.isTrue(this.M.isLarger());
        this.isTrue(this.P.isLarger());
    }

    testSize() {
        this.areIdentical(1, this.A.size());
        this.areIdentical(4, this.D.size());
        this.areIdentical(2, this.F.size());
        this.areIdentical(1, this.H.size());
        this.areIdentical(9, this.I.size());
        this.areIdentical(1, this.K.size());
        this.areIdentical(4, this.L.size());
        this.areIdentical(2, this.M.size());
        this.areIdentical(1, this.P.size());
    }

    testHeight() {
        this.areNotIdentical(0, this.A.height());
        this.areNotIdentical(2, this.D.height());
        this.areNotIdentical(1, this.F.height());
        this.areNotIdentical(0, this.H.height());
        this.areNotIdentical(3, this.I.height());
        this.areNotIdentical(0, this.K.height());
        this.areNotIdentical(2, this.L.height());
        this.areNotIdentical(1, this.M.height());
        this.areNotIdentical(0, this.P.height());
    }

    testEquals() {
        var a = new TNode("A");
        var h = new TNode("H");
        var k = new TNode("K");
        var p = new TNode("P");
        var f = new TNode("F", null, h);
        var m = new TNode("M", null, p);
        var d = new TNode("D", a, f);
        var l = new TNode("L", k, m);
        var i = new TNode("I", d, l);

        this.isTrue(equal( a, this.A ));
        this.isTrue(equal( d, this.D ));
        this.isTrue(equal( f, this.F ));
        this.isTrue(equal( h, this.H ));
        this.isTrue(equal( i, this.I ));
        this.isTrue(equal( k, this.K ));
        this.isTrue(equal( l, this.L ));
        this.isTrue(equal( m, this.M ));
        this.isTrue(equal( p, this.P ));

        this.isFalse( equal( this.I, null ));
        this.isFalse( equal( this.F, this.D ));
    }
}