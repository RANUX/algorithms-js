import ahelp = require( "../helpers/ArrayHelpers" );
/**
 * KnapsackProblemLight only weights without prices. 
 */
/**
 * (description)
 * 
 * @export
 * @class KnapsackProblemLight
 */
export default class KnapsackProblemLight {
    
    private weights : number[];
    private stack   : number[];
    private result  : number[];
    
    
    /**
     * Creates an instance of KnapsackProblemLight.
     * 
     * @param {number[]} weights shoud be sorted descending
     */
    constructor(weights :number[]) {
        this.setWeights(weights);
    }
    
   /**
    * Solve Knapsack Problem with weights only
    * 
    * @param {number} goalW - maximum sum weight
    * @returns (description)
    */
   solve (goalW :number) {
       this.result  = [];
       this.stack   = [];
       
       for (var i = 0; i < this.weights.length; i++) {
           
           this.solveRecursive( goalW, i);
           if ( this.stack.length > 0 ) break; // solution found
       }

       return this.result;
   }
   
   /**
    * Set new weights
    * 
    * @param {number[]}  weights shoud be sorted descending
    */
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
            this.result = ahelp.shallowCopy( this.stack );
            this.result.push( this.weights[i]);              // items found
            return this.weights[i];
        }
        else if ( goalW > this.weights[i] ) {                 // if not enought 
            this.stack.push( this.weights[i] );
            var w = this.solveRecursive( goalW-this.weights[i], i+1);   // go to next weight
            
            if ( !w )
                return this.stack.pop();
        }
        else if ( goalW < this.weights[i] ) {                 // too much
            var w = this.solveRecursive( goalW, i+1);         // go to next weight
            if ( !w )
                return this.stack.pop();
        }
        
        //console.log('goalW: ' + goalW + ' i: ' + i + ' stack: ' + this.stack);
        
    }
}