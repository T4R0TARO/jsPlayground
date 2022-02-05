//function accepts string 
function reverseWords(str){

    //splits string by space & creates new array
    //reverse item order in the array 
    //join the array items with a space between 
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('Hello World!')); // !World Hello

//write a function that reverses a string recursively
function reverseString(str){    
    //base case
    if (str.length <= 1) return str;
    
    //contain and return the first item of the string
    //call reverseString with new str starting at the index 1
    return reverseString( str.slice(1)) + str[0];
}

// SAMPLE INPUT / OUTPUT
//write a function that accepts an array and callback.
//the function returns true...
//if a single value in the array returns true when passed to the callback
//otherwise return false

//callback function
function isOdd(val) {
    return val % 2 !== 0;
}

function someRecursive(array, callback){
//     //base case
        //if the array is empty return false
        if(array.length === 0) return false;
        //if callback function accepts an array with a item in index 0 return true 
        if(callback(array[0])) return true;
        //recusive loop
        //return recursive function passing array starting at index 1 and the callback 
        return someRecursive(array.slice(1), callback);
}

 someRecursive([2,4,6,8,9], isOdd) //true


//FIB SEQUENCE
function fib(num){
    //base case
    // if(num <= 2 ) return 1;
    // // fib( 4 - 1) + fib(4 - 2)
    // //        3            2
    // // return the `num`th which is the sum of the prev two numbers
    // //   previous num  + prev previous num 
    // return fib(num -1) +  fib(num -2);
    
    const result = [0,1];
 
    
    for(let i = 2; i <= num; i++){
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i -2];
        result.push(prevNum1 + prevNum2);
    }
        return result.pop(); 
}

  //eg.      1,1,2,3,5,8, 13,21,34,55
  //fib(10)  1,2,3,4,5,6, 7, 8, 9, `10`  
fib(10) //55