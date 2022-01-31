function factorial(num){
    let result = 1;

    if(num === 0) return 0;
    if(num === 1) return 1;

    for(let i = num; i > 1; i--){
        result *= i;
    }
    return result;
}

// refactor
console.log(factorial(4))// 24