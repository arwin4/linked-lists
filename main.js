/* eslint-disable import/extensions */
import LinkedList from './linkedList.js';

const list1 = new LinkedList('A first list');

list1.append('1');
list1.append('2');
list1.append('3');

// eslint-disable-next-line no-console
console.log(list1.toString());
