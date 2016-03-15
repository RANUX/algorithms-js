/**
 * TreeNode
 */
export default class TreeNode<T> {
    public value : T;
    
    private smaller : TreeNode<T>;
    private larger  : TreeNode<T>;
    private parent  : TreeNode<T>;
    
    
    constructor(value:T, smaller:TreeNode<T>=null, larger:TreeNode<T>=null) {
        this.value = value;
        this.smaller = smaller;
        this.larger  = larger;
        
        if ( smaller )
            this.smaller.parent = this;
        
        if ( larger )
            this.larger.parent  = this;
    }
    
    /**
     * Obtains the node with the smallest value starting from this.
     *
     * @return The minimum.
     */
    min () : TreeNode<T>
    {
        var node:TreeNode<T> = this;
        
        while (node.smaller != null )
            node = node.smaller;
            
        return node;
    }
    
    /**
     * Obtains the node with the largest value starting from this.
     *
     * @return The maximum.
     */
    max () : TreeNode<T>
    {
        var node:TreeNode<T> = this;
        
        while (node.larger != null )
            node = node.larger;
            
        return node;
    }
    
    /**
     * Obtains the node with the next largest value starting from this.
     *
     * @return The successor; or <code>null</code>.
     */
    successor() : TreeNode<T>
    {
        if ( this.larger != null )
            return this.larger.min();
            
        var node:TreeNode<T> = this;
        
        while ( node.isLarger() )
            node = node.parent;

        return node.parent;
    }
    
    /**
     * Obtains the node with the next smallest value starting from this.
     *
     * @return The predecessor; or <code>null</code>.
     */
    predecessor() : TreeNode<T>
    {
        if ( this.smaller != null )
            return this.smaller.max();
            
        var node:TreeNode<T> = this;
        
        while ( node.isSmaller() )
            node = node.parent;

        return node.parent;
    }
    
    /**
     * Determines if this is the smaller child of its parent.
     *
     * @return <code>true</code> if this is the smaller child of it's parent; otherwise <code>false</code>.
     */
    isSmaller() : boolean
    {
        return this.parent != null && this == this.parent.smaller;
    }
    
    /**
     * Determines if this is the larger child of its parent.
     *
     * @return <code>true</code> if this is the larger child of it's parent; otherwise <code>false</code>.
     */
    isLarger() : boolean
    {
        return this.parent != null && this == this.parent.larger;
    }
    
    /**
     * Obtains the size of the tree starting from this.
     *
     * @return The number of nodes.
     */
    size() : number
    {
        return this._size(this);
    }
    
    private _size(node : TreeNode<T>) : number
    {
        if ( node == null )
            return 0;
            
        return 1 + this._size( node.larger ) + this._size( node.smaller );
    }
    
    /**
     * Recursively calculates the height of the tree starting from this node.
     *
     * @param node The node at which to start.
     * @return The longest path.
     */
    height() : number
    {
        return this._height( this );
    }
    
    
    private _height(node : TreeNode<T>) : number
    {
        if ( node == null )
            return 0;
            
        return 1 + Math.max( this._height( node.larger ), this._height( node.smaller ) );
    }
}