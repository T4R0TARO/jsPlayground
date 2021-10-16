// Create a new Promise 
let p = new Promise((resolve, reject) => {
    let a = 1 + 1 // this is what the promise`promises` if it fails then the reject method fires
    if (a == 2) {
        resolve('Success') //if it passes
    } else {
        reject('You can pass anything here') // else it fails 
    }
})


/**How to interact with promises?
 * .then
 * anything inside of a `.then()` will run for `resolve()`
 * why? because I `promised` that 1 + 1 is 2 so `then` this code will do something afterward
 * Next, in order to catch an error we use the `.catch()` and will catch any errors which is our `reject()` state
 * 
 */
p.then((message) => {
    console.log(`This is in the then ` + message)
}).catch((message) => {
    console.log(`This is in the catch ` + message)
})

