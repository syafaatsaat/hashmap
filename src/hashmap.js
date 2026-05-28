import { LinkedList } from "./linked-list.js";

export class HashMap {
  constructor(loadFactor=0.75) {
    this.buckets = new Array(16);
    this.loadFactor = loadFactor;
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
          this.set(iterNode.value.key, iterNode.value.value);
          iterNode = iterNode.nextNode;
        }
      }
    }
  }

  getCurrentLoadLevels() {
    return this.length() / this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);
    this.checkIndexOutOfBounds(index);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();
    }
    
    const linkedList = this.buckets[index];
    if (linkedList.size() > 0) {
      let iterNode = linkedList.head;
      while (iterNode) {
        if (iterNode.value.key === key) {
          iterNode.value.value = value;
          return;
        }
        iterNode = iterNode.nextNode;
      }
    }

    linkedList.append({key: key, value: value});

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
      let iterNode = linkedList.head;
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

    const linkedList = this.buckets[index];
    const size = linkedList.size();
    if (linkedList && size > 0) {
      let iterNode = linkedList.head;
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

  length() {
    let result = 0;
    this.buckets.forEach(bucket => {
      if (bucket) {
        result += bucket.size();
      }
    });

    return result;
  }

  clear() {
    this.buckets.forEach(bucket => {
      if (bucket) {
        while (bucket.head) {
          bucket.pop();
        }

        bucket = null;
      }
    });
  }

  keys() {
    const keysArray = [];
    this.buckets.forEach(bucket => {
      if (bucket) {
        let iterNode = bucket.head;
        while (iterNode) {
          keysArray.push(iterNode.value.key);
          iterNode = iterNode.nextNode;
        }
      }
    });

    return keysArray;
  }

  values() {
    const valuesArray = [];
    this.buckets.forEach(bucket => {
      if (bucket) {
        let iterNode = bucket.head;
        while (iterNode) {
          valuesArray.push(iterNode.value.value);
          iterNode = iterNode.nextNode;
        }
      }
    });

    return valuesArray;
  }

  entries() {
    const entriesArray = [];
    this.buckets.forEach(bucket => {
      if (bucket) {
        let iterNode = bucket.head;
        while (iterNode) {
          entriesArray.push(
            [iterNode.value.key, iterNode.value.value]
          );
          iterNode = iterNode.nextNode;
        }
      }
    });

    return entriesArray;
  }

  print() {
    for (let i = 0; i < this.capacity; ++i) {
      let bucketStr = `[${i}] => `;
      if (this.buckets[i]) {
        let iterNode = this.buckets[i].head;
        while (iterNode) {
          bucketStr += `[${iterNode.value.key}, ${iterNode.value.value}] => `;
          iterNode = iterNode.nextNode;
        }
      }
      bucketStr += "null";
      console.log(bucketStr);
    }
  }
}