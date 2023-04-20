// CHALLENGE 1:  REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh';

function reverseString(str) {
  // What does this function do?
  // this function accepts a string and returns the string in reverse order
  // What params does this function have?
  // the param is a string
  // What is this function suppose to return?
  // returns a string in reverse order

  // How do i reverse a string?
  // reverse(): reverse the order of items in an arr
  // How do i change the string into a arr of character?
  // split(''): returns an arr with split items
  // I have an arr of reverse characters how do i join the items back into a string?
  // join(''): combines the items of an arr to a single string
  return str.split("").reverse().join("");
}

console.log("reverseString()", reverseString("takodachi"));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

const isPalindrome = (str) => {
  // What is a palindrom? A word that is spelled the same backwords
  // What does this function do? Checks if a string is a palinfrome
  // What param does this function have ? `str` a string
  // How do i check if a string is a palindrom?
  // reverse the string in a sepereate variable
  // compare the var with the original str
  // if the original string and the reversed string are equal
  // the string is a palindrom
  const reverseString = str.split("").reverse().join("");
  return reverseString === str;
};

console.log("isPalindrome()", isPalindrome("racecar"));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  // How do you reverse a integer?
  // You cannot reverse a integer BUT you can reverse a string
  const intToString = int.toString().split("").reverse().join("");
  // How do you change a integer to a string?
  // toString()
  // .split('').reverse().join('')
  const numberToString = parseInt(intToString);
  return numberToString;
  // return intToString;
  // How do i change a string to an integer
}

console.log("reverseInt()", reverseInt(12345));

//CHALLENGE 4: CAPITALIZE LETTERS
//Return a string with the first letter of every word capitalized
// ex. capitalLettters('i love javascript') === 'I Love Javascript'
const capitalLetters = (str) => {
  // what does this f() do?
  // it accepts a string and returns a new string with the first letter capitalized
  // make all letter lowerCase
  // split the string into words into an arr
  // loop through arr to access items
  // access the first letter of the work and make it uppercase
  // add the rest of the word
  // join the words
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

function maxCharacter(str) {
  // what does this functionn do?
  // accepts a string and returns the most common char in the string
  // How do i check the most common char in a string?
  // split() string into char
  // loop through char to access items
  // have the char become the properties of the obj
  // if there is only 1 char return 1
  //  if there is the same char incremntly increase
  const charMap = {};
  let maxChar = "";
  let maxNum = 0;

  str.split("").map((char) => {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  });

  // We have an obj that shows the most common char how to we save it and
  // return it in a seperate var

  // for (let char in charMap) {
  //   if (charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }

  return maxChar;
}

console.log("maxCharacter()", maxCharacter("takodachixxx"));

//CHALLENGE 6: FIZZBUZZ
//Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz".
//For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz() {
  // print 1-100
  // divisible by 3 print 'fizz'
  // divisible by 5 print 'buzz'
  // divisible by 3 & 5 'fizzbuzz'
  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
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
  // Function accepts a sentence and return the longest word
  // Are we including puncuation in the count? NO
  // toLowerCase() to uniform the letters
  // we want only letters and numbers
  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // Once we have an arr with only letters and numbers we can sort the by lenght
  // how will we sort()? from longest to shortest
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  // Now we have a sorted Arr
  // What if there are more than one `longestWord`? return an arr with both words
  const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
  // else return the single longest word
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
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
    chunkedArr.push(arr.slice(i, +i + len));
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

function isAnagram(str1, str2) {}

// Helper Function

console.log("isAnagram()", isAnagram("elbow", "below!!"));

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

const letterChanges = (str) => {};

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

function sumAllPrimes(num) {}

console.log("sumAllPrimes()", sumAllPrimes(10));

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover values in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

// arr, ...targets

// output newArr

// Solution 1: arguments, indexOf, filter
function seekAndDestroy(arr, ...rest) {}

console.log("seekAndDestroy()", seekAndDestroy([2, 4, 5, 6, "hello"], 2, 6, "hello"));
// [4, 5]

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(a) {}

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
