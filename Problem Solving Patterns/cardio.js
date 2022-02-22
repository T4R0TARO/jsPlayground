// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh';
function reverseString(str){

}

// console.log('reverseString()',
//     reverseString('takodachi')
// )

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str){

}

// console.log('isPalindrome()',
//     isPalindrome('racecar')
// )

 // CHALLENGE 3: REVERSE AN INTEGER
 // Return an integer in reverse
 // ex. reverseInt(521) === 125
function reverseInt(int){

}

// console.log('reverseInt()',
//     reverseInt(12345)
// )

 //CHALLENGE 4: CAPITALIZE LETTERS
 //Return a string with the first letter of every word capitalized
 // ex. capitalLettters('i love javascript') === 'I Love Javascript'
function capitalLetters(sen){

}

// console.log('capitalLetters()', 
//     capitalLetters('ina of the mountain, what is your wisdom')
// )

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str){

}

// console.log('maxCharacter()', 
//     maxCharacter('takodachiiii')
// )

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(){

}

// console.log('fizzBuzz()',
//     fizzBuzz()
// )

// ARRAY CARDIO 2

// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
    // Create a filtered array 
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)

    //Sort by length 
    const sorted = wordArr.sort(function(a,b){
        return b.length - a.length;
    })

    // If multiple words put into array 
    const longestWordArr = sorted.filter(function(word){
        return word.length === sorted[0].length;
    })

    //Check if more than one array val
    if(longestWordArr  === 1){
        return longestWordArr[0]
    } else {
        return longestWordArr;
    }
}
  
  console.log('longestWord()',
    longestWord('Ina of the mountain, what is your wisdom???')
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
  

