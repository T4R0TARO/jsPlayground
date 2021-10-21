// // Create a new Promise 
// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1 // this is what the promise`promises` if it fails then the reject method fires
//     if (a == 2) {
//         resolve('Success') //if it passes
//     } else {
//         reject('You can pass anything here') // else it fails 
//     }
// })


/**How to interact with promises?
 * .then
 * anything inside of a `.then()` will run for `resolve()`
 * why? because I `promised` that 1 + 1 is 2 so `then` this code will do something afterward
 * Next, in order to catch an error we use the `.catch()` and will catch any errors which is our `reject()` state
 * 
 */
// p.then((message) => {
//     console.log(`This is in the then ` + message)
// }).catch((message) => {
//     console.log(`This is in the catch ` + message)
// })


// Promise
let shoesAvailable = new Promise((resolve, reject) => {
    let inStock = true;
    let customerPickup = false;
    
    if(inStock){
        resolve('We have your shoes')
    } else {
        reject('Sorry, there was an error')
    }
})

// Promise API
let sufficientFunds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Yay! Enough money in the bank"), 1000)
    })
}

let transaction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Transaction went through"), 2000)
    })
}

let smallTalk1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Lovely weather we're having"), 3000)
    })
}

let smallTalk2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("It sure is Lively today"), 4000)
    })
}

let thankYou = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Thank you very much!"), 5000)
    })
}
  
//Promise Interaction and Chaining
// add to the chain for more practice


shoesAvailable
    .then((response) => {
        console.log(response);
        return sufficientFunds();
    })
    .then((response) => {
        console.log(response);
        return transaction();
    })
    .then((response) => {
        console.log(response)
        return smallTalk1();
    })
    .then((response) => {
        console.log(response)
        return smallTalk2();
    })
    .then((response) => {
        console.log(response);
        return thankYou();
    })
    .then((response) => console.log("Finished!" + response))
    .catch((err) => console.log(err))

    // Promise all fire all functions 
    Promise.all([shoesAvailable, sufficientFunds(), transaction()])
        .then((values) => console.log(values))




