import TNode from './TNode';
/**
 * A binary search tree without balancing.
 *
 */
export default class BinarySearchTree<T> {
    
    public       root : TNode<T>;
    private compareFn : any;
    

    constructor(compareFn=(a,b) => a < b ) {
        this.compareFn = compareFn;
    }
    /**
     * Insert a value in the tree.
     *
     * @param value The value to insert.
     * @return The inserted node.
     */
    insert( value : T ) : TNode<T>
    {
        var parent:TNode<T> = null;
        var node = this.root;
        var isSmaller = false;
        
        while ( node != null )
        {
            parent    = node;
            isSmaller = this.compareFn( value, node.value );
            node = isSmaller ? node.smaller : node.larger;
        }
        
        var inserted = new TNode(value);
        inserted.parent = parent;

        if (parent == null) {
            this.root = inserted;
        } 
        else if (isSmaller) {
            parent.smaller = inserted;
        } 
        else {
            parent.larger  = inserted;
        }

        return inserted;
        
    }
    
    /**
     * Searches for a value in the tree.
     *
     * @param value The value for which to search.
     * @return The node; or <code>null</code> if not found.
     */
    search( value : T ) : TNode<T>
    {
        var node = this.root;
        var isSmaller = false;
        
        while ( node != null && node.value != value)
        {
            isSmaller = this.compareFn( value, node.value );
            node = isSmaller ? node.smaller : node.larger;
        }
       
        return node;
    }
};
