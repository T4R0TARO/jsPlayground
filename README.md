### Create a new Promise
```js
let p = new Promise((resolve, reject) => {
    //Condition to promise 
    let a = 1 + 1
    if (a == 2) {
        //condition is successful fire `resolve()`
        resolve('Success')
    } else {
        //condition is fails fire `reject()`
        reject('You can pass anything here')
    }
})

```
---------------------------------------------------------------------------------------
### Interact with the promise
Now that we created a new Promise object  we can now interact with the promise object. We can chain promises with `then()` and have error caught with `catch()`


```js
// then()
p.then((message) => {console.log(`This is in the then ` + message)
// catch()
}).catch((message) => {
    console.log(`This is in the catch` + message)
})
```
----------------------------------------------------------------------------------------
### Converting Callback to Promises 

```js
const userLeft = false
const userWatchingCatMeme = false 

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name:'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
```

### Convert callbacks to promises cont...
```js
    function watchTutortialPromise() {
        // create and return a Promise object 
        return new Promise((resolve, reject) => {
            if(userLeft){
                // replace error conditions with reject
                reject({
                    name: 'User Left',
                    message: ':('
                })
            } else if (userWatchingCatMeme) {
                // replace error conditions with reject
                reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
                })
            } else {
                // replace succesfull callbacks to resolve
                resolve('Thumbs up and subscribe')
            }
        })
    }

    watchTutorialPromise()
    .then((message) => {
        console.log('Success: ' + message)
    }).catch((error) => {
        console.log(error.name + ' ' + error.message)
    })
```

### Promise.all
```js
// We want to run all these promises in parallel with each other
// We dont want to wait for one thing to run and have everything else wait
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Record')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Record')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Record')
})

// Promise.all()
// Will run all promises in array
// When all promises are complete 
// `then` fire console.log(messages)
// 
Promise.all([
    recordVideoOne,  
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})

```

