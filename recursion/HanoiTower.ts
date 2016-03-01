/**
 * HanoiTowers
 */
export default class HanoiTower {
    
    public solution : any[] = [];
    
    private towers = {
        1 : [], // src
        2 : [], // tmp 
        3 : []  // dst
    }

    
    saveSolution() 
    {
        var strcopy = JSON.parse(JSON.stringify([ this.towers[1], this.towers[2], this.towers[3] ] ));
  
        this.solution.push(
                    strcopy
        );
    }
    
    solve(nTowers : number)
    {
        var n = nTowers;
        while ( n > 0) {
            this.towers[1].unshift ( n );
            n--;
        }

        this.saveSolution();
        this.solveRecursive( nTowers, 1, 2, 3);
        //console.log(this.solution);
    }
    
    private solveRecursive( nTowers : number, src : number, tmp : number, dst : number)
    {
        
        if ( nTowers == 1) {
            this.towers[dst].unshift( this.towers[src].shift() );
            
            this.saveSolution();
            
            //console.log("Disk 1 from " + src + " to "+ dst);
            return;
        }
        
        this.solveRecursive( nTowers-1, src, dst, tmp);
        
        this.towers[dst].unshift( this.towers[src].shift() );
        this.saveSolution();
        
        //console.log("Disk " + nTowers +  " from " + src + " to "+ dst);
        this.solveRecursive( nTowers-1, tmp, src, dst)

    }
}