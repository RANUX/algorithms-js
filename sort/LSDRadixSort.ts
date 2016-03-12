import Mathf from '../helpers/Mathf';

export default class LSDRadixSort {
    
    sort( array : number[] ) : any[]
    {
        var arr  = array;
        var counter = 0;
        var maxNumOfDigits = 1;

        while ( counter <= maxNumOfDigits )
        {
            var groups = [];
            
            for (var i = 0; i < arr.length; i++) {
                var N = arr[ i ];
                
                // find max number of digits
                if ( !counter )
                    maxNumOfDigits = Math.max( Mathf.numOfDigits( N ), maxNumOfDigits );
                
                var digit = Math.floor( N / (Math.pow( 10, counter )) % 10); 
                
                if ( groups[ digit ] )
                    groups[ digit ].push( N );
                else
                    groups[ digit ] = [N];
            }
            
            arr = [];
            for(var i = 0; i < groups.length; i++ )                 // remove empty elements and combine to array
            {
                var num;
                while ( groups[i] && (num = groups[i].shift()) )
                    arr.push( num );
            }
            counter++;

        }
        return arr;
    }
};
