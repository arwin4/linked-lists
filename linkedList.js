// eslint-disable-next-line import/extensions
import Node from './node.js';

class LinkedList {
  constructor(name) {
    this.name = name;
    this.headNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.listSize += 1;
  }

  head() {
    return this.headNode;
  }
}

export default LinkedList;
