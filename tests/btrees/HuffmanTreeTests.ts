import * as tsUnit from '../../node_modules/tsunit.external/tsUnit';
import { equal } from '../../helpers/ObjectHelpers';

import FrequencyTable from '../../btrees/FrequencyTable';
import HuffmanTree    from '../../btrees/HuffmanTree';
import TNode          from '../../btrees/TNode';


/**
* HuffmanTreeTests
*/
export class HuffmanTreeTests extends tsUnit.TestClass {
    
    private B_00    : TNode<string>;
    private O_101   : TNode<string>;
    private SP_010 : TNode<string>;
    
    private E_11    : TNode<string>;
    private P_011   : TNode<string>;
    private R_1001 : TNode<string>;
    private EXCL_1000    : TNode<string>;
    
    private root : TNode<string>;
    private empty0    : TNode<string>;
    private empty1    : TNode<string>;
    private empty01   : TNode<string>;
    private empty10   : TNode<string>;
    private empty100  : TNode<string>;
    
    ftable : FrequencyTable;
    tree   : HuffmanTree<string>;
    str    : string;
    
    setUp()
    {
        this.str = "beep boop beer!";
        
        this.SP_010     = new TNode(' ');
        this.P_011      = new TNode('p');
        this.empty01    = new TNode( null, this.SP_010, this.P_011 );
        
        this.B_00       = new TNode( 'b' );
        this.empty0     = new TNode( null, this.B_00, this.empty01 );
        
        this.EXCL_1000     = new TNode( '!' );
        this.R_1001  = new TNode( 'r' );
        this.empty100   = new TNode( null, this.EXCL_1000, this.R_1001 );
        
        this.O_101      = new TNode( 'o' );
        this.empty10    = new TNode( null, this.empty100, this.O_101 );
        
        this.E_11       = new TNode( 'e');
        this.empty1     = new TNode( null, this.empty10, this.E_11 );
        
        this.root  = new TNode( null, this.empty0, this.empty1 );
        
        
        this.tree = new HuffmanTree<string>( this.str );
    }

    buildTreeTest()
    {
        this.tree.build();
        this.isTrue( equal( this.root, this.tree.root ));
        
    }
    
        
    testSortDescendingByFrequency()
    {
        var expTable = {
            '!' : 1,
            'r' : 1,
            'o' : 2,
            ' ' : 2,
            'p' : 2,
            'b' : 3,
            'e' : 4,
        };
        this.tree.toDescendingFrequencyQueue();
        
        for( var key in expTable )
        {
            this.isTrue( equal( { 'node' : new TNode(key), 'frequency' : expTable[ key ] }, this.tree.descFreqQueue.dequeue() ));
        }
       
    }
    
    testDecode()
    {
        this.tree.build();
        console.log(this.tree.decode());
    }
}