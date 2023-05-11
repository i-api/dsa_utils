/**
 * @brief Doubly Linked List Implementation of a Stack
 * @details O(1) Constant Time Complexity for all operations, except __repr__ which is O(n)
 */
export class Node {
    constructor(data=null, next=null, prev=null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}
export class Stack {
    #length = 0; // private
    constructor(items=[]) {
        this.head_sentinel = new Node(null, null, null); // sentinels. null <- HS <-> H <-> T <-> TS -> null
        this.tail_sentinel = new Node(null, null, null);
        for (const item of items) {this.push(item);}
    }
    get_length = () => this.#length;
    peek = () => this.tail_sentinel.prev;
    __repr__() {
        const stak = []
        let curr = this.head_sentinel.next;
        for (let i =0; i< this.#length; i++) {
            stak.push(curr.data);
            curr = curr.next;
        }
        return stak;
    }
    push(value) {
        const newNode = new Node(value, null, null);
        if (this.#length === 0) {  // first push on empty stack
            this.head_sentinel.next = newNode;
            newNode.prev = this.head_sentinel;
            newNode.next = this.tail_sentinel;
            this.tail_sentinel.prev = newNode;
            this.#length+=1;
            return this.tail_sentinel.prev;
        } 
        const prev = this.tail_sentinel.prev;
        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = this.tail_sentinel;
        this.tail_sentinel.prev = newNode;
        this.#length+=1;
        return this.tail_sentinel.prev;
    }
    pop() {
        const top = this.tail_sentinel.prev;
        if (this.#length === 0) throw new Error("CANNOT POP FROM EMPTY STACK");
        if (this.#length === 1) { // null <- HS <-> H <-> TS -> null
            this.head_sentinel.next = null;
            this.tail_sentinel.prev = null;
            this.#length-=1;
            return top;
        }
        const prev = top.prev;
        prev.next = this.tail_sentinel;
        this.tail_sentinel.prev = prev;
        this.#length-=1;
        return top;
    }
}
