// stack implementation using primitive array data structure
class stack {
    constructor(len) {
        this.stack = new Array(len);
        this.topOfStack = -1;
    }
    push(val) {
        if (this.topOfStack === this.stack.length - 1) { 
            console.log('stack is full :(');
            return
        }
        this.topOfStack++;
        this.stack[this.topOfStack] =val;
    }
    pop() {
        if (this.topOfStack === -1) return 'no elements in stack';
        this.topOfStack--;
        return this.stack[this.topOfStack + 1];
    }
    peek() {
        if (this.topOfStack === -1) return 'no elements in stack';
        return this.stack[this.topOfStack];
    }
    isEmpty() {
        return this.topOfStack === -1;
    }
    isFull() {
        return this.topOfStack+1 === this.stack.length;
    }
    deleteStack() {
        this.stack = null;
    }
}

module.exports = stack;
