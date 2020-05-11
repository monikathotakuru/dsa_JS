const linkedlist = require('../../LinkedLists/singleLinkedList.js')
var ll1 = new linkedlist(10);
ll1.searchValue(80);
ll1.addtoLL(20, 0);
ll1.addtoLL(30, 0);
ll1.addtoLL(40, 2)
ll1.addtoLL(50, 10)
ll1.traverse();
ll1.searchValue(10);
ll1.searchValue(20);
ll1.searchValue(50);
console.log(ll1);

ll1.traverse();
ll1.deleteNode(0);
ll1.traverse();
console.log('first delete done!!')
ll1.deleteNode(2);
ll1.traverse();
console.log('second delete done!!')
ll1.deleteNode(2);
ll1.traverse();
console.log('third delete done!!')
ll1.deleteNode(2);
ll1.traverse();
console.log('third delete done!!')







ll1.deleteLL();
console.log(ll1);
