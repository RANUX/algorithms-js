import * as stack from "../stacks/IStack";
/**
 * ArrayStack implements IStack
 */
export declare class ArrayStack implements stack.IStack {
    a: any[];
    top: number;
    constructor();
    push(value: any): number;
    pop(): any;
    peek(): any;
    clear(): void;
    length(): number;
    isEmpty(): boolean;
    toString(): string;
}
