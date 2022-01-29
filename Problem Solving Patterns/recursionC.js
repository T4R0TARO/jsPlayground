
function power(base,exponent){
    let pow = 1;
    
    if(exponent === 0){
        return 1
    }
    
    for(let i = 0; i < exponent; i++){
        pow = pow*base;
    }
    
    return pow
     
}

console.log(power(2,1)) // 1
console.log(power(2,2)) // 4
console.log(power(2,3)) // 8
console.log(power(2,4)) // 16

 
 
 