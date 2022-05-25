let a = 10;
let b = "Hi";
let c = a;
c = c + 1;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

// ==========================================================================

// let x = [1, 2];
// let y = [1, 2];

// console.log(`x === y ${x === y}`);
// // ➡ false
// console.log(`x == y ${x == y}`);
// // ➡ false

// ==========================================================================

let x = [1, 2];
// let y = x;
console.log(`x = ${x}`);
add(x, 3);
console.log(`x = ${x}`);

// console.log(`x === y ${x === y}`);
// // ➡ true
// console.log(`x == y ${x == y}`);
// // ➡ true

function add(array, element) {
  array.push(element);
}

/** primative values passed by values
 * numbers
 * strings
 * booleans
 * undefined
 * null
 * */

/** other values passed by reference and can be modified
 * arrays
 * objects
 * classes
 * */
