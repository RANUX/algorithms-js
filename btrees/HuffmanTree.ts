import PriorityQueue  from '../queues/PriorityQueue';
import FrequencyTable from './FrequencyTable';
import TNode from './TNode';


export default class HuffmanTree<T> {

    public       root         : TNode<T>;
    public      descFreqQueue : PriorityQueue;
    private       frequencies : Object;
    
    constructor(frequencies : Object) {
        this.frequencies = frequencies;
    }
    
    build()
    {
        this.toDescendingFrequencyQueue();

        while( this.descFreqQueue.size() > 1 )
        {
             var lItem = this.descFreqQueue.dequeue();
             var rItem = this.descFreqQueue.dequeue();

             var item = { 
                'node'      : new TNode( null, lItem.node, rItem.node ),
                'frequency' : lItem.frequency + rItem.frequency
            };
             
             this.descFreqQueue.enqueue( item, (val,aItem) =>  item.frequency > aItem.frequency );
        }

        this.root = this.descFreqQueue.dequeue().node;
    }
    
    toDescendingFrequencyQueue()
    {
        this.descFreqQueue = new PriorityQueue();

        for( var key in this.frequencies )
        {
            var item = { 
                'node'  : new TNode(key),
                'frequency' : this.frequencies[key]
            };
            this.descFreqQueue.enqueue( item, (val,aItem) =>  item.frequency > aItem.frequency );
        }
        
    }
    

};
