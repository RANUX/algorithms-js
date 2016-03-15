var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var TreeNode_1 = require('../../btrees/TreeNode');
/**
* TreeNodeTests
*/
var TreeNodeTests = (function (_super) {
    __extends(TreeNodeTests, _super);
    function TreeNodeTests() {
        _super.apply(this, arguments);
    }
    TreeNodeTests.prototype.setUp = function () {
        this.A = new TreeNode_1.default("A"); //          I
        this.H = new TreeNode_1.default("H"); //       D......L
        this.K = new TreeNode_1.default("K"); //     A...F   K..M
        this.P = new TreeNode_1.default("P"); //         H       P
        this.F = new TreeNode_1.default("F", null, this.H);
        this.M = new TreeNode_1.default("M", null, this.P);
        this.D = new TreeNode_1.default("D", this.A, this.F);
        this.L = new TreeNode_1.default("L", this.K, this.M);
        this.I = new TreeNode_1.default("I", this.D, this.L);
    };
    TreeNodeTests.prototype.testMinimum = function () {
        this.areIdentical(this.A, this.A.min());
        this.areIdentical(this.A, this.D.min());
        this.areIdentical(this.F, this.F.min());
        this.areIdentical(this.H, this.H.min());
        this.areIdentical(this.A, this.I.min());
        this.areIdentical(this.K, this.K.min());
        this.areIdentical(this.K, this.L.min());
        this.areIdentical(this.M, this.M.min());
        this.areIdentical(this.P, this.P.min());
    };
    TreeNodeTests.prototype.testMaximum = function () {
        this.areIdentical(this.A, this.A.max());
        this.areIdentical(this.H, this.D.max());
        this.areIdentical(this.H, this.F.max());
        this.areIdentical(this.H, this.H.max());
        this.areIdentical(this.P, this.I.max());
        this.areIdentical(this.K, this.K.max());
        this.areIdentical(this.P, this.L.max());
        this.areIdentical(this.P, this.M.max());
        this.areIdentical(this.P, this.P.max());
    };
    TreeNodeTests.prototype.testSuccessor = function () {
        this.areIdentical(this.D, this.A.successor());
        this.areIdentical(this.F, this.D.successor());
        this.areIdentical(this.H, this.F.successor());
        this.areIdentical(this.I, this.H.successor());
        this.areIdentical(this.K, this.I.successor());
        this.areIdentical(this.L, this.K.successor());
        this.areIdentical(this.M, this.L.successor());
        this.areIdentical(this.P, this.M.successor());
        this.isTrue(this.P.successor() == null);
    };
    TreeNodeTests.prototype.testPredecessor = function () {
        this.isTrue(this.A.predecessor() == null);
        this.areIdentical(this.A, this.D.predecessor());
        this.areIdentical(this.D, this.F.predecessor());
        this.areIdentical(this.F, this.H.predecessor());
        this.areIdentical(this.H, this.I.predecessor());
        this.areIdentical(this.I, this.K.predecessor());
        this.areIdentical(this.K, this.L.predecessor());
        this.areIdentical(this.L, this.M.predecessor());
        this.areIdentical(this.M, this.P.predecessor());
    };
    TreeNodeTests.prototype.testIsSmaller = function () {
        this.isTrue(this.A.isSmaller());
        this.isTrue(this.D.isSmaller());
        this.isFalse(this.F.isSmaller());
        this.isFalse(this.H.isSmaller());
        this.isFalse(this.I.isSmaller());
        this.isTrue(this.K.isSmaller());
        this.isFalse(this.L.isSmaller());
        this.isFalse(this.M.isSmaller());
        this.isFalse(this.P.isSmaller());
    };
    TreeNodeTests.prototype.testIsLarger = function () {
        this.isFalse(this.A.isLarger());
        this.isFalse(this.D.isLarger());
        this.isTrue(this.F.isLarger());
        this.isTrue(this.H.isLarger());
        this.isFalse(this.I.isLarger());
        this.isFalse(this.K.isLarger());
        this.isTrue(this.L.isLarger());
        this.isTrue(this.M.isLarger());
        this.isTrue(this.P.isLarger());
    };
    TreeNodeTests.prototype.testSize = function () {
        this.areIdentical(1, this.A.size());
        this.areIdentical(4, this.D.size());
        this.areIdentical(2, this.F.size());
        this.areIdentical(1, this.H.size());
        this.areIdentical(9, this.I.size());
        this.areIdentical(1, this.K.size());
        this.areIdentical(4, this.L.size());
        this.areIdentical(2, this.M.size());
        this.areIdentical(1, this.P.size());
    };
    TreeNodeTests.prototype.testHeight = function () {
        this.areNotIdentical(0, this.A.height());
        this.areNotIdentical(2, this.D.height());
        this.areNotIdentical(1, this.F.height());
        this.areNotIdentical(0, this.H.height());
        this.areNotIdentical(3, this.I.height());
        this.areNotIdentical(0, this.K.height());
        this.areNotIdentical(2, this.L.height());
        this.areNotIdentical(1, this.M.height());
        this.areNotIdentical(0, this.P.height());
    };
    TreeNodeTests.prototype.testEquals = function () {
        var a = new TreeNode_1.default("A");
        var h = new TreeNode_1.default("H");
        var k = new TreeNode_1.default("K");
        var p = new TreeNode_1.default("P");
        var f = new TreeNode_1.default("F", null, h);
        var m = new TreeNode_1.default("M", null, p);
        var d = new TreeNode_1.default("D", a, f);
        var l = new TreeNode_1.default("L", k, m);
        var i = new TreeNode_1.default("I", d, l);
        this.areNotIdentical(a, this.A);
        this.areNotIdentical(d, this.D);
        this.areNotIdentical(f, this.F);
        this.areNotIdentical(h, this.H);
        this.areNotIdentical(i, this.I);
        this.areNotIdentical(k, this.K);
        this.areNotIdentical(l, this.L);
        this.areNotIdentical(m, this.M);
        this.areNotIdentical(p, this.P);
        this.isFalse(this.I == null);
        this.isFalse(this.F == this.D);
    };
    return TreeNodeTests;
})(tsUnit.TestClass);
exports.TreeNodeTests = TreeNodeTests;

//# sourceMappingURL=TreeNodeTests.js.map