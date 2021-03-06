
export interface IStack {
    push(value: any): number;
    pop(): any;
    peek(): any;
    clear(): void;
    length(): number;
    size(): number;
    isEmpty(): boolean;
}
