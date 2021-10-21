/**
 WebDevSimplified example
 */
console.log('wah')

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if(location === 'Google') {
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

/*===============
     Promises
 =================*/

// makeRequest('Google')
// .then(response => {
//     console.log('Response Recieved')
//     return processRequest(response)
// })
// .then(processedResponse => {
//     console.log(processedResponse)
// })
// .catch(err => {
//     console.log(err)
// })


/*===============
     Async/Await
 =================*/

// async function doWork() {
//    const response = await makeRequest('Google')
//    console.log('Response Recieved')
//    const processedResponse = await processRequest(response)
//    console.log(processedResponse)
// }
// doWork()



// How do we handle errors with Async/Await?

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
 



