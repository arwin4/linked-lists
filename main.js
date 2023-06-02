/* eslint-disable import/extensions */
import LinkedList from './linkedList.js';

const list1 = new LinkedList('A first list');

// console.log(list1);

console.log(list1.size());
list1.append('first one');
list1.append('second one');
list1.prepend('one in front');
console.log(list1.size());
console.log(list1.head());
