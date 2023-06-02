/* eslint-disable import/extensions */
import LinkedList from './linkedList.js';

const list1 = new LinkedList('A first list');

console.log(list1.size());

list1.append('one');
list1.append('one after');
list1.prepend('0');
list1.append('4');
console.log(list1.tail());
console.log(list1.head());
console.log(list1.size());
