// We want to run all these promises in parrallel so we dont have to wait for one to finish before starting the next   
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
})

/** Promise.all()
 * We send in a array of all the promises we want to fire  
 * Will run every promises and when its complete 
 * It will call `.then` or `.catch` depending on whether they resolve or reject
 * In this example all the promises pass
 * Add a `.then` and will send us an array of all successfull messages
 */

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})



