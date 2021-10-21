function onResolve() {
    console.log('Your order is ready. Come and get it!')
}

function onReject() {
    console.log(Error('Oh no! There was a problem with your order'))
}

//Promise 
const breakfastPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (order) {
            resolve()
        } else {
            reject();
        }
    }, 3000)
})

const order = false;
breakfastPromise
    .then(onResolve)
    .catch(onReject)


    