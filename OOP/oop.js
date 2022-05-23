// console.log('wah')

// PROCEDURAL PROGRAMMING
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(){
// }
//     return baseSalary + (overtime * rate);

// console.log(getWage())

// OBJECT ORIENDTED PROGRAMING (OOP)

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();

console.log(employee.getWage());

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// }

// console.log(circle.draw())
// console.log(circle.radius)
// console.log(circle.location.y)

// // Factory Function
// function createCircle(radius){
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)

// console.log(circle.constructor)

// // Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const another = new Circle(1)

// console.log(another.constructor)

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

// Iterate through an object
for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(key, circle[key]);

  // console.log(key)
  // console.log(circle[key])
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius.");

// CLOSURES
//example1:
const myName = "Josh";

function printName() {
  console.log(myName);
}

printName();

//example2:
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// NOTE: the inner function has access to the outer function parameters
// or anything withing the parental scope

//RECURSION
//a function that calls itself

function power(base, exponent) {
  // short-circut
  if (exponent == 0) {
    return 1;
  } else {
    // acts as a counter/iterates  --1
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

// RECURSIVE EXAMPLE
/**Code Block
 * The inner function find() does the recursing
 * find() takes two param: current, history
 * current: the current number
 * history: the string that records how the number is reached
 * if it finds a solution it returns the string of numbers it went through to reach this num
 * if no solution can be found starting from this number, it return null. Which will remove the last attempt
 *
 *
 */
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `(${history} * 3)`)
      );
    }
  }
  return find(1, "1");
}

// console.log(findSolution(24));
// Output: (((1 * 3) + 5) * 3)

console.log(findSolution(13));
// Output: (((1 * 3) + 5) + 5)

// RECURSIVE EXAMPLE 2

/** Code Block:
 * printFarmInventory()
 * takees 2 params: `cows` and `chickens`
 * init a var cowString that contains string of cows value
 * iterate throught the length of the var 3 times so we alway have three digits
 * eg. 000
 * each iteration add to the string "0"
 *
 */

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  // console.log(typeof cowString)

  while (cowString.length < 3) {
    cowString = "0" + cowString;
    console.log(cowString);
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  // console.log(typeof chickenString)

  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
    console.log(chickenString);
  }

  console.log(`${chickenString} Chickens`);
}

printFarmInventory(7, 11);
/**Output: 007 Cows,
           011 Chickens
*/

// REFACTOR

// BEAN COUNTING
function countChar(string, char) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// ➡ 2
console.log(countChar("kakkerlak", "k"));
// ➡ 4
