// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh';

//split string into an array of char 
//reverse array 
//join chars back to string
const revereseString = str => str.split('').reverse().join('')

console.log('reverseString()',
    revereseString('hello')
)

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
const isPalindrome = str => {
    const reversedStr = str.split('').reverse().join('');
    if (reversedStr === str) return true;
    return false;
}

console.log('isPalindrome()',
    isPalindrome('boob')
)
 // CHALLENGE 3: REVERSE AN INTEGER
 // Return an integer in reverse
 // ex. reverseInt(521) === 125
const reverseInt = int => {
    let numToString = int.toString().split('').reverse().join('');
    let parsedString = parseInt(numToString);
    return parsedString;
}
 
console.log('reverseInt()',
    reverseInt(12345)    
)
 //CHALLENGE 4: CAPITALIZE LETTERS
 //Return a string with the first letter of every word capitalized
 // ex. capitalLettters('i love javascript') === 'I Love Javascript'
 
 //lowercase
 //split
 //map
 //join

 function capitalizeLetters(sent) {
    return sent
    .toLowerCase()
    .split(' ')
    .map(function(word){
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ')
 }
 

console.log('capitalizeLetters()',
    capitalizeLetters('ina, of the mountain, what is you wisdom.')
)

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str){
    let charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    });

    // return charMap;

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar

}

console.log('maxCharacter()',
    maxCharacter('takodachiii')
)

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if( i % 3 === 0 && i % 5 === 0)
        console.log('FizzBuzz')
        if( i % 3 === 0)
        console.log('Fizz')
        if( i % 5 === 0)
        console.log('Buzz')
        console.log(i)
    }
}

// console.log('fizzBuzz()',
//     fizzBuzz()
// )