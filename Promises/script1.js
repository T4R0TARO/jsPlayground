// Create a promise
let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

// Interact with a promise
/** Promises
 *  Promises are great when you need to do something thats going to take a long time in the background 
 *  Such as downloading a img from a different server 
 *  And you dont want everything to wait for it to load
 *  We want are code to continue while our elements load 
 *  We also want to 'catch' it to see if it has failed
 * 
 */

    // then will be called if the conditional is successful
// p.then((message) => {
    // console.log('This is in the then ' + message)
    // catch will be called if the conditional fails
// }).catch((message) => {
    // console.log('This is in the catch ' + message)
// })



// Convert callbacks into promises
const userLeft = false
const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//     if(userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })

//     } else if(userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subcribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })



function watchTutorialCallbackPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subcribe')
        }
    })
}

watchTutorialCallbackPromise().then((message) => {
    console.log('Success: ' + message)
}).then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

