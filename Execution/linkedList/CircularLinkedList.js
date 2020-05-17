// circular linked list execution
var CLL = require('../../LinkedLists/CircularLinkedList.js');
let cll1 = new CLL(10);
cll1.insertNode(20,  3);
cll1.insertNode(30,  3);
cll1.insertNode(40,  2);
cll1.searchValue(10);
cll1.searchValue(30);
cll1.searchValue(50);

cll1.deleteNode(0);
cll1.traverse();
console.log('deletde first node')
cll1.deleteNode(1);
cll1.traverse();
console.log('deletde second node')
cll1.deleteNode(10);
cll1.traverse();
console.log('deletde third node')




cll1.deleteLL();
console.log(cll1);
