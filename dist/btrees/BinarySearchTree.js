"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TNode_1 = require("./TNode");
/**
 * A binary search tree without balancing.
 *
 */
class BinarySearchTree {
    constructor(compareFn = (a, b) => a < b) {
        this.compareFn = compareFn;
    }
    /**
     * Insert a value in the tree.
     *
     * @param value The value to insert.
     * @return The inserted node.
     */
    insert(value) {
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
    }
    /**
     * Searches for a value in the tree.
     *
     * @param value The value for which to search.
     * @return The node; or <code>null</code> if not found.
     */
    search(value) {
        var node = this.root;
        var isSmaller = false;
        while (node != null && node.value != value) {
            isSmaller = this.compareFn(value, node.value);
            node = isSmaller ? node.smaller : node.larger;
        }
        return node;
    }
    /**
     * Deletes a value from the tree.
     *
     * @param value The value to delete.
     * @return The deleted node; or <code>null</code> if not found.
     */
    delete(value) {
        var node = this.search(value);
        if (node == null)
            return null;
        // decide which node to actually remove
        var current = (node.smaller != null) && (node.larger != null) ? node.successor() : node;
        console.assert(current != null, "deleted node can't be null");
        // find replacement
        var replacement = (current.smaller != null) ? current.smaller : current.larger;
        //  make childs parent the same as that of the current node
        if (replacement != null) {
            replacement.parent = current.parent;
        }
        if (current == this.root) {
            this.root = null; // tree is empty
        }
        else if (current.isSmaller()) {
            current.parent.smaller = replacement; // if replacement == null there is no children, simply delete it
        }
        else {
            current.parent.larger = replacement;
        }
        // swap the values when current is node.successor
        if (current != node) {
            var currentValue = node.value;
            node.value = current.value;
            current.value = currentValue;
        }
        return current;
    }
}
exports.default = BinarySearchTree;
;

//# sourceMappingURL=BinarySearchTree.js.map
