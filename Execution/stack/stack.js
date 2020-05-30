// implementation with array
const stack1 = require('../../stack/arrayImplementation.js');
const stack2 = require('../../stack/LLimplementation.js')
let stackEx1  = new stack1(6);

stackEx1.push(6);
stackEx1.push(10);
console.log('pushed into stack')
stackEx1.push(20);
console.log('pushed into stack')
stackEx1.push(30);
console.log('pushed into stack')
stackEx1.push(40);
console.log('pushed into stack')
stackEx1.push(50);
stackEx1.push(60);
stackEx1.push(30);
console.log(stackEx1.isEmpty());
console.log(stackEx1.isFull());

console.log(stackEx1.peek());


console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.peek());

console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.isEmpty());
console.log(stackEx1.isFull());

console.log(stackEx1.peek());

console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.pop());
stackEx1.deleteStack();



// stack implementation with linked lists
stackEx1  = new stack2(6);
stackEx1.push(10);
console.log('pushed into stack')
stackEx1.push(20);
console.log('pushed into stack')
stackEx1.push(30);
console.log('pushed into stack')
stackEx1.push(40);
console.log('pushed into stack')
stackEx1.push(50);
stackEx1.push(60);
stackEx1.push(30);
console.log(stackEx1.isEmpty());

console.log(stackEx1.peek());


console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.peek());

console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.isEmpty());

console.log(stackEx1.peek());

console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.pop());
console.log(stackEx1.pop());
stackEx1.deleteStack();
stackEx1.push(30);

console.log(stackEx1);


