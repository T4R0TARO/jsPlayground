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

}