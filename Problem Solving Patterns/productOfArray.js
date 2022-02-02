
function productOfArray(arr){
    //write a empty var called results
    let product = 1;
    //write a base case if arr is empty or 0
    if(arr === []) return 1
    
    //loop through arr
    for(let i = 1; i < arr.length; i++){

      //multiply items in arr and have items update product value
        product *= arr[i];
    }

    //return results
    return product;
}

console.log(productOfArray([1,2,3])) // 6;
console.log(productOfArray([1,2,10,100])) // 2000;
console.log(productOfArray([1,2,3,0])) // 0;


//SumRange
function recursiveRange(num){
  if(num === 0) return 0;
  
  return num + recursiveRange(num - 1)
}

//write a recursive function called `fib` which accepts a `num`
// fib: starts at 1 and 1 and every number afterwards is to equal the sum of the previous two numbers
//returns the nth number in the fib

  //eg.      1,1,2,3
  //fib(4)   1 2 3 `4`
  // returns the `num`th of the fib sequence
  
  //eg.      1,1,2,3,5,8, 13,21,34,55
  //fib(10)  1,2,3,4,5,6, 7, 8, 9, 10  

  
  function fib(num){
    let a = 1;
    let b = 0;
    let temp;

    while(num >= 0){
      temp = a; 
      a = a + b;
      b = temp; 
      num--;
    }
    return b;
  }

