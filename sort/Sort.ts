/**
 * Simple sort algorithms. Complexity O(N^2)
 */

export class SimpleSort {

    bubbleSort(a: any[]) {
        for (var out = a.length-1; out > 0; out--) {
            for (var inn = 0; inn < out; inn++) {
                if ( a[inn] > a[inn+1] ) {
                    // swap
                    var tmp = a[inn];
                    a[inn]    = a[inn+1];
                    a[inn+1]  = tmp;
                }
                
            }
        }
    }
    
    /**
     * Selection sort
     * 
     * @param {any[]} any array
     */
    selectionSort(a: any[]) {
        var min, out;
        for( out = 0; out < a.length; out++) {
            min = out;
            for (var inn = out+1; inn < a.length; inn++ ) {
                if ( a[inn] < a[min] )
                    min = inn;
            }
            // swap
            var tmp   = a[out];
            a[out]    = a[min];
            a[min]  = tmp;
        }
    }
    
    /**
     * Insertion sort
     * 
     * @param {any[]} any array
     */
    insertionSort(a: any[]) {
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
    }
    
}

