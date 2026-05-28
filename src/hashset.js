import { HashMap } from "./hashmap.js";

export class HashSet extends HashMap {
  increaseCapacity() {
    const newBuckets = new Array(this.capacity);
    
    for (let i = 0; i < this.capacity; ++i) {
      if (this.buckets[i]) {
        newBuckets[i] = new LinkedList();
        let iterNode = this.buckets[i].head;
        while (iterNode) {
          newBuckets[i].append(iterNode.value);
          iterNode = iterNode.nextNode;
        }
      }
    }
    
    this.clear();
    this.capacity *= 2;
    this.buckets.length = this.capacity;

    for (let i = 0; i < newBuckets.length; ++i) {
      if (newBuckets[i]) {
        let iterNode = newBuckets[i].head;
        while (iterNode) {
          this.set(iterNode.value);
          iterNode = iterNode.nextNode;
        }
      }
    }
  }

  set(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();
    }
    
    const linkedList = this.buckets[index];
    if (linkedList.size() > 0) {
      let iterNode = linkedList.head;
      while (iterNode) {
        if (iterNode.value === key) {
          return;
        }
        iterNode = iterNode.nextNode;
      }
    }

    linkedList.append(key);

    if (this.getCurrentLoadLevels() >= this.loadFactor) {
      this.increaseCapacity();
    }
  }

  get(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    const linkedList = this.buckets[index];
    if (linkedList && linkedList.size() > 0) {
      let iterNode = linkedList.head;
      while (iterNode) {
        if (iterNode.value === key) {
          return iterNode.value;
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
      let iterNode = linkedList.head;
      while (iterNode) {
        if (iterNode.value === key) {
          return true;
        }
        iterNode = iterNode.nextNode;
      }
    }

    return false;
  }

  
}