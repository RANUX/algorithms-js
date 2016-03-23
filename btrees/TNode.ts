/**
 * TreeNode
 */
export default class TNode<T> {
    public value : T;
    
    public  smaller : TNode<T>;
    public  larger  : TNode<T>;
    public  parent  : TNode<T>;
    
    
    constructor(value:T, smaller:TNode<T>=null, larger:TNode<T>=null) {
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
    min () : TNode<T>
    {
        var node:TNode<T> = this;
        
        while (node.smaller != null )
            node = node.smaller;
            
        return node;
    }
    
    /**
     * Obtains the node with the largest value starting from this.
     *
     * @return The maximum.
     */
    max () : TNode<T>
    {
        var node:TNode<T> = this;
        
        while (node.larger != null )
            node = node.larger;
            
        return node;
    }
    
    /**
     * Obtains the node with the next largest value starting from this.
     *
     * @return The successor; or <code>null</code>.
     */
    successor() : TNode<T>
    {
        if ( this.larger != null )
            return this.larger.min();
            
        var node:TNode<T> = this;
        
        while ( node.isLarger() )
            node = node.parent;

        return node.parent;
    }
    
    /**
     * Obtains the node with the next smallest value starting from this.
     *
     * @return The predecessor; or <code>null</code>.
     */
    predecessor() : TNode<T>
    {
        if ( this.smaller != null )
            return this.smaller.max();
            
        var node:TNode<T> = this;
        
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
    
    private _size(node : TNode<T>) : number
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
    
    
    private _height(node : TNode<T>) : number
    {
        if ( node == null )
            return 0;
            
        return 1 + Math.max( this._height( node.larger ), this._height( node.smaller ) );
    }
    
    equals( other : TNode<T>) : boolean
    {
        //console.log('isEqual( ' +this.value + ' ' + other.value + ') ' + (this.value === other.value));
        return other && this.value === other.value && this.equalsSmaller(other.smaller) && this.equalsLarger(other.larger);
    }
    
    /**
     * Recursively determines if the smaller node is equal to another.
     *
     * @param other The othe node with which to compare.
     * @return <code>true</code> if equal; otherwise <code>false</code>.
     */
    equalsSmaller(other : TNode<T>) : boolean
    {
        return this.smaller === null && other === null || this.smaller !== null && this.smaller.equals(other);
    }

    /**
     * Recursively determines if the larger node is equal to another.
     *
     * @param other The othe node with which to compare.
     * @return <code>true</code> if equal; otherwise <code>false</code>.
     */
    equalsLarger(other : TNode<T>) : boolean
    {
        return this.larger === null && other === null || this.larger !== null && this.larger.equals(other);
    }
        
    traverseInOrder(fn)
    {
        this.traverseInOrderAny(this, fn);
    }
    
    traverseInOrderAny(node:TNode<T>, fn) : any
    {
        if ( node != null )
        {
            this.traverseInOrderAny( node.smaller, fn );
            fn( node );
            this.traverseInOrderAny( node.larger, fn );
        }
    }
    
    public dump()
    {
        var globalStack = [];
        globalStack.push(this);
        var nBlanks = 32;
        var isRowEmpty = false;
        console.log("......................................................................");
        
        while(isRowEmpty==false)
        {
            var localStack = [];
            var output = '';
            
            isRowEmpty = true;

            for(var j=0; j<nBlanks; j++)
                output += ' ';

            while(globalStack.length > 0)
            {
                var temp:TNode<T> = globalStack.pop();
                
                if(temp != null)
                {
                    output += temp.value;
                    localStack.push(temp.smaller);
                    localStack.push(temp.larger);

                    if(temp.smaller != null || temp.larger != null)
                        isRowEmpty = false;
                }
                else
                {
                    output += "--";
                    localStack.push(null);
                    localStack.push(null);
                }
                for(var j=0; j< nBlanks*2-2; j++)
                    output += ' ';
            }  // end while globalStack not empty
            console.log(output);
            nBlanks /= 2;
            
            while(localStack.length > 0)
                globalStack.push( localStack.pop() );
            }  // end while isRowEmpty is false
        console.log("......................................................................");
    }
     
}