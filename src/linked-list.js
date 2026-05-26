class Node {
  constructor(value=null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    
    let iterNode = this.head;
    while (iterNode.nextNode) {
      iterNode = iterNode.nextNode;
    }

    iterNode.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let iterNode = this.head;

    while (iterNode) {
      counter++;
      iterNode = iterNode.nextNode;
    }

    return counter;
  }

  head() {
    if (this.head === null)
      return undefined;

    return this.head.value;
  }

  tail() {
    if (this.head === null)
      return undefined;

    let iterNode = this.head;
    while (iterNode.nextNode)
      iterNode = iterNode.nextNode;

    return iterNode.value;
  }

  checkIndexOutOfBounds(index) {
    if (index < 0 || index >= this.size())
      throw RangeError;
  }

  at(index) {
    checkIndexOutOfBounds(index);

    let currIndex = 0;
    let iterNode = this.head;
    while (currIndex < index || iterNode) {
      currIndex++;
      iterNode = iterNode.nextNode;
    }

    if (currIndex !== index || iterNode === null)
      return undefined;

    return iterNode.value;
  }

  pop() {
    if (this.head === null)
      return undefined;

    let nodeToPop = this.head;
    this.head = this.head.nextNode;
    return nodeToPop.value;
  }

  contains(value) {
    let iterNode = this.head;
    while (iterNode) {
      if (iterNode.value === value)
        return true;
      iterNode = iterNode.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let currIndex = 0;
    let iterNode = this.head;
    while (iterNode) {
      if (iterNode.value === value)
        return currIndex;
      iterNode = iterNode.nextNode;
    }

    return -1;
  }

  toString() {
    let str = "";
    let iterNode = this.head;
    while (iterNode) {
      str += `( ${iterNode.value} ) -> `;
      iterNode = iterNode.nextNode;
    }

    str += "null";
    return str;
  }

  insertAt(index, ...values) {
    checkIndexOutOfBounds(index);

    let newNodes = null;
    let tailNode = null;
    values.forEach(value => {
      let newNode = new Node(value);
      if (newNodes === null)
        newNodes = newNode;
      else
        tailNode.nextNode = newNode;
      tailNode = newNode;
    });

    let prevNode = null;
    let iterNode = this.head;
    let counter = 0;
    while (counter < index) {
      prevNode = iterNode;
      iterNode = iterNode.nextNode;
      counter++;
    }

    if (prevNode === null) {
      tailNode.nextNode = this.head;
      this.head = newNodes;
    }
    else {
      tailNode.nextNode = iterNode;
      prevNode.nextNode = newNodes;
    }
  }

  removeAt(index) {
    checkIndexOutOfBounds(index);

    let prevNode = null;
    let iterNode = this.head;
    let counter = 0;
    while (counter < index) {
      prevNode = iterNode;
      iterNode = iterNode.nextNode;
      counter++;
    }

    if (prevNode === null)
      this.head = this.head.nextNode;
    else
      prevNode.nextNode = iterNode.nextNode;

    iterNode.nextNode = null;
  }
}