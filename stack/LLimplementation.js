// stack implementation using linked lists
class stackUsingLL {
    constructor(value) {
        let node = {value: value, next: null};
        this.stack = {
            head: node, 
            tail: node
        }
    }

    push(value) {
	let node = {value: value, next: null};
        if (this.stack.head === null) { 
	    this.stack.head = node;
            this.stack.tail = node;
	}
        this.stack.tail.next = node;
	this.stack.tail = node;
    }
    pop() {
	if (this.stack.head === null) return 'no element in stack';
        let node = this.stack.tail;
	let tmpnode = this.stack.head;
	if (tmpnode.next === null) {
	    this.stack.head = null;
	    this.stack.tail = null;
	} else {
	    while (tmpnode.next !== node) {
		tmpnode = tmpnode.next;
	    }
	    tmpnode.next = null
	    this.stack.tail = tmpnode;
	}
	
	return node.value;
    }
    peek() {
        if (this.stack.tail === null) return 'no elements in stack';
        else return this.stack.tail.value;
    }
    isEmpty() {
        return this.stack.head === null;
    }
    deleteStack() {
        this.stack.head = null;
        this.stack.tail = null;
    }

}

module.exports = stackUsingLL;
