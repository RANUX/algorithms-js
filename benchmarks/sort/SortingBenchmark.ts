import {ISort}  from "../../sort/ISort";
import { shallowCopy, checkSorted }  from '../../helpers/ArrayHelpers';
import { getObjectName } from '../../helpers/ObjectHelpers';

export default class SortingBenchmark {
    
    public dumpWhenAssert : boolean = false;
    
    protected sorting           : ISort;
    protected sortedStr         : any[];
    protected sortedStrReversed : any[];
    protected sortedNum         : any[];
    protected sortedNumReversed : any[];
    
    protected itemsCount : number;
    protected unsortedNum  : any[];
    
    
    constructor( sortingObj : ISort, itemsCount = 100000 ) {
        this.sorting     = sortingObj;
        this.itemsCount  = itemsCount; 
        this.unsortedNum = new Array( this.itemsCount );
        
        for (var i = 0; i < this.itemsCount; i++) {
            
            this.unsortedNum[i] = this.getRandomInt(0, this.itemsCount);
        }
        
        
        this.sortedNum          = shallowCopy( this.unsortedNum ).sort( (a,b) =>  b-a );
        this.sortedNumReversed  = this.sortedNum.reverse();
        
    }
    
    measureNumSortTime( a :any[] ) :number {
        var start = new Date().getTime();

        this.sorting.sort( a );
        var end = new Date().getTime();
        
        console.assert( checkSorted( a, this.dumpWhenAssert ), 'Something wrong with sorting. Array shoud be sorted!' );
        return end - start;
    }
    
    getRandomInt(min :number, max :number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    logMeasureRndNumsTime()
    {
        console.log('['+getObjectName( this.sorting )+' ]' +' Sorting '+ this.itemsCount +' random nums execution time: ' + this.measureNumSortTime( this.unsortedNum ) + ' ms');
    }
    

};
