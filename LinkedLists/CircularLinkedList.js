// Circular linked list operations
class CLL {
    constructor(value) {
        let node = {value: value};
        node.next = node;
        this.list = {
                    head: node,
                    tail: node
                    };
    }
    insertNode(val, loc) {
        let node = {value: val};
        if (loc === 0) {
            node.next = this.list.head;
            this.tail.next = this.list.head = node;
        } else {
            let i = 0;
            let tmpnode = this.list.head;
            while (i !== loc-1) {
                tmpnode = tmpnode.next;
                if (tmpnode === this.list.tail) break;
                i++;
            }
            node.next = tmpnode.next;
            tmpnode.next = node;
            if (node.next === this.list.head) this.list.tail = node;
        }
    }
    traverse() {
        let tmpnode = this.list.head;
        while(tmpnode.next !== this.list.head) {
            console.log(tmpnode.value);
            tmpnode = tmpnode.next;
        }
        console.log(tmpnode.value);
    }
    searchValue(val) {
        let tmpnode = this.list.head;
        while (tmpnode.next !== this.list.head) {
            if (tmpnode.value === val) {
                console.log(`value ${val} is found in node ${tmpnode}`);
                break;
                return;
            }
            tmpnode = tmpnode.next
        }
        if (tmpnode.value === val) {
            console.log(`value ${val} is found in node ${tmpnode}`);
        } else {
            console.log('value is not found');
        }
    }
    deleteNode(pos) {
        let tmpnode = this.list.head;
        if (pos === 0) {
            this.list.head = this.list.head.next;
            this.list.tail.next = this.list.head;
        } else {
            let i = 0;
            tmpnode = this.list.head;
            while (i !== pos-1) {
                tmpnode = tmpnode.next;
                if (tmpnode.next === this.list.tail) break; 
                i++;
            } 
            if (i !== pos -1) {
                tmpnode.next = this.list.head;
                this.list.tail = tmpnode;
            } else {
                tmpnode.next = tmpnode.next.next;
            }
        }
    }
    deleteLL() {
        this.list.head = null;
        this.list.tail.next = null;
        this.list.tail = null;
    }
}
module.exports = CLL;
