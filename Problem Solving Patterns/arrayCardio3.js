// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh';

// function reverseString(string){
//     return string.split('').reverse().join('');
// }

///////////////

// Arrow Function
const reverseString = (string) => string.split('').reverse().join('');

console.log('reverseString()',
    reverseString('hello')
)

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(string){
    let reverseString = string.split('').reverse().join('');
    if( string === reverseString) return true;
    return false;
}

console.log('isPalindrome()',
    isPalindrome('racecar'),
    isPalindrome('hello')
)

 // CHALLENGE 3: REVERSE AN INTEGER
 // Return an integer in reverse
 // ex. reverseInt(521) === 125

 function reverseInt(int){
    let changeToString = int.toString().split('').reverse().join('');
    let parsedString = parseInt(changeToString);
    return parsedString;
 }
 
 console.log('reverseInt()',
    reverseInt(12345)
 )

 //CHALLENGE 4: CAPITALIZE LETTERS
 //Return a string with the first letter of every word capitalized
 // ex. capitalLettters('i love javascript') === 'I Love Javascript'

 function capitalizeLetters(str){
    //  const strArr = str.toLowerCase().split(' ');

    //  for(let i = 0; i < strArr.length; i++){
    //     //create substring of index 0 char and capitalize  // create substring of word starting at index 1 // add both substrings together
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    //  }
    //  // return return updates strArr array and join() the items back to a string
    //  return strArr.join(' ');

    //////map()/////////////
    return str
    .toLowerCase()
    .split(' ')
    .map( word => word[0].toUpperCase() + word.substring(1))
    .join(' ');

    //////Regex////////////
    // return str.replace(/\b[a-z]/gi, function(char) {
    //     return char.toUpperCase();
    // });

 }

console.log( 'capitalizeLetters()',
    capitalizeLetters('ina of the mountain what is your wisdom'));

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'

function maxCharacter(str) {
    //create empty object
    const charMap = {};
    //create an empty value 
    let maxNum = 0;
    //create an empty string
    let maxChar = '';

    //split string by char//forEach char
    str.split('').forEach(function(char) {
        //if char appears increase incremently
        if(charMap[char]) {
            charMap[char]++;
        } else {
            //if char appears once have char equal 1
            charMap[char] = 1;
        }
    });
  
    // let char in in charMap 
    //  if  char is greater than maxNum // have maxNum take the value of char
    //  have maxChar equal the char 
    for(let char in charMap){
        //debugger
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    // return maxChar
    return maxChar;
}

console.log('maxCharacter()',
    maxCharacter('javascripttttt')
)

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
    // create loop that outputs numbers 1-100
    // if number is multiple of 3 print "Fizz"
    // if number is multiple of 5 print "Buzz"
    // if number is multiple of both 3 and 5 print "FizzBuzz"
    // print num or string

    ///////////////////////////////
    // let output = '';
    for(let i = 1; i <= 100; i++){
        
        if(i % 3 === 0)
        console.log("Fizz")

        if(i % 5 === 0)
        console.log("Buzz")

        if(i % 3 === 0 && i % 5 === 0)
        console.log("FizzBuzz");

        console.log(i)
    }
   
}

console.log('fizzBuzz()',
    fizzBuzz()
)