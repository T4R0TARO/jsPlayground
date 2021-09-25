### What is a Mutation Method
1. What is a Mutation
    A change from its original form 
2. What is a Immutable Method
    It cannot change the orignal form

```js
        // Mutation Method
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        numbers.reverse();
        console.log(numbers);
        // Immutable 
        const pizzaSlice = numbers.slice(2,4); // cuts out a portion of the array 
        console.log(pizzaSlice);
```
When data is `slice()` out from an array it does NOT change the original form of the array.

When data is `reverse()` in an array it changes the order of the original form

**NOTE**: Anytime you use a mutation method but do NOT want to change the original form of the array you MUST make a COPY of the array then change the COPY.

```js
// Mutation Method
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// anytime you want to use a mutation method and NOT mutate the original arrya
// we need to take a copy of the array

    const numbersReversed = [...numbers]; 
    numbersReversed.reverse(); 
    
// This works too ⬇
    // const numbersReversed = [...numbers].reverse();
```
How Do I add items to and from and array?
```js
        // add item to the end 
        names.push('lux');
        console.log(names);

        // add item to the front
        const name2 = [...names, 'lux']; 
        names.unshift('poppy');

        // Immutable  way to is to create a copy of the original then add it to the copy
        const names3 = ['poppy', ...names];
        console.log(names3); 
```
`slice()` vs `splice()` use slice() 🍕 because it its immutable and wont change the original array 

How do i remove an item from an array?
