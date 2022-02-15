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

    return

 }

console.log( 'capitalizeLetters()',
    capitalizeLetters('ina of the mountain what is your wisdom'));