import { LinkedList } from "./linked-list.js";
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

    if (this.getCurrentLoadLevels() > this.loadFactor) {
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

  remove(key) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    const linkedList = this.buckets[index];
    const size = linkedList.size();
    if (linkedList && size > 0) {
      let iterNode = linkedList.head;
      let indexToRemove = 0;
      while (iterNode) {
        if (iterNode.value === key)
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

  keys() {
    const keysArray = [];
    this.buckets.forEach(bucket => {
      if (bucket) {
        let iterNode = bucket.head;
        while (iterNode) {
          keysArray.push(iterNode.value);
          iterNode = iterNode.nextNode;
        }
      }
    });

    return keysArray;
  }

  values() {
    throw new Error(
      "This method is unsupported in HashSet instances. Use keys() instead."
    );
  }

  entries() {
    throw new Error(
      "This method is unsupported in HashSet instances. Use keys() instead."
    );
  }

  print() {
    for (let i = 0; i < this.capacity; ++i) {
      let bucketStr = `[${i}] => `;
      if (this.buckets[i]) {
        let iterNode = this.buckets[i].head;
        while (iterNode) {
          bucketStr += `[${iterNode.value}] => `;
          iterNode = iterNode.nextNode;
        }
      }
      bucketStr += "null";
      console.log(bucketStr);
    }
  }
}