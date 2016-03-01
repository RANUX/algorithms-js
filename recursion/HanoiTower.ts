/**
 * HanoiTowers
 */
export default class HanoiTower {
    
    public solution : any[];
    
    private disks   : any;

    /**
     *
     */
    constructor() {
        this.clearSolution();
    }
    
    saveSolution() 
    {
        var strcopy = JSON.parse(JSON.stringify([ this.disks[1], this.disks[2], this.disks[3] ] ));
  
        this.solution.push(
                    strcopy
        );
    }
    
    clearSolution()
    {
        this.solution = [];
        this.disks = {
            1 : [], // src
            2 : [], // tmp 
            3 : []  // dst
        }
    }
    
    solve(nTowers : number)
    {
        this.clearSolution();
        var n = nTowers;
        while ( n > 0) {
            this.disks[1].unshift ( n );
            n--;
        }

        this.saveSolution();
        this.solveRecursive( nTowers, 1, 2, 3);
        //console.log(this.solution);
    }
    
    private solveRecursive( nTowers : number, src : number, tmp : number, dst : number)
    {
        
        if ( nTowers == 1) {
            this.disks[dst].unshift( this.disks[src].shift() );
            
            this.saveSolution();
            
            //console.log("Disk 1 from " + src + " to "+ dst);
            return;
        }
        
        this.solveRecursive( nTowers-1, src, dst, tmp);        // move src disk to tmp
        
        this.disks[dst].unshift( this.disks[src].shift() );    
        this.saveSolution();
        
        //console.log("Disk " + nTowers +  " from " + src + " to "+ dst);
        this.solveRecursive( nTowers-1, tmp, src, dst);       // move tmp disk to dst

    }
}