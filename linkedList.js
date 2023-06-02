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

  #increaseSizeByOne() {
    this.listSize += 1;
  }

  tail() {
    // Traverse the list and return the last node

    // List is empty
    if (this.headNode === null) return this.headNode;

    // List isn't empty
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      // Keep going until the node that points to null is found
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  prepend(value) {
    // Add a node to the start of the list

    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
    this.#increaseSizeByOne();
  }

  append(value) {
    // Add a node to the end of the list

    const newNode = new Node();
    newNode.value = value;
    newNode.nextNode = null;

    const tail = this.tail();
    if (tail === null) {
      // If there's no tail (the list is empty) make this node the first
      this.headNode = newNode;
    } else {
      // Point the current tail to this new tail
      tail.nextNode = newNode;
    }

    this.#increaseSizeByOne();
  }

  head() {
    // Return the first node
    return this.headNode;
  }
}

export default LinkedList;
