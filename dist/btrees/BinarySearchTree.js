var TNode_1 = require('./TNode');
/**
 * A binary search tree without balancing.
 *
 */
var BinarySearchTree = (function () {
    function BinarySearchTree(compareFn) {
        if (compareFn === void 0) { compareFn = function (a, b) { return a < b; }; }
        this.compareFn = compareFn;
    }
    /**
     * Insert a value in the tree.
     *
     * @param value The value to insert.
     * @return The inserted node.
     */
    BinarySearchTree.prototype.insert = function (value) {
        var parent = null;
        var node = this.root;
        var isSmaller = false;
        while (node != null) {
            parent = node;
            isSmaller = this.compareFn(value, node.value);
            node = isSmaller ? node.smaller : node.larger;
        }
        var inserted = new TNode_1.default(value);
        inserted.parent = parent;
        if (parent == null) {
            this.root = inserted;
        }
        else if (isSmaller) {
            parent.smaller = inserted;
        }
        else {
            parent.larger = inserted;
        }
        return inserted;
    };
    /**
     * Searches for a value in the tree.
     *
     * @param value The value for which to search.
     * @return The node; or <code>null</code> if not found.
     */
    BinarySearchTree.prototype.search = function (value) {
        var node = this.root;
        var isSmaller = false;
        while (node != null && node.value != value) {
            isSmaller = this.compareFn(value, node.value);
            node = isSmaller ? node.smaller : node.larger;
        }
        return node;
    };
    return BinarySearchTree;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BinarySearchTree;
;

//# sourceMappingURL=BinarySearchTree.js.map
