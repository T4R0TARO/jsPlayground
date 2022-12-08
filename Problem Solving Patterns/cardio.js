// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';

function reverseString(str) {
  /**
   * accepts str
   * split()
   * reverse()
   * .join()
   * return str
   */
  return str.split("").reverse().join("");
}

console.log("reverseString()", reverseString("takodachi"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {
  /**
   * accepts str
   * init newStr var
   * split('')
   * reverse()
   * join('')
   * return newStr === str
   */
  const newStr = str.split("").reverse().join("");
  return newStr === str;
};

console.log("isPalindrome()", isPalindrome("racecar"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  /**
   * accept int
   * change int to str
   * split().reverse().join()
   * change str to int
   * compare newInt === str
   */
  const reverseInt = int.toString().split("").reverse().join("");
  const parsed = parseInt(reverseInt);
  return parsed;
}

console.log("reverseInt()", reverseInt(12345));

//CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'
const capitalLetters = (str) => {
  /**
   * accepts str
   * toLowerCase
   * .split(' ')
   * map(word => word[0].toUpperCase() + word.substring(1))
   * .join(' ')
   */
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
  /**
   * accepts str
   * init obj
   *
   * split str to char
   * populate obj w/ char
   *
   * return maxChar
   */

  const charMap = {};
  let maxNum = 0;
  let maxChar = "";

  str.split("").forEach((char) => (charMap[char] ? charMap[char]++ : (charMap[char] = 1)));

  for (let char in charMap) {
    if (charMap[char] > maxNum) {
      maxNum = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log("maxCharacter()", maxCharacter("takodachixxx"));

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("fizzBuzz()", fizzBuzz());

// ARRAY CARDIO 2
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

const longestWord = (sen) => {
  /**
   * accepts sen
   * format sent to an arr of words
   * sort the arr of words by length longest to shortest
   * filter arr return first item of arr
   * if more that one longest word return  arr of longest word
   * returns first item of longest word or arr of longest words
   */

  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

  const sorted = wordArr.sort((a, b) => b.length - a.length);

  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);

  return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
};

console.log("longestWord()", longestWord("Ina of the mountain, what is your wisdom mountain???"));

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
  return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
console.log("isAnagram()", isAnagram("elbow", "below!!"));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = (str) => {
  /**
   * accepts a str
   * change every letter of str to one that follows it
   * capitalize the vowels
   * Z should turn to A
   */
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

function addAll(...numbers) {
  return numbers.reduce((acc, cur) => acc + cur);
}
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

  function checkForPrime(i) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
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
  /**
   *
   */
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

console.log("missingLetters()");

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {}

console.log("evenOddSum()", evenOddSums([50, 60, 60, 45, 71]));
// Call Function
const output = letterChanges("Hello There");

// console.log('evenOddSums()')
