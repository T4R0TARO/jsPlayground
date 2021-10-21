
function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/*=================
 Async + Await
====================*/

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }
    
    await wait(5000)
    return fruits[name];
}

getFruit('peach').then(console.log)


// try adding await to the `getFruit()` and then try Promise.all

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
    // return Promise.all([a, b]);
}

makeSmoothie().then(console.log)


/*=================
Error Handling
====================*/

const badSmoothie = async() => {
    try {
        
        const a = await getFruit('pineapple');
        const b = await getFruit('strawberry');
        const smoothie = Promise.all([a, b]);

        throw 'broken!'

        return smoothie;
    
    } catch (err) {
         console.log(err)
        //  return `😅 We are going to be fine...`
        
         throw `💩 It's broken!`
    }
}

// return the error is like ignoring it and replacing it with a new value does not break the chain
// in contrast, if we use `throw` we give the user a error message and break the promise chain 

badSmoothie()
    .then(val => console.log({ val }))
    .catch(err => console.log({ err }))