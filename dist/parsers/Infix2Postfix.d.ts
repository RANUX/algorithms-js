/**
 * Converts infix numerical expression to postfix
 */
export declare class Infix2Postfix {
    private opPriority;
    private output;
    private stack;
    convert(expr: string): string;
    private getOperator(opCur);
    private getCloseParen(ch);
}
