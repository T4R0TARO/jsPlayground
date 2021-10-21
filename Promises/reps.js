// Helper Functions/ Interact with the function 
const doesSomething1 =  () => setTimeout( () => console.log('did something 💥 1'), 3000)

const doesSomething2 = () => setTimeout( () => console.log('did something 🌌 2'), 5000)

const doesSomething3 = () => console.log('did something 🌠 3')

const errorHandler =  () => setTimeout( () => console.log('did something 🌋 because of error cancel promise chain'), 5000)

const runNoMatterTheOutcome =  () => console.log('🏃‍♂️🏃‍♂️🏃‍♂️ regardless ')


// Create new Promise 
const examplePromise = new Promise ((resolve, reject) => {
    
    const exampleCondition = true;    

    if (exampleCondition) {
        resolve('The promise was fufilled')
    } else {
        reject('There was an error')
    }

})


// Promise Chain 
examplePromise
.then((response) => {
    console.log(response)
    doesSomething1()
})
.then(doesSomething2)
.then(doesSomething3)
.catch( (err) => {
    console.log(err)
    errorHandler()   
})
.finally(runNoMatterTheOutcome)


