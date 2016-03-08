
import {ISort} from './ISort';

/**
 * ShellSort
 */
export default class ShellSort implements ISort {
    
    sort( a : any[],  compareFn?: any ) : any[]
    {
        var out, temp, inn;
        for ( out = 1; out < a.length; out++) {
            temp = a[out];
            inn = out;
            while (inn > 0 && a[inn-1] > temp) {
                a[inn] = a[inn-1];
                --inn;
            }
            a[inn] = temp;
        }
        return a;
    }
};
