# HashMap

Making my own HashMap, which is a practice as a part of The Odin Project 
curriculum.

## Features

1. `HashMap` => stores [key, value] pairs where keys are unique in buckets that 
will self-expand when load levels have exceeded a certain threshold
2. `HashSet` => similar to `HashMap` but stores unique keys only

### Functions
 
- `hash(key)` => takes a key and produces a hash code with it
- `set(key, value)` [ONLY HASHMAP] => takes two arguments: the first is a key, 
and the second is a value that is assigned to this key. if a key already exists, 
then the old value is overwritten
- `set(key)` [ONLY HASHSET] => takes a single argument: a key. if the key 
already exists, then the function call is returned with no changes to the 
hash set
- `get(key)` => takes one argument as a key and returns the value that is 
assigned to this key. if a key is not found, return null
- `has(key)` => takes a key as an argument and returns true or false based on whether or not the key is in the hash map/set
- `remove(key)` => takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map/set, it should return false
- `length()` => returns the number of stored keys in the hash map/set
- `clear()` => removes all entries in the hash map/set
- `keys()` => returns an array containing all the keys inside the hash map/set
- `values()` [ONLY HASHMAP] => returns an array containing all the values
- `entries()` [ONLY HASHMAP] => returns an array that contains each key, value 
pair. example: `[[firstKey, firstValue], [secondKey, secondValue]]`
- `print()` => prints hash map/set
