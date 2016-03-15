/**
 * TreeNode
 */
var TreeNode = (function () {
    function TreeNode(value, smaller, larger) {
        if (smaller === void 0) { smaller = null; }
        if (larger === void 0) { larger = null; }
        this.value = value;
        this.smaller = smaller;
        this.larger = larger;
        if (smaller)
            this.smaller.parent = this;
        if (larger)
            this.larger.parent = this;
    }
    /**
     * Obtains the node with the smallest value starting from this.
     *
     * @return The minimum.
     */
    TreeNode.prototype.min = function () {
        var node = this;
        while (node.smaller != null)
            node = node.smaller;
        return node;
    };
    /**
     * Obtains the node with the largest value starting from this.
     *
     * @return The maximum.
     */
    TreeNode.prototype.max = function () {
        var node = this;
        while (node.larger != null)
            node = node.larger;
        return node;
    };
    /**
     * Obtains the node with the next largest value starting from this.
     *
     * @return The successor; or <code>null</code>.
     */
    TreeNode.prototype.successor = function () {
        if (this.larger != null)
            return this.larger.min();
        var node = this;
        while (node.isLarger())
            node = node.parent;
        return node.parent;
    };
    /**
     * Obtains the node with the next smallest value starting from this.
     *
     * @return The predecessor; or <code>null</code>.
     */
    TreeNode.prototype.predecessor = function () {
        if (this.smaller != null)
            return this.smaller.max();
        var node = this;
        while (node.isSmaller())
            node = node.parent;
        return node.parent;
    };
    /**
     * Determines if this is the smaller child of its parent.
     *
     * @return <code>true</code> if this is the smaller child of it's parent; otherwise <code>false</code>.
     */
    TreeNode.prototype.isSmaller = function () {
        return this.parent != null && this == this.parent.smaller;
    };
    /**
     * Determines if this is the larger child of its parent.
     *
     * @return <code>true</code> if this is the larger child of it's parent; otherwise <code>false</code>.
     */
    TreeNode.prototype.isLarger = function () {
        return this.parent != null && this == this.parent.larger;
    };
    /**
     * Obtains the size of the tree starting from this.
     *
     * @return The number of nodes.
     */
    TreeNode.prototype.size = function () {
        return this._size(this);
    };
    TreeNode.prototype._size = function (node) {
        if (node == null)
            return 0;
        return 1 + this._size(node.larger) + this._size(node.smaller);
    };
    /**
     * Recursively calculates the height of the tree starting from this node.
     *
     * @param node The node at which to start.
     * @return The longest path.
     */
    TreeNode.prototype.height = function () {
        return this._height(this);
    };
    TreeNode.prototype._height = function (node) {
        if (node == null)
            return 0;
        return 1 + Math.max(this._height(node.larger), this._height(node.smaller));
    };
    return TreeNode;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TreeNode;

//# sourceMappingURL=TreeNode.js.map
