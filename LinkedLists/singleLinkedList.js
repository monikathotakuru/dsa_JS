class LinkedList {
    // creation of linked list
    constructor(value) {
        this.list = {};
        this.list.head = {
            value: value,
            next: null
        };
        this.list.tail = this.list.head;
    }

    // insertion of nodes into LL
    addtoLL(val, loc) {
        var node = {value: val};
        // if node is inserted at first location
        if (loc == 0) {
            node.next = this.list.head;
            this.list.head = node;
        } else {
            let i = 0;
            var tmpnode = this.list.head;
            while (i !== loc-1) {
                // location is greater than length; insert at last location
                tmpnode = tmpnode.next;
                if (tmpnode.next === null) break;
                i++;
            }
            node.next = tmpnode.next;
            tmpnode.next = node;
            // if node is inserted at last location...
            if (node.next === null) this.list.tail = node;
        } 
    }

    // traversing the LL
    traverse() {
        let tmpnode = this.list.head
        if (tmpnode === null) {
            console.log('list is empty'); 
            return;
        }
        while (tmpnode !== null) {
            console.log(tmpnode.value);
            tmpnode = tmpnode.next;
        }
    }

    // search a value in LL
    searchValue(val) {
        let tmpnode = this.list.head;
        if (tmpnode === null) {
            console.log('list is empty');
            return;
        }
        while (tmpnode !== null) {
            if (tmpnode.value === val) {
                console.log('value found')
                console.log(tmpnode);
                return;
            }
            tmpnode = tmpnode.next;
        }
        console.log('value not found');
    }
    // delete node from LL based on pos
    deleteNode(loc) {
        let tmpnode = this.list.head;
        // list is empty...
        if (this.list.head === null) {
            console.log('list is empty');
            return;
        }
        if (loc === 0) {
            // deletion of first node
            this.list.head = tmpnode.next;
            if (tmpnode === null) {
                this.list.tail = null;
            }
            console.log('deleted first node')
        } else {
            let i = 0;
            while (i !== loc-1) {
                // to handle deletion of last node
                if (tmpnode.next.next === null) break;
                tmpnode = tmpnode.next;
                i++;
            }
            tmpnode.next = tmpnode.next.next;
            if (tmpnode.next === null) this.list.tail = tmpnode;
        }
    }

    // delete LL
    deleteLL() {
        this.list.head = null;
        this.list.tail = null;
    }
}

module.exports =  LinkedList;
