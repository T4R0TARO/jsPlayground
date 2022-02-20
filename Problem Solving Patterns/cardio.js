// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh';
function reverseString(str){
    return str.split('').reverse().join('')
}

// console.log('reverseString()',
//     reverseString('takodachi')
// )

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    if(reverseStr === str) return true;
    return false;
}

// console.log('isPalindrome()',
//     isPalindrome('racecar')
// )

 // CHALLENGE 3: REVERSE AN INTEGER
 // Return an integer in reverse
 // ex. reverseInt(521) === 125
function reverseInt(int){
    let intToStr = int.toString().split('').reverse().join('');
    let parsedStr = parseInt(intToStr);
    return parsedStr;
}

// console.log('reverseInt()',
//     reverseInt(12345)
// )

 //CHALLENGE 4: CAPITALIZE LETTERS
 //Return a string with the first letter of every word capitalized
 // ex. capitalLettters('i love javascript') === 'I Love Javascript'
function capitalLetters(sen){
    return sen
    .toLowerCase()
    .split(' ')
    .map(function(word){
        return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ')
}

// console.log('capitalLetters()', 
//     capitalLetters('ina of the mountain, what is your wisdom')
// )

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str){
    let charMap = {};
    let maxNum = 0;
    let maxChar = '';

    str.split('').forEach(function(char){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    })
    // return charMap;

    for(let char in charMap){
        if(charMap[char] > maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}
// console.log('maxCharacter()', 
//     maxCharacter('takodachiiii')
// )

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0){
            console.log('Fizz')
        } else if (i % 5 === 0){
            console.log('Buzz')    
        } else {
            console.log(i)
        }
    }
}
// console.log('fizzBuzz()',
//     fizzBuzz()
// )

// ARRAY CARDIO 2

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  }
  
  console.log('longestWord()',
    longestWord('ina of the mountain, what is your wisdom')
  )
  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {}
  
  console.log('chunkArray()',
    chunkArray()
  )
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {}
  
  console.log('flattenArray()',
    flattenArray()
  )
  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {}
  console.log('isAnagram()',
    isAnagram()
  )
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {}
  console.log('letterChanges()',
    letterChanges()
  )
  
