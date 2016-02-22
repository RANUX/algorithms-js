import * as ilist from './IList';

////////////////////////////////////////////////////////////////
export class LinkElem
{
   public data : any;              // data item (key)
   public next : LinkElem;          // next link to element in list
   public previous : LinkElem;
   
   toString() {
       return JSON.stringify(this);
   }
// -------------------------------------------------------------
   /**
    *
    */
   constructor(data : any) {
       this.data = data;
       this.next = null;
   }
}  // end class Element
////////////////////////////////////////////////////////////////
/**
 * FirstLastList linked list realization.
 */
export class FirstLastList implements ilist.IList
{
   protected first : LinkElem;               // ref to first item
   protected last  : LinkElem;                // ref to last item
   protected _size : number; 
// -------------------------------------------------------------
   constructor() {
       this.clear();
   }
       
// -------------------------------------------------------------
   isEmpty() : boolean         // true if no links
   { 
       return this.first==null; 
   }
   
   
   
   insert( index : number,  value : any ) {
       var newElem  = new LinkElem(value);
       var previous:LinkElem  = null;
       var current  = this.first;
       var i = 0;
       
       while ( current != null && index > i ) 
       {
           previous = current;
           current  = current.next;  // go to next element
           i++;
       }
       
       if ( previous == null ) {     // at the beginning of list
           this.first = newElem;
           this.last  = newElem;
       } else {
           previous.next = newElem;
       }
       
       newElem.next = current;
       this._size++;
       
   }
   
   set ( index : number, value : any) {
       var current = this.first;      // start at beginning
       var oldVal  = null;
       
       var i = 0;
       while(current != null && index != i)         // until end of list,
       {
         current = current.next;     // move to next link
         i++;
       }
       
       oldVal = current.data;
       current.data = value;
       return oldVal;
   }
   
   get(index : number) : any {
       var current = this.first;      // start at beginning
       
       var i = 0;
       while(current != null && index != i)         // until end of list,
       {
         current = current.next;     // move to next link
         i++;
       }
       
       return current.data;
   }
   
   delete( index : number ) {
       var previous:LinkElem  = null;
       var current  = this.first;
       var i = 0;
       
       
       while ( current != null && index > i ) 
       {
           previous = current;
 
           if ( current.next != null )
                current  = current.next;  // go to next element
           i++;
       }

       if ( previous != null && current != null)
            previous.next = current.next;
 
       this._size--;
       
      if ( previous == null ) {
          //console.log("prev: " + previous, "current: " + current + " this.first: " + this.first + " this.last: " + this.last);
           this.first = null;
           this.last  = null;
       }
       return current.data;
   }
   
// -------------------------------------------------------------
   pop() : any {
       return this.delete( this.size()-1 );
   }
// -------------------------------------------------------------
   insertLast(value: any) // insert at end of list
   {
      var newLink = new LinkElem(value);  // make new link
      
      if( this.isEmpty() )                // if empty list,
         this.first = newLink;            // first --> newLink
      else
         this.last.next = newLink;        // old last --> newLink
         
      this.last = newLink;                // newLink <-- last
      this._size++;
   }
// -------------------------------------------------------------
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
     push(value : any) {
         this.insertLast(value);
         return this.size();
     }
// -------------------------------------------------------------
    insertFirst(value: any) // insert at start of list
    {                           // make new link
      var newLink  = new LinkElem(value);
      
      if( this.isEmpty() )  
         this.last = newLink;
         
      newLink.next = this.first;       // newLink --> old first
      this.first   = newLink;            // first --> newLink
      this._size++;
      
    }
// -------------------------------------------------------------
    /**
     * Insert value at start of the list
     * 
     * @param {*} value any
     * @return new list size
     */
    unshift(value: any) {
        this.insertFirst(value)
        return this.size();
    }
// -------------------------------------------------------------
    /**
     * Retrieve and delete first element of the list
     * 
     * @returns {*} (description)
     */
    shift() : any {
        return this.deleteFirst();
    }
// -------------------------------------------------------------
   deleteFirst() : any            // delete first link
   {                              // (assumes non-empty list)
      var temp = this.first.data;
      
      if(this.first.next == null)         // if only one item
         this.last = null;                // null <-- last
         
      this.first = this.first.next;       // first --> old next
      this._size--;
      return temp;
    }
// -------------------------------------------------------------
   toString()
   {
      var current = this.first;      // start at beginning
      var str = [];
      while(current != null)         // until end of list,
      {
         str.push(current);      // print data
         current = current.next;     // move to next link
      }
      console.log("["+str.join(', ')+"]");
   }
// -------------------------------------------------------------
   size() {
       return this._size;
   }
// -------------------------------------------------------------
    clear() {
       this.first = null;
       this.last  = null;
       this._size = 0;
    }
// -------------------------------------------------------------
    peekFirst() {
        return this.first;
    }
// -------------------------------------------------------------
    peekLast() {
        return this.last;
    }
    
}  // end class FirstLastList
////////////////////////////////////////////////////////////////


/**
 * SortedFirstLastList linked list realization.
 */
export class SortedFirstLastList extends FirstLastList
{
   insertFirst( value : any ) {
       var newElem  = new LinkElem(value);
       var previous:LinkElem  = null;
       var current  = this.first;
       
       while ( current != null && value > current.data ) 
       {
           previous = current;
           current  = current.next;  // go to next element
       }
       
       if ( previous == null ) {     // at the beginning of list
           this.first = newElem;
       } else {
           previous.next = newElem;
       }
       
       newElem.next = current;
       this._size++;
   }
}  // end class FirstLastList
////////////////////////////////////////////////////////////////