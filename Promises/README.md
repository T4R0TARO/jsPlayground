# Promises
1. What is a promise?
A promise in JS represents an unknown value than may be known in the future.

---------------------------------------------
Think of a ride hailing app like uber.
- First, make a request to the driver.
- Request pending, the driver promises to pick you up ð±ð 
- In the future, if everything went according well the driver picked you up and the request is fufilled â
- In some cases, if anything goes wrong or the driver rejects your request you would have to catch a ride somewhere else â
- Either way, the original request is settled

---------------------------------------------
2. How to create a promise? 
## Promise of future values/ CREATE
- Executors `resolve, reject`, function that resolves a value, or rejects(error)

```js
const ride = new Promise((resolve, reject) => {


})
```
---------------------------------------------
## /CONSUME
3. You will be consuming promises to use the result of ansynchronous operation in your code 
- `then` function that handles fulillment 

```js
ride
    .then(value => {
        console.log(value);
    })
```
---------------------------------------------
## Fulfillment and errorhandling
```js
const ride = new Promise((resolve, reject) => {
    if (arrived) {

        resolve('driver arrived ð');

    } else {

        reject('ohð© driver bailed');
    
    }

})
```


## Consuming Promises
then() --> resolve()
catch() --> reject()
finally() --> runs code regardless

```js
ride
    .then(value => {
   
        console.log(value);
        // diver arrived ð
   
   })

   .catch(error => {
   
        console.log(error);
        // driver bailed ð¢

})

    .finally(() => {
        console.log('all setteled')
    })
```


