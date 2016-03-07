import ahelp = require( "../arrays/ArrayHelpers" );
/**
 * KnapsackProblemLight only weights without prices
 */
export default class KnapsackProblemLight {
    
    private weights : number[];
    private stack   : number[];
    private result  : number[];
    
    constructor(weights :number[]) {
        this.setWeights(weights);
        this.stack   = [];
    }
    
   solve (goalW :number) {
       this.result  = [];
       
       for (var i = 0; i < this.weights.length; i++) {
           
           this.solveRecursive( goalW, i);
           if ( this.stack.length > 0 ) break; // solution found
       }
       
       return this.result;
   }
   
   setWeights(weights :number[])
   {
       this.weights = weights;
   }
    
    private solveRecursive(goalW :number, i :number) :number
    {
        //console.log('goalW: ' + goalW + ' i: ' + i);
        
        if ( i == this.weights.length ) {                    // there is no items
            return undefined;
        }
        else if ( goalW == this.weights[i] ) {
            this.result = ahelp.shallowCopy( this.stack );   // items found
            this.result.push( this.weights[i]);
            return this.weights[i];
        }
        else if ( goalW > this.weights[i] ) {                 // if not enought 
            this.stack.push( this.weights[i] );
            var w = this.solveRecursive( goalW-this.weights[i], i+1);   // go to next weight
            if ( !w )
                this.stack.pop();
            else
                this.stack.push( w );
        }
        else if ( goalW < this.weights[i] ) {                 // too much
            var w = this.solveRecursive( goalW, i+1);         // go to next weight
            if ( !w )
                this.stack.pop();
            else
                this.stack.push( w );
        }
        //console.log('goalW: ' + goalW + ' i: ' + i + ' stack: ' + this.stack);
        
    }
}