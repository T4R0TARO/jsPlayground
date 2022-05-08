# OBJECT ORIENTED PROGRAMING

- Encapsulation
  Wrapping in an object w/ properties and values and methods
- Abstraction
  Hide abstraction and reduce impact of change
- Inheritance
  Remove redundant code
- Polymorphism
  Refactor

## PROCEDURAL PROGRAMMING

CODE BLOCK

1. global var
2. getWage()
   - 10 \* 20
   - +30_000
3. Output

```js
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage() {
  return baseSalary + overtime * rate;
}

console.log(getWage());
```

## OBJECT ORIENTED PROGRAMMING (OOP)

- key: value pairs
- functions are methods

```js
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

employee.getWage();
```

### Object Literals

- key:value
- objects in objects
- functions are methods

```js
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
```

### Factrories

- When duplicating an object with behavior/ contains a method the impact of change increases
- When duplicating an object without behavior the different values will not affect each other

```js
// FACTORY FUNCTION
function createCircle(radius) {

    return = {
        radius: radius,
        draw: function(){
            console.log('draw')
        }
    }

}


const circle = createCircle(1)
circle.draw()

```

### Constructors

```js
// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const another = new Circle(1);
```

### Constructor Property

- every object has a built in contructor property that is used to reference the function it came from

```js

// FACTORY FUNCTION
function createCircle(radius) {
    return = {
        radius: radius,
        draw: function(){
            console.log('draw')
        }
    }
}
const circle = createCircle(1)

// Constructor Function
function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}
const another = new Circle(1)
```

```js
let x = {};

// let x = new Object()
```

### Function and Objects

```js

```
