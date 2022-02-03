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

