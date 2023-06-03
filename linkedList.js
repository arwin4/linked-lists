// eslint-disable-next-line import/extensions
import Node from './node.js';

class LinkedList {
  constructor(name) {
    // TODO: prevent direct setting
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

  #decreaseSizeByOne() {
    this.listSize -= 1;
  }

  head() {
    // Return the first node
    return this.headNode;
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

  at(index) {
    // Zero-indexed

    if (index >= this.size()) return null;

    let currentNode = this.headNode;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  find(value) {
    // Return the index of the node with the given value, if it exists
    if (this.size() === 0) return null;

    let currentNode = this.headNode;
    for (let i = 0; i < this.size(); i += 1) {
      if (currentNode.value === value) return i;
      currentNode = currentNode.nextNode;
    }
    return null;
  }

  contains(value) {
    if (this.find(value) !== null) return true;
    return false;
  }

  toString() {
    // FIXME: [object Object] instead of null
    // Return a string of the complete list
    let currentNode = this.headNode;
    let string = '';
    for (let i = 0; i < this.size(); i += 1) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    return string + currentNode; // currentNode = null, end of list
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

  pop() {
    // Delete and return the last item of the list
    // (The returned value is a temporary copy for confirmation only.)

    if (this.size() === 0) return null;

    let nodeCopy;
    if (this.size() === 1) {
      nodeCopy = this.headNode;
      this.headNode = null;
    } else {
      // List size >1
      let currentNode = this.headNode;
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      nodeCopy = currentNode.nextNode;
      currentNode.nextNode = null;
    }

    this.#decreaseSizeByOne();
    return nodeCopy;
  }

  insertAt(value, index) {
    // Inserts a node at the given index.
    // Same as 'insertBefore', because it shifts the node at the given index up
    // the list.
    // Will accept index values of non-existent nodes by inserting at the start
    // or end of the list.

    if (index <= 0) {
      this.prepend(value);
      return;
    }
    if (index >= this.size()) {
      this.append(value);
      return;
    }

    const newNode = new Node();
    newNode.value = value;

    const previousNode = this.at(index - 1);
    const nodeToMove = previousNode.nextNode;

    newNode.nextNode = nodeToMove; // Link the old node occupying this index
    previousNode.nextNode = newNode; // Update previous node link

    this.#increaseSizeByOne();
  }
}

export default LinkedList;
