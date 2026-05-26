import { LinkedList } from "./linked-list.js";

class HashMap {
  constructor() {
    this.buckets = new Array(16);
    this.loadFactor = 0.75;
    this.capacity = 16;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; ++i) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.capacity;
    }

    return hashCode;
  }

  checkIndexOutOfBounds(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
  }

  // increaseCapacity() {
  //   this.capacity *= 2;

  // }

  set(key, value) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    // if (this.entryCount >= this.capacity * this.loadFactor) {
    //   this.increaseCapacity();
    // }

    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();
    }
    
    const linkedList = this.buckets[index];
    if (linkedList.size() > 0) {
      let iterNode = linkedList.head();
      while (iterNode) {
        if (iterNode.value.key === key) {
          iterNode.value.value = value;
          return;
        }
        iterNode = iterNode.nextNode;
      }
    }

    linkedList.append([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    const linkedList = this.buckets[index];
    if (linkedList && linkedList.size() > 0) {
      let iterNode = linkedList.head();
      while (iterNode) {
        if (iterNode.value.key === key) {
          return iterNode.value.value;
        }
        iterNode = iterNode.nextNode;
      }
    }

    return null;
  }

  has(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    const linkedList = this.buckets[index];
    if (linkedList && linkedList.size() > 0) {
      let iterNode = linkedList.head();
      while (iterNode) {
        if (iterNode.value.key === key) {
          return true;
        }
        iterNode = iterNode.nextNode;
      }
    }

    return false;
  }

  remove(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    // todo: decrement number of entries??

    const linkedList = this.buckets[index];
    const size = linkedList.size();
    if (linkedList && size > 0) {
      let iterNode = linkedList.head();
      let indexToRemove = 0;
      while (iterNode) {
        if (iterNode.value.key === key)
          break;

        iterNode = iterNode.nextNode;
        indexToRemove++;
      }

      if (indexToRemove < size) {
        linkedList.removeAt(indexToRemove);
        return true;
      }
    }

    return false;
  }
}