import "./styles.css";
import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

//console.log(test.length(), test.getCurrentLoadLevels());

test.set('dog', 'white');
test.set('apple', 'green');
test.set('grape', 'green');
test.set('jacket', 'black');

test.set('moon', 'silver');
test.set('moon', 'knight');
test.set('dog', 'pluto');
test.set('lion', 'king');

console.log(test.remove('apple'));
console.log(test.remove('lion'));
console.log(test.length(), test.getCurrentLoadLevels());

console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.print();
