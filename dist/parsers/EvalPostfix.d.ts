/**
 * EvalPostfix
 */
export declare class PostfixEval {
    /**
     * Eval postfix:	345+*612+/-
     *
        In  Stack
    --------------
        3	3
        4	3,4
        5	3,4,5
        +	3,9
        *	27
        6	27,6
        1	27,6,1
        2	27,6,1,2
        +	27,6,3
        /	27,2
        -	25
    ---------------
     */
    /**
     *
     */
    op: Object;
    constructor();
    eval(expr: string): number;
}
