import * as isort from "./ISort"
import * as h from "../helpers/ArrayHelpers";
/**
 * MergeSortSimple unoptimized version of Merge Sort Algorithm
 */
export default class MergeSortSimple implements isort.ISort {
    
    sort( array :any[], compareFn ) :any[]
    {
        return this.mergeSort( array, 0, array.length-1, compareFn);
    }
    
    mergeSort( array :any[], startIndex :number, endIndex :number,  compareFn :any) :any[]
    {

        if ( startIndex > endIndex ) return [];
        else if ( startIndex == endIndex ) {
            var result = [];
            result.push( array[ startIndex ] );
            return result;
        }
        var splitIndex =  startIndex + Math.floor( (endIndex - startIndex) / 2 );
        
        var left = this.mergeSort( array, startIndex, splitIndex, compareFn);
        var right = this.mergeSort( array, splitIndex+1, endIndex, compareFn);
        
        return this.merge(left, right, compareFn);
        
    }
    
    merge( left : any[], right : any[], compareFn = (a,b) => {return a < b } ) : any[]
    {
        
        var result = []; // <- this is ineffective for memory usage, but algorithm much simplier

        var l = h.makeIterator(left);
        var r = h.makeIterator(right);
 
        while ( !l.done() || !r.done() ) 
        {
            if ( l.done() ) {                // left list is empty, but right contains values
                result.push( r.current() );
                r.next();
            }  
            else if ( r.done() ) {           // right list is empty, but left contains values
                result.push( l.current() );
                l.next();
            }
            else if ( compareFn( l.current(), r.current() )) {
                result.push( l.current() );
                l.next();
            } 
            else {
                result.push( r.current() );
                r.next();
            }
        }
        return result;
    }
    
    
}