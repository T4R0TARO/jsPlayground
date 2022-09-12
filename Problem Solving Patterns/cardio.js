// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';

// function reverseString(str) {}

const reverseString = (str) => str.split("").reverse().join("");

console.log("reverseString()", reverseString("takodachi"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {
  let reverStr = str.split("").reverse().join("");
  return str === reverStr;
};

console.log("isPalindrome()", isPalindrome("racecar"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let reverStr = int.toString().split("").reverse().join("");
  let parsed = parseInt(reverStr);
  return parsed;
}

console.log("reverseInt()", reverseInt(12345));

//CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'

const capitalLetters = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(" ");
};

console.log("capitalLetters()", capitalLetters("ina of the mountain, what is your wisdom"));

//CHALLENGE 5: MAX CHARACTER
//Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// function maxCharacter(str) {}

const maxCharacter = (str) => {
  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  //split string by char//forEach char
  str.split("").forEach(function (char) {
    //if char appears increase incremently
    if (charMap[char]) {
      charMap[char]++;
    } else {
      //if char appears once have char equal 1
      charMap[char] = 1;
    }
  });

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return charMap;
};

console.log("maxCharacter()", maxCharacter("takodachixxx"));

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {}

// console.log("fizzBuzz()", fizzBuzz());

// ARRAY CARDIO 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

const longestWord = (sen) => {
  // create filter arr that is only letter and num
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // sort by length
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // if multiple words, put into arr
  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
  // check if more than one arr
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
};

console.log("longestWord()", longestWord("Ina of the mountain, what is your wisdom???"));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const chunkedArr = [];

  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));

    i += len;
  }
  return chunkedArr;
}

console.log("chunkArray()", chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arr) {
  return [].concat(...arr);
}

console.log("flattenArray()", flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return helperFunc(str1) === helperFunc(str2);
}

function helperFunc(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log("isAnagram()", isAnagram("elbow", "below!!"));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });
  newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) => vowel.toUpperCase());

  return newStr;
};

console.log("letterChanges()", letterChanges("hello there"));

// ARRAY CARDIO 3
// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {}
console.log("addAll()", addAll(2, 5, 6, 7, 5));

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

/**
 * 1. Pass a num to loop
 * 2. Add all prime num
 * A prime num is a whole num greater than 1 whose only fact are 1 and itself
 */

function sumAllPrimes(num) {
  let total = 0;
  // iterate num that is passed
  // test for prime num

  function checkForPrimes(i) {
    for (let j = 2; j < i; i++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrimes(i)) {
      total += i;
    }
  }

  // checkForPrimes()
  // a prime num is a num thats only multiple is 1 and itself
  // if prime number return true
  // else return false

  // return total of primes
  return total;
}

console.log("sumAllPrimes()", sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// arr, ...targets

// output newArr

// Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr, ...rest) {
  return arr.filter((val) => !rest.includes(val));
}

console.log("seekAndDestroy()", seekAndDestroy([2, 4, 5, 6, "hello"], 2, 6, "hello"));
// [4, 5]

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {
  const arr1 = [];
  const arr2 = [];

  a.forEach((val, i) => (val === -1 ? arr1.push(i) : arr2.push(val)));

  const sortArr = arr2.sort((a, b) => a - b);

  arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

  return sortArr;
}

// console.log('sortByHeight()')

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {}

// console.log('missingLetters()')

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {}

// Call Function
const output = letterChanges("Hello There");

// console.log('evenOddSums()')
