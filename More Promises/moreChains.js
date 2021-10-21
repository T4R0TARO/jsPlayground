//Promise API
function addFive(n) {
    return n + 5;
}

function double(n) {
    return n * 2 
}

function levelUp(n){
    return n + ` ⚔`
}

function finalValue(nextValue) {
    console.log(`The final value is ${nextValue}`);
}

// Create new Promise
const mathPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        // resolve promise if 'value' is a number; otherwise, reject it
        if(typeof value === 'number'){
            resolve(value);
        } else {
            reject('You must specify a number value.')
        }
    }, 1000)
})

// Promise Interaction and Chaining 
// Chaining promises with then() is useful when we need multiple functions to run asynchronously 

const value = '5';
mathPromise
    .then(addFive)
    .then(double)
    .then(addFive)
    .then(double)
    .then(double)
    .then(levelUp)
    .then(finalValue)
    .catch( err => console.log(err)) // catch() handles reject()


