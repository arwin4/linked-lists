// eslint-disable-next-line import/extensions
import LinkedList from './linkedList.js';

class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

const list1 = new LinkedList('A first list');
const firstNode = new Node();
firstNode.value = 'test';
list1.head = firstNode;
console.log(list1);
