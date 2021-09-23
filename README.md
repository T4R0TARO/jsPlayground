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