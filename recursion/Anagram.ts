import ll = require("../stacks/ArrayStack");

/**
 * Anagram
 */
export default class Anagram {
    
    public size  : number = 0;
    public chars  : string[]; 
    private result : any[];
    
    private anagramRecursive( newSize: number) 
    {
        
        if ( newSize == 1)
            return;
        
        for ( var i=0; i < newSize; i++) 
        {
            this.anagramRecursive( newSize-1 );
            
            if ( newSize == 2)
                this.result.push(this.chars.join(''));
            
            this.rotateChars( newSize );
           
        }
       
    }
    
    public anagrams()
    {
        var size  = 4;
        var stack = [];
        
        for (var i = 0; i < size-1; i++) {
            stack.push([ size-i, 0 ]);
        }
        console.log(stack);
        
        while( stack.length > 0 )
        {
            var step = stack.pop();
            
        }
    }

    
    getAnagrams(word : string) : string[]
    {
        this.chars = [];
        this.result = [];
        this.size = word.length;
        
        for (var i = 0; i < word.length; i++) {
            this.chars[i] = word.charAt(i);
        }
        
        this.anagramRecursive( this.size );
        
        return this.result;
    }
    
    public rotateChars(newSize : number) {
        var position = this.size - newSize;
        var temp = this.chars[position];   // Save first letter
        //console.log("befor: "+this.chars);

        for(var j=position+1; j < this.size; j++) { // Shift letters to left
            this.chars[j-1] = this.chars[j];
        }
        this.chars[j-1] = temp;
        //console.log(this.chars);
    }
}