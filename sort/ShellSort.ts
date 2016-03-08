
import {ISort} from './ISort';

/**
 * ShellSort based on Knuth Gap Sequence
 * ShellSort analysis with sequences you can find here http://www.cs.princeton.edu/~rs/shell/paperF.pdf
 */
export default class ShellSort implements ISort {
    
    sort( a : any[],  compareFn = ( a, b ) => (a > b) ) : any[]
    {
        // default is Knuth Gap Sequence
        // You can change to other sequence like: return this.shellSortGonnetAndBaezaSequence( a, compareFn);
        return this.shellSort( a, compareFn, this.forwardKnuthSequence, this.reverseKnuthSequence );
        
    }
    
    shellSortGonnetAndBaezaSequence( a : any[],  compareFn = ( a, b ) => (a > b) ) : any[]
    {
        return this.shellSort( a, compareFn, this.forwardGonnetAndBaezaSequence, this.reverseGonnetAndBaezaSequence );
    }
    
    shellSort( a : any[],  compareFn, forwardSequence, reverseSequence ) : any[]
    {
        var out, temp, inn;
        var hFloat = forwardSequence( a.length );
        var h = Math.floor( hFloat );            // round if sequences is floating
        
        while ( h > 0 )
        {
            for ( out = h; out < a.length; out++) 
            {
                temp = a[out];
                inn = out;
                while (inn > h-1 && compareFn( a[inn-h], temp )) {
                    a[inn] = a[ inn-h ];
                    inn -= h;
                }
                a[inn] = temp;
            }
            
            hFloat = reverseSequence(hFloat);
            h = Math.floor( hFloat );   
        }
        
        return a;
    }
    
    forwardKnuthSequence( arrayLen :number )
    {
        var h = 1;
        var maxLen = Math.floor( arrayLen/3 );
                                    // Knuth Interval Gap Sequence
        while ( h <= maxLen )       // h = 3*h + 1 
            h += 3*h + 1;           // (1, 4, 13, 40, 121, ... )
                                    // when h = 1 this is only insertion sort
        
        return h;
    }
    
    reverseKnuthSequence(h :number) :number
    {
        return Math.floor( (h-1) / 3 ); // (..., 121, 40, 13, 4, 1 )
    }
    
    forwardGonnetAndBaezaSequence( arrayLen :number)
    {
        var h = 1;
        var maxLen = arrayLen / ( 11/5-1 );
                                    
        while ( h <= maxLen )       // h = 5*h-1 / 11
            h += (5*h-1) / 11;           // 
                                    
        return h;
    }
    
    reverseGonnetAndBaezaSequence( h :number ) :number
    {
        return (11*h + 1)/16;
    }
};
