var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tsUnit = require('../../node_modules/tsunit.external/tsUnit');
var TNode_1 = require('../../btrees/TNode');
var BinarySearchTree_1 = require('../../btrees/BinarySearchTree');
var ObjectHelpers_1 = require('../../helpers/ObjectHelpers');
/**
* BinarySearchTreeTests
*/
var BinarySearchTreeTests = (function (_super) {
    __extends(BinarySearchTreeTests, _super);
    function BinarySearchTreeTests() {
        _super.apply(this, arguments);
    }
    BinarySearchTreeTests.prototype.setUp = function () {
        this.A = new TNode_1.default("A");
        this.H = new TNode_1.default("H");
        this.K = new TNode_1.default("K");
        this.P = new TNode_1.default("P");
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
    };
    BinarySearchTreeTests.prototype.testInsert = function () {
        this.isTrue(ObjectHelpers_1.isEqual(this.root, this.tree.root));
    };
    BinarySearchTreeTests.prototype.testSearch = function () {
        this.isTrue(ObjectHelpers_1.isEqual(this.A, this.tree.search(this.A.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.D, this.tree.search(this.D.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.F, this.tree.search(this.F.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.H, this.tree.search(this.H.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.I, this.tree.search(this.I.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.K, this.tree.search(this.K.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.L, this.tree.search(this.L.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.M, this.tree.search(this.M.value)));
        this.isTrue(ObjectHelpers_1.isEqual(this.P, this.tree.search(this.P.value)));
        this.isTrue(this.tree.search("UNKNOWN") == null);
    };
    return BinarySearchTreeTests;
})(tsUnit.TestClass);
exports.BinarySearchTreeTests = BinarySearchTreeTests;

//# sourceMappingURL=BinarySearchTreeTests.js.map
