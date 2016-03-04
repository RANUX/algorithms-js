import * as isort from "./ISort"
import * as h from "../arrays/ArrayHelpers";
/**
 * MergeSort
 */
export default class MergeSort implements isort.ISort {
    
    sort( list :any[], compareFn ) :any[]
    {
        return this.mergeSort( list, 0, list.length-1, compareFn);
    }
    
    mergeSort( list :any[], startIndex :number, endIndex :number,  compareFn :any) :any[]
    {

        if ( startIndex == endIndex ) {
            var result = [];
            result.push( list[ startIndex ] );
            return result;
        }
        var splitIndex =  startIndex + Math.floor( (endIndex - startIndex) / 2 );
        
        var left = this.mergeSort( list, startIndex, splitIndex, compareFn);
        var right = this.mergeSort( list, splitIndex+1, endIndex, compareFn);
        
        return this.merge(left, right, compareFn);
        
    }
    
    merge( left : any[], right : any[], compareFn = (a,b) => {return a < b } ) : any[]
    {
        
        var result = [];

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