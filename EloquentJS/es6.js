/**
 * Primitive Types      |       Reference Types
 *
 * undefined                    * object
 * null                         * arrays
 * boolean                      * functions
 * number
 * string
 * symbol
 *
 */

// REVIEW
/**
 * let/const
 * objects
 * this
 * arrow func
 * destructuring
 * spread operator
 * classes
 * modules
 */

// VAR, LET, CONST
// var ➡ accessible within function it is defined in
// let ➡ accessible within the block in which they are defined can be reassigned
// const ➡ accessible within the block in which they are defined but is constant so it cant be reassigned

function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

// OBJECTS
const personOg = {
  name: "Josh",
  walk() {
    console.log(this);
  },
  talk() {},
};

//access talk() method
personOg.talk();

personOg.name = "";

// this can be a form with input value
const targetMember = "name";

//access "name" property ➡ reassgin value "Ina"
// person["name"] = "Ina";

//access value
personOg[targetMember.value] = "Ina";

// `this` return a reference to the current object

const person2 = {
  name: "Gura",
  walk() {
    console.log(this);
  },
};

person2.walk();
// bind() can set the value of `this` perm.
const walk = person2.walk.bind(person2);
walk();

const square1 = function (number) {
  return number * number;
};
console.log(square1(3));
// 9

const square2 = (number) => number * number;
console.log(square2(6));
// 36

// arrow functions DO NOT rebind `this` keyword
// if you call a stand alone function outside of an object that function will return window
const person3 = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

person3.talk();

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

// OBJECT DESTRUCTURING
const address = {
  street: "",
  city: "",
  country: "",
};

/** to access the object properties
 * const street = address.street;
 * const city = address.city;
 * const country = address.country;
 */

//       ⬇

// destructured ver.
// create a three const from the object `address`
const { street, city, country } = address;

//what if you want to rename a const var? 🤔

const { street: st } = address;

// SPREAD OPERATOR
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
const combined2 = [...first, ...second];

console.log(combined);
console.log(combined2);

const clone = [...first];
console.log(first);
console.log(clone);

//SPREAD OPERATOR W/ OBJECTS
const first1 = { name: "Josh" };
const second2 = { job: "Instructor" };
// add new key value pair
const combinedObj = { ...first1, ...second2, location: "Japan" };

// clone obj
const clone2 = { ...first1 };
console.log(combinedObj);
console.log(clone2);

// CLASSES
// when you have a obj containing a method you want to create a class for that obj
// we do this so that if there is a bug is the method we would have to fix all the methods in every obj

// const person4 = {
//   name: "Josh",

// };

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

// How to create a new Person object with class?
const person = new Person("Josh");
const people = new Person("Ina");
console.log(person);
console.log(people);
