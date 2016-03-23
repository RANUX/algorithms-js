import PriorityQueue  from '../queues/PriorityQueue';

export default class FrequencyTable {
    
    frequencies : Object;
    text : string;
    
    constructor(text : string) {
        this.frequencies = {};
        this.text = text;
    }
    
    build()
    {
        for (var i = 0; i < this.text.length; i++) 
        {
            var char = this.text.charAt(i);
            
            if ( !isNaN( this.frequencies[ char ] ) )
                this.frequencies[ char ]++;
            else 
                this.frequencies[ char ] = 1;
        }
    }
    
    
    toString()
    {
        for( var key in this.frequencies )
        {
            console.log( key + ' : ' + this.frequencies[key] );
        }
    }
};
