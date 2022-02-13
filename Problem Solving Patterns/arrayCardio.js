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
    
    for(let i = 0; i < oldArr.length; i++){
        if(Array.isArray(oldArr[i])){
            newArray = newArray.concat(flatten
                (oldArr[i]))
        } else {
            newArr.push(oldArr[i])
            }
        }
        return newArr
    }
console.log(
    "flatten()",
    flatten('')
)
