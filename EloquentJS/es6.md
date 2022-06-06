## Primitive Types vs Reference Types

### Primitive

- undefined
- null
- boolean
- number
- string
- symbol

### Reference

- object
- arrays
- functions

### VAR, LET, CONST

VAR: accessible within the function it is defined in

LET: accessible within the block in which they are defined can be reassigned

CONST: accessible within the block in which they are defined but is constant so it can't be reassigned

### Functional Program

```js
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();
```

### OBJECTS

Accessing elements from an object

```js
const personOG = {
  name: "Josh",
  walk() {
    console.log(this);
  },
  talk() {},
};

//access talk() method
personOG.talk();
//access `name:` property
personOG.name = "";
```
