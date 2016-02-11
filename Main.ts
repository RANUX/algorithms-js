class CPoint {  
    x: number;  
    y: number;  
    
    constructor(x: number,  y: number) {  
        this.x = x;  
        this.y = y;  
    }
    
    public toString() {  
        return "(x" + this.x + ", y" + this.y+")";  
    }    
}

class Startup {
    public static main(): number 
    {
        var bs = new BubbleSort();
        bs.sort([5,2,3,6,2,0]);

        return 0;
    }
}

Startup.main();
