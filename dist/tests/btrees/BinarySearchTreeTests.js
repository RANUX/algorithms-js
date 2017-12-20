"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsUnit = require("../../node_modules/ts-unit");
const TNode_1 = require("../../btrees/TNode");
const BinarySearchTree_1 = require("../../btrees/BinarySearchTree");
const ObjectHelpers_1 = require("../../helpers/ObjectHelpers");
/**
* BinarySearchTreeTests
*/
class BinarySearchTreeTests extends tsUnit.TestClass {
    setUp() {
        this.A = new TNode_1.default("A"); //          I
        this.H = new TNode_1.default("H"); //       D......L
        this.K = new TNode_1.default("K"); //     A...F   K..M
        this.P = new TNode_1.default("P"); //         H       P
        this.F = new TNode_1.default("F", null, this.H);
        this.M = new TNode_1.default("M", null, this.P);
        this.D = new TNode_1.default("D", this.A, this.F);
        this.L = new TNode_1.default("L", this.K, this.M);
        this.I = new TNode_1.default("I", this.D, this.L);
        this.root = this.I;
        this.tree = new BinarySearchTree_1.default();
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
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    }
    testSearch() {
        this.isTrue(ObjectHelpers_1.equal(this.A, this.tree.search(this.A.value)));
        this.isTrue(ObjectHelpers_1.equal(this.D, this.tree.search(this.D.value)));
        this.isTrue(ObjectHelpers_1.equal(this.F, this.tree.search(this.F.value)));
        this.isTrue(ObjectHelpers_1.equal(this.H, this.tree.search(this.H.value)));
        this.isTrue(ObjectHelpers_1.equal(this.I, this.tree.search(this.I.value)));
        this.isTrue(ObjectHelpers_1.equal(this.K, this.tree.search(this.K.value)));
        this.isTrue(ObjectHelpers_1.equal(this.L, this.tree.search(this.L.value)));
        this.isTrue(ObjectHelpers_1.equal(this.M, this.tree.search(this.M.value)));
        this.isTrue(ObjectHelpers_1.equal(this.P, this.tree.search(this.P.value)));
        this.isTrue(this.tree.search("UNKNOWN") == null);
    }
    testDeleteLeafNode() {
        var deleted = this.tree.delete(this.H.value);
        this.isTrue(ObjectHelpers_1.equal(deleted, this.H));
        this.F.larger = null;
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    }
    testDeleteTNodeWithOneChild() {
        var deleted = this.tree.delete(this.M.value);
        this.isTrue(deleted != null);
        this.isTrue(ObjectHelpers_1.equal(this.M, deleted));
        this.L.larger = this.P;
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    }
    testDeleteTNodeWithTwoChildren() {
        var deleted = this.tree.delete(this.I.value);
        this.isTrue(deleted != null);
        this.areIdentical(this.I.value, deleted.value);
        this.I.value = this.K.value;
        this.L.smaller = null;
        this.isTrue(ObjectHelpers_1.equal(this.root, this.tree.root));
    }
    testDeleteRootTNodeUntilTreeIsEmpty() {
        while (this.tree.root != null) {
            var key = this.tree.root.value;
            var deleted = this.tree.delete(key);
            this.isTrue(deleted != null);
            this.areIdentical(key, deleted.value);
        }
    }
}
exports.BinarySearchTreeTests = BinarySearchTreeTests;

//# sourceMappingURL=BinarySearchTreeTests.js.map
