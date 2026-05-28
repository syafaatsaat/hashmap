import "./styles.css";
import { HashMap } from "./hashmap.js";
import { HashSet } from "./hashset.js";

// const test = new HashMap();

// test.set('apple', 'red');
// test.set('banana', 'yellow');
// test.set('carrot', 'orange');
// test.set('dog', 'brown');
// test.set('elephant', 'gray');
// test.set('frog', 'green');
// test.set('grape', 'purple');
// test.set('hat', 'black');
// test.set('ice cream', 'white');
// test.set('jacket', 'blue');
// test.set('kite', 'pink');
// test.set('lion', 'golden');

// //console.log(test.length(), test.getCurrentLoadLevels());

// test.set('dog', 'white');
// test.set('apple', 'green');
// test.set('grape', 'green');
// test.set('jacket', 'black');

// test.set('moon', 'silver');
// test.set('moon', 'knight');
// test.set('dog', 'pluto');
// test.set('lion', 'king');

// console.log(test.remove('apple'));
// console.log(test.remove('lion'));
// console.log(test.length(), test.getCurrentLoadLevels());

// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());
// test.print();

const test = new HashSet();

test.set('moon');
test.set('squirrel');
test.set('doctor');
test.set('black');
test.set('luna');
test.set('white');
test.set('jeff');
test.set('scarlet');
test.set('jean');
test.set('peni');
test.set('thor');
test.set('magneto');

test.set('rogue');


console.log(test.remove('hotr'));
console.log(test.length(), test.getCurrentLoadLevels());

console.log(test.keys());
//console.log(test.values());
//console.log(test.entries());

test.print();
