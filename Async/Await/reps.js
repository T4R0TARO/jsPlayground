function wait(ms = 0){
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getFruit = async(name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    }

    await wait(5000)
    return fruits[name];
}

getFruit('peach')
.then(console.log)

const makeSmoothie = async() => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
    // return Promise.all([a, b]);
}

makeSmoothie().then(console.log)