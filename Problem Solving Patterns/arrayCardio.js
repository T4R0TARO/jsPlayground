// Array Cardio 
//Challenge 1: Reverse a String
//Return a string in reverse 
//ex. reverseString('hello') === 'olleh'

function reverseString(str){
    let tempString = str.split('').reverse().join('');
    return tempString;
}

console.log(
    'reverseString()',
    reverseString('wah')
) // expect: 'haw'

//Challenge 2: Validate a Padindrome
//Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    let reverseString = str.split('').reverse().join('');
    return  str === reverseString; 
}


console.log(isPalindrome('apples')) //expect false

//Challenge 3: Reverse an Integer
//Return  an integer in reverse
//ex. reverseInt(521) === 125]

function reverseInt(int){
let changeToString = int.toString().split('').reverse().join('');
let parsedString =parseInt(changeToString);
return parsedString;
}

console.log(reverseInt(123456789))

// Write a function that takes an array of arrays and flattens them in a recursive way 

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(oldArr){
    let newArr = []; 
    
    for(let i = 0; i < oldArr.length; i++){
 
        //Array.isArray() checks if the passed value (oldArr[i]) is an Array 
        if(Array.isArray(oldArr[i])){
            //create newArray and combine the oldArr items together by calling the flatten function recursively
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            //else push the oldArr item in the newArr
            newArr.push(oldArr[i])
            }
        }

        // return the update newArr
        return newArr
    }

console.log(
    "flatten()",
    flatten([1, 2, 3, [4, 5] ])
)
// Write a function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array 
// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


function capitalizeFirst (arr) {
    let results = [];

    for(let i = 0; i < arr.length; i++){
            //First Letter 
            //arr[i].charAt(0).toUpperCase()
            //remaining letters
            //arr[i].slice(1)
        results.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    

    return results;

}

console.log(capitalizeFirst(['car','taco','banana']))
