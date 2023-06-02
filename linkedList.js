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

  addOne() {
    this.listSize += 1;
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.addOne();
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = null;

    if (this.headNode === null) {
      // List is empty
      this.headNode = newNode;
    } else {
      // Traverse the list to find the last node
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        // Keep going until the node that points to null is found
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
    this.addOne();
  }

  head() {
    return this.headNode;
  }
}

export default LinkedList;
