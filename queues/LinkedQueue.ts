import * as iqm from "../queues/IQueue";

////////////////////////////////////////////////////////////////
class LinkElem
{
   public data : any;              // data item (key)
   public next : LinkElem;          // next link to element in list
   public previous : LinkElem;
   
// -------------------------------------------------------------
   /**
    *
    */
   constructor(data : any) {
       this.data = data;
   }
}  // end class Element
////////////////////////////////////////////////////////////////
class FirstLastList
{
   private first : LinkElem;               // ref to first item
   private last  : LinkElem;                // ref to last item
   private _size : number; 
// -------------------------------------------------------------
   constructor() {
       this.clear();
   }
       
// -------------------------------------------------------------
   isEmpty() : boolean         // true if no links
   { 
       return this.first==null; 
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
   displayList()
   {
      var current = this.first;          // start at beginning
      while(current != null)         // until end of list,
      {
         console.log(current);      // print data
         current = current.next;     // move to next link
      }
      console.log('');
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
 * LinkedQueue based on LinkedList
 */
export class LinkedQueue implements iqm.IQueue {
    
    private _list : FirstLastList;
    
    constructor() {
        this._list = new FirstLastList();
    }
    
    enqueue(value : any) {
        this._list.insertLast(value);
    }
    
    dequeue() : any {
        return this._list.deleteFirst();
    }
    
    clear() {
        this._list.clear();
    }
    
    size() : number {
        return this._list.size();
    }
    
    isEmpty() : boolean {
        return (this._list.size() == 0);
    }

    peekFront() : any {
        return this._list.peekFirst();
    }
    

    peekRear()  : any {
        return this._list.peekLast();
    }
    
    
}