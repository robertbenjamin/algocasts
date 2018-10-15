// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while(node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let previous = null;

    while(node) {
      previous = node;
      node = node.next;
    }

    return previous;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const node = new Node(data);
    const last = this.getLast();

    last ?
      last.next = node :
      this.head = node;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node && counter !== index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) return;
    const next = previous.next.next;
    previous.next = next;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(callback) {
    let node = this.head;
    let index = 0;

    while (node) {
      callback(node, index)
      node = node.next;
      index++;
    }
  }
}

module.exports = { Node, LinkedList };
