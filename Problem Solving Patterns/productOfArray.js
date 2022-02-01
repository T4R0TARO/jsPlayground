
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


