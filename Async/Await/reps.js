function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    }) 
}

// Creator Promise
function makePizza(toppings = []) {

    return new Promise(function (resolve, reject) {

        if(toppings.includes('pineapple')){
            reject('Seriously, Get out 🍍');
        }

        const amountOfTimeToBake = 500 * (toppings.length * 200)
        // wait 1 second for the pizza to cook:

        setTimeout(function () {
            resolve(`Here is your 🍕 pizza with the toppings ${toppings.join(' ')}`);
        }, amountOfTimeToBake)
        // if something went wrong, we can reject this promise;

    });
}


// try and catch
// try a bunch of stuff and if there is a problem catch will take care of it 

function handleError(err) {
    console.log('ohhh nooo');
    console.log(err)
}

async function go() {
    const pizza = await makePizza(['pineapple']);
    console.log(pizza)
    return pizza
}

function makeSafe(fn, errorHandler){
    return function() {
        fn().catch(errorHandler)
    }
}

const safeGo = makeSafe(go, handleError)
safeGo();


makeRequest('Google')
.then(response => {
    console.log('Response Recieved')
    return processRequest(response)
})
.then(processedResponse => {
    console.log(processedResponse)
})
.catch(err => {
    console.log(err)
})


async function doWork(){
    try {
        const response = await makeRequest('Google')
        console.log(response)
        const proccessedResponse = await processedResponse(respose)
        console.log(processedResponse)
    } catch(err) {
        console.log(err)
    }
}

doWork()