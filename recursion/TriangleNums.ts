import * as stk from "../stacks/ArrayStack";

 enum Steps {
    MENTER,  // method enter
    MRECURSIVE_CALL,   // method call
    MCALL,
    MEXIT,   // method exit
    EXIT,
}

/**
 * Params
 */
class Params {
    n        : number;
    nextStep : Steps
    

    constructor(n, nextStep) {
        this.n = n;
        this.nextStep = nextStep;
    }
}

/**
 * TriangleNums
 */
export default class TriangleNums {
    

    
    private result  : number;
    
    triangleRecursive(n) {
        if ( n == 1 ) return 1;
        return n + this.triangleRecursive(n-1);
    }
    
    
    triangleIterativ(n) {
        var stack = new stk.ArrayStack();
        var mParams:Params;
        stack.push( new Params(n, Steps.EXIT) ); // init stack with initial params
        var result;
        var step = Steps.MENTER
        
        while ( !stack.isEmpty() )               // while stack contains params
        {
            switch (step) {
                    
                case Steps.MENTER:
                    mParams = stack.peek();
                    if ( mParams.n === 1 )
                    {
                        result = 1;
                        step = Steps.MEXIT;
                    } else {
                        step = Steps.MRECURSIVE_CALL;
                    }
                    break;
                    
                case Steps.MRECURSIVE_CALL:
                    mParams = new Params( mParams.n - 1, Steps.MCALL);
                    stack.push( mParams );
                    step    = Steps.MENTER;
                    break;
                    
                case Steps.MCALL:
                    mParams = stack.peek();
                    result  = mParams.n + result;
                    step    = Steps.MEXIT;
                    break;
                    
                case Steps.MEXIT:
                    mParams = stack.pop();
                    step   = mParams.nextStep;
                    break;
                    
            }
        }
        return result;
    }

}