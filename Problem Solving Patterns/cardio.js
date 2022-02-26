// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse 
// ex. reverseString('hello') === 'olleh';
function reverseString(str){
 return str.split('').reverse().join('')
}

console.log('reverseString()',
    reverseString('takodachi')
)

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not 
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str){
  //reverse str
  const reverseStr = str.split('').reverse().join('');
  //compare reverseStr to str
  if(reverseStr === str){
    return true;
  } else {
    return false;
  }
}

console.log('isPalindrome()',
    isPalindrome('racecar')
)

 // CHALLENGE 3: REVERSE AN INTEGER
 // Return an integer in reverse
 // ex. reverseInt(521) === 125
function reverseInt(int){
  //change int to str then reverse string
  const intToStr = int.toString().split('').reverse().join('');
  //change str to int
  const parsed = parseInt(intToStr)
  //return reversed int
  return parsed;
}

console.log('reverseInt()',
    reverseInt(12345)
)

 //CHALLENGE 4: CAPITALIZE LETTERS
 //Return a string with the first letter of every word capitalized
 // ex. capitalLettters('i love javascript') === 'I Love Javascript'
function capitalLetters(sen){
//make all char in str lowerCase
//split str into words
//map() str to words / uppercase first letter of word / + add substr of word starting at index 1
//join words back to str
return sen
.toLowerCase()
.split(' ')
.map(function(word){
  return word[0].toUpperCase() + word.slice(1)
})
.join(' ')
}

console.log('capitalLetters()', 
    capitalLetters('ina of the mountain, what is your wisdom')
)

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string 
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str){
// create empty object
  const charMap = {};
  let maxNum = 0;
  let maxChar = '';
// split string to char
  str.split('').forEach(function(char){
    if(charMap[char]){
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  })

// iterate through charMap obj
// if charMaps[char] items are greater than empty var have empty var take on the value 
// return the updated value
  for(let char in charMap){
    if(charMap[char] > maxNum){
      maxNum = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log('maxCharacter()', 
    maxCharacter('takodachiiii')
)

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

console.log('fizzBuzz()',
    fizzBuzz()
)

// ARRAY CARDIO 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
function longestWord(sen) {
  //init wordArr 
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
  //sort word arr
  const sorted = wordArr.sort(function(a,b){
    return b.length - a.length;
  })
  //init longest word arr 
  const longestWordArr = sorted.filter(function(word){
    return word.length === sorted[0].length
  })
  // return update  wordArr or wordArr[0]
  if(longestWordArr.length === 1){
    return longestWordArr[0]
  } else {
    return longestWordArr
  }
}

  console.log('longestWord()',
    longestWord('Ina of the mountain, what is your wisdommm???')
  )

  // CHALLENGE 2: ARRAY CHUNKING
  // Split an array into chunked arrays of a specific length
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
  // ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
  
  function chunkArray(arr, len) {
    //init chunked arr
    const chunkedArr = []
    //set index 
    let i = 0
    //loop through arr.length
    while(i < arr.length){
      //slice arr and push into chunkedArr
      chunkedArr.push(arr.slice(i, i + len))
      //increment index by len 
      i += len 
    }
    //return updatd chunked arr
    return chunkedArr;
  }
  
  console.log('chunkArray()',
    chunkArray([1,2,3,4,5,6,7,8,9,10], 3)
  )
  // CHALLENGE 3: FLATTEN ARRAY
  // Take an array of arrays and flatten to a single array
  // ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
  
  function flattenArray(arrays) {
    return [].concat(...arrays)
  }
  
  console.log('flattenArray()',
    flattenArray([[1, 2], [3, 4], [5, 6], [7]])
  )

  // CHALLENGE 4: ANAGRAM
  // Return true if anagram and false if not
  // ex. 'elbow' === 'below'
  // ex. 'Dormitory' === 'dirty room##'
  
  function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
  }

  //Helper Function 
  function formatStr(str){
    return str
    .replace(/[^\w]/g, '') // replace all non-words with empty space 
    .toLowerCase()
    .split('')
    .sort()
    .join()
  }
  
  console.log('isAnagram()',
    isAnagram('elbow', 'below')
  )
  // CHALLENGE 5: LETTER CHANGES
  // Change every letter of the string to the one that follows it and capitalize the vowels
  // Z should turn to A
  // ex. 'hello there' === 'Ifmmp UIfsf'
  
  function letterChanges(str) {
    //init newStr
    //replace char if z return a
    //else return letter that follow current char
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
      if( char === 'z' || char === 'Z') {
        return 'a'
      } else {
        return String.fromCharCode(char.charCodeAt() + 1)
      }
    })
    
    // update newStr to replace vowels with Uppercase vowels
    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
      return vowel.toUpperCase()
    })

    return newStr;

  }
  console.log('letterChanges()',
    letterChanges('hello there')
  )
  

