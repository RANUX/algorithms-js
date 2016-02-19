/**
 * Converts infix numerical expression to postfix
 */
export declare class Infix2Postfix {
    private opPriority;
    private output;
    private stack;
    private separator;
    convert(expr: string, separator?: string): string;
    private getOperator(opCur);
    private getCloseParen(ch);
}
