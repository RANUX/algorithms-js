import ilst = require('./Ilist');

////////////////////////////////////////////////////////////////
class Element
{
   public value : any;              // data item (key)
   public next : Element;          // next link to element in list
   public previous : Element;
   
// -------------------------------------------------------------
   constructor(value : any) {
       this.value = value;
   }
   
    attachBefore(current : Element)
    {
        console.assert(current != null, "next can't be null");
        
        this.next = current;
        this.previous = current.previous;

        current.previous = this;
        this.previous.next = this;

    }

    detach()
    {
        this.previous.next = this.next;
        this.next.previous = this.previous;
    }
    
    toString() {
        return JSON.stringify(this);
    }
}  // end class Element
////////////////////////////////////////////////////////////////

/**
 * Doubly LinkedList
 */
export class LinkedList implements ilst.IList {
     
     private _headAndTail : Element = new Element(null);
     
     /** The size of the list. */
     private _size : number;
     
     
     constructor() {
         this.clear();
     }
     
     /**
     * Inserts a value into the list at a specified position. The size of the list will increase by one.
     *
     * @param index The position (0, 1, 2...) at which the value should be inserted.
     * @param value The value to add.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
     insert(index : number, value : any) {
         console.assert((value != null), "value can't be null");
         
         if (index < 0 || index > this._size) {
            throw new RangeError();
         }

        var element = new Element(value);
        element.attachBefore(this.getElement(index));
        ++this._size;
     }
     
     
    /**
     * Adds a value to the end of the list. The size of the list will increase by one.
     *
     * @param value The value to be added.
     */
     push(value : any) {
        var element = new Element(value);  // make new link
        
        if( this.isEmpty() ) 
        {
            element.attachBefore(this._headAndTail.next);
        } else {
            element.attachBefore(this._headAndTail);
        }
         ++this._size;
         
        return this.size();
     }
     
    /**
     * Remove value at end of the list
     * 
     * @param {*} value any
     * @return removed item
     */
    pop() : any {
        if ( this.isEmpty()) 
            return null;
            
        var element = this._headAndTail.previous;
        element.detach();
        
        --this._size;
        return element.value;
    }
    
    /**
     * Peek a value from end of the list without remove
     *
     * @param value.
     */
    peek() : any {
        
        if ( this.isEmpty()) 
            return null;
            
        var temp = this.pop();
        this.push(temp);
        return temp;
    }
     
    /**
     * Retrieve and delete first element of the list
     * 
     * @returns {*} (description)
     */
    shift() : any {
        if ( this.isEmpty()) 
            return null;
        
        var value = this.get(0);
        this.delete(0);
        return value;
    }

     /**
     * Insert value at start of the list
     * 
     * @param {*} value any
     * @return new list size
     */
    unshift(value: any) : number {
        this.insert(0, value);
        return this.size();
    }
    /**
     * Deletes the value from a specified position in the list. The size of the list will decrease by one.
     *
     * @param index The position (0, 1, 2...) from which the value should be deleted.
     * @return The value that was contained at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    delete(index: number) : any {
        this.checkOutOfBounds(index);
        
        var element = this.getElement(index);
        element.detach();
        
        --this._size;
        return element.value;
    }

    /**
     * Deletes all elements from the list. The size of the list will be reset to zero (0).
     */
     clear() {
        this._headAndTail.previous = this._headAndTail;
        this._headAndTail.next = this._headAndTail;
        this._size = 0;
     }

    /**
     * Sets the value at a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @param value The value to set at the specified position.
     * @return The value originally at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    set(index : number, value : any) : any {
        console.assert( value != null,  "value can't be null");
        this.checkOutOfBounds(index);
        
        var element  = this.getElement(index);
        var oldValue = element.value;
        element.value = value;
        return oldValue;
    }

    /**
     * Obtains the value from a specified position in the List.
     *
     * @param index The position (0, 1, 2...) from which the value should be obtained.
     * @return The value at the specified position.
     * @throws RangeError if the specified position falls outside the range
     *                                   (index < 0 || index >= size()).
     */
    get(index : number) : any {
        this.checkOutOfBounds(index);
        var t = this.getElement(index).value;
        return t;
    }

    /**
     * Obtains the position of the first occurrence of a specified value within a list.
     *
     * @param value The value for which the index is required.
     * @return The position (0, 1, 2...) of the first occurrence of value; otherwise -1.
     */
    indexOf(value : any) : number {
        console.assert( value != null,  "value can't be null");

        var index = 0;

        for (var e = this._headAndTail.next; e != this._headAndTail; e = e.next) {
            if (value == e.value) {
                return index;
            }
            ++index;
        }

        return -1;
    }

    /**
     * Determines if the list contains a specified value.
     *
     * @param value The value for which to search.
     * @return <code>true</code> if the value is found; otherwise <code>false</code>.
     */
    contains(value : any) : boolean {
        return this.indexOf(value) != -1;
    }

    /**
     * Obtains the number of elements in the list.
     *
     * @return The number of elements in the list.
     */
    size() : number {
        return this._size;
    }


    /**
     * Determines if the list is empty or not.
     *
     * @return <code>true</code> if the list is empty (<code>size() == 0</code>); otherwise returns <code>false</code>.
     */
    isEmpty() : boolean {
        return this.size() == 0;
    }
    
    /**
     * Obtains the element for a specified position.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    private getElement(index : number) : Element
    {
        if (index < this._size / 2) {
            return this.getElementForwards(index);
        } else {
            return this.getElementBackwards(index);
        }
    }
    
    /**
     * Obtains the element for a specified position starting at the first element and working forwards.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    private getElementForwards(index : number) : Element {
        var element = this._headAndTail.next;

        for (var i = index; i > 0; --i) {
            element = element.next;
        }

        return element;
    }

    /**
     * Obtains the element for a specified position starting at the last element and working backwards.
     *
     * @param index The position (0, 1, 2...) for the desired element.
     * @return The element corresponding to the specified position.
     */
    private getElementBackwards(index : number) : Element{
        var element = this._headAndTail;

        for (var i = this._size - index; i > 0; --i) {
            element = element.previous;
        }

        return element;
    }
    
     /**
     * Checks if a specified position is outside the bounds of the list.
     *
     * @param index The index to check.
     * @throws IndexOutOfBoundsException if the specified index is outside the bounds of the list.
     */
    private checkOutOfBounds(index : number) {
        if (this.isOutOfBounds(index)) {
            throw new RangeError();
        }
    }
    
    /**
     * Determines if the specified index is outside the bounds of the list.
     *
     * @param index The index to check.
     * @return <code>true</code> if outside the bounds; otherwise <code>false</code>.
     */
    private isOutOfBounds(index : number) : boolean {
        return index < 0 || index >= this.size();
    }
    
    
    toString()
    {
        return JSON.stringify(this);
    }
    
}