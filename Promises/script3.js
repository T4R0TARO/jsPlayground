// Create two functions: onResolve and onReject, each logs a message to the console
function onResolve() {
    console.log('Your order is ready. Come and get it!');
}

function onReject() {
    console.log(Error('Oh no! There was a problem with your order.'))

}

// In the Promise contructor, call resolve() if order is true, and reject() if it's false

const breakfastPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if (order){
            resolve()
        } else {
            reject()
        }
    }, 3000)
});



// Next, pass `then` a reference to `onResolve` and `catch` a reference to `onReject`

const order = true;
breakfastPromise
.then(onResolve)
.catch(onReject)

const order = true;
breakfastPromise
    .then(onResolve)
    .catch(onReject)
    
// The function `addFive` and `double` perform a math operation on a number (represented b `n`)
// The function `finalValue` prints a final value to the console

function addFive(n) {
    return n + 5
}

function double(n) {
    return n * 2
}

function finalValue(nextValue) {
    console.log(`The final value is ${nextValue}`)
}

const mathPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
        if (typeof value === 'number') {
            resolve(value)
        } else {
            reject('You must specify a number as the value.')
        }
    }, 1000);
});


// Promise Sequence
const value = 5;
mathPromise
    .then(addFive)
    .then(double)
    .then(finalValue)
    .catch( err => console.log(err))
// final value 20

// cont.
const value = 5;
mathPromise
    .then(addFive)
    .then(double)
    .then(addFive) // called twice
    .then(finalValue)
    .catch( err => console.log(err))
// final value 25

// cont.
const value = '5';
mathPromise
    .then(addFive)
    .then(double)
    .then(finalValue)
    .catch( err => console.log(err))
// You must specify a number as the value
// If a promise get rejected because `value` is a string, for example the sequence jumps straight to `catch` 



