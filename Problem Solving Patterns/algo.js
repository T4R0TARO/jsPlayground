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
