
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

//write a function which accepts a number and returns the result
function factorial(num){
    // declare result var
   let result = 0;
   
   // base case 
   if(num === 0) return 1;

   
   //loops the value of var num
   for(let i = 1; i <= num; i++){
       //incremently adds product of i*num to var result
        let nextNum = i + 1;
       //have i * nextNum
        let product =  i * nextNum;
  
        
        //ERR: multiplying itself the value of num times eg. 1*1*2*2*3*3*4*4*5*5*6*6*7*7
        //FIX:  eg. 1*2*3*4*5*6*7
        //          i nextNum
        console.log(product)
   }

   for(let j = 1;  j <= num; j++){

       console.log(j)
   }
   
   //return updated result
   return result;
}

factorial(7) //5040


 
 
 