# Async Await

JS is a syncronous language meaning that it excute code in a one by one order waiting for the code to complete before moving on to the next line of code. But, it makes more sense to run other lines of code instead of waiting for one to complete. 

We can create a function that returns a Promise object. Resolve will handle the code if passed and Reject will fire if there are any errors.

 
```js
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        } else {
            reject('We can only take to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}
```

-----------------------------------------------------
## .then() allows you to continuously chain function together  and .catch() to handle errors

We can then call the function with the promise object and continuously attach then() which will handle all the resolve() responses

and vice versa catch()  will hand all the rejected() responses

```js
makeRequest('Google')
.then(response => {
    console.log('Response Recieved')
    return processRequest(response)
})
.then(processedResponse => {
    console.log(processedResponse)
})
.catch(err => {
    console.log(err)
})

```
-----------------------------------------------------
Async/Await gives us the same functionalty of promises but they cleaner and read likye syncronous JS

Attach async to function before we can use await

```js
async function doWork(){
    const response = await makeRequest('Google')
    console.log('Response Recieved')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
}

doWork()

```
-----------------------------------------------------
How do we handle erros with Async/await?
try and catch is a safety blanket it where we try everything and catch anything that fails

```js

async function doWork() {
    try {
        const response = await makeRequest('Facebook')
        console.log('Response Recieved')
        const processedResponse = await processRequest(response)
        console.log(processedResponse)    
    } catch (err) {
        console.log(err)
    }
 }
 doWork()
 
```

