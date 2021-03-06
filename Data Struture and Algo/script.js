/* PROBLEM SOLVING
* Understanding Problem
* Explore Concreate Examples
* Break It Down
* Solve/Simplify
* Look back and Refactor
*/

/* UNDERSTANDING THE PROBLEM 
* Can I restate the problem in my own words?
* What are the inputs that go into the problem?
* What are the outputs that should come from the solution
to the problem
* Can the outputs be determined from the inputs? In other
words, do I have enough information to solve the problem?
* How should I label the important pieces of data that are
a part of the problem?
*/

//======================================================
//  Write a function which takes two numbers and returns their sum
//======================================================
// 1. Can I restate the problem in my own words?
"implement addition"
// 2. What are the inputs that go into the problem?
    // - ints?
    // - floats?
    // - what about string for large numbers?
// 3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?
// 4. Can the outputs be determined from the inputs?
 
// 5. How should I label the important pieces of data that are part of the problem?


//==============================================================
// EXPOLRE EXAMPLES
//==============================================================
//Write a function which takes in a string and turns counts of each character to a string. 
// Start with Simple examples
// Progress to more complex examples
// Explore Exampleswith Empty Inputs
// Explore Examples with Invalid inputs
charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone numbers is 182763"
"Hello hi"
charCount('')


//==============================================================
// BREAK IT DOWN
//==============================================================
/*
Write a function which takes in a string and turns
counts of each character in the string.
*/

charCount("aaaa"); 
// {a:4}

charCount("hello"); 
// {h:1, e:1, l:2, o:1}

charCount("Your PIN number is 1234")
/*
1:1,
2:1,
3:1,
4:1,
b:1,
e:1,
i:2,
m:1,
n:2,
o:1,
p:1,
r:2,
s:1,
u:2,
y:1
*/

function charCount(str){
    //do something
    // return an object with keys that are lowercase alphanumeric characters in the string/ values should be
}

// SOLVE IT
function charCount(str){
   // make object to return at end
   var result = {};
   // loop over string, for each character...
   for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        // if the char is a number/letter AND if the char is a key in object, add one to counts
        if(result[char] > 0) {
            result[char]++;
        // if the char is a number/ letter AND if the char is not in object, add it to the object and set the value to 1
        } else {
            result[char] = 1;
        };
   }
        // if character is something else (space, period, etc.) dont' do anything
   return result;
   // return object at end 
}

// LOOK BACK & REFACTOR
// Refactoring Questions
/*
* Can you check the results?
* Can you derive the results differently?
* Can you understand it at a glance?
* Can you use the result or method for some other problem?
* Can you imporove the  performance of your solution?
* Can you think of other ways to refactor?
* How have other people solved this problem?
*/

//PROBLEM SOLVING PATTERNS
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true
}

same([1,2,3,2], [9,1,4,4])

// REFACTOR (FREQUENCY_COUNTER)
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}

same([1,2,3,2], [9,1,4,4])

// ANAGRAM
// SOLUTION
function validAnagram(first, second){
    if(first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : loopup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
}

//countUniqueValues
/*
Implement a function called countUniqueValues, which accepts a sorted away, and counts the unique values in the array. 
There can be negative unique values in the array. There can be negative numbers in the array but, it will always 
sorted
*/

//NAIVE
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,5])

// SUM ZERO  REFACTOR
function sumZero(arr){
    let left = 0;
    let right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left]],[arr[right]];
        } else if  (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])

// ROCK PAPER SCICCORS

const rps = (p1, p2) => {
// if p1 and p2 are equal return draw
    if(p1 == p2)
      return "Draw!";
    
    // all winning combinations
    if(p1 == "rock" && p2 == "scissors")
      return "Player 1 won!"
    else if (p1 == "scissors" && p2 == "paper")
      return "Player 1 won!";
      else if (p1 == "paper" && p2 == "rock")
      return "Player 1 won!"
     else 
     // if no winning combinations player 2 wins
      return "Player 2 won!";
  };
  
  //EXAMPLE
/*
Write a function called maxSubarraySum which accepts an 
array of integers and a number called n. The function 
should calculate the maximum sum of n consecutive 
elements in the array.
*/
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) //6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null 

// SLIDING WINDOW
/*This pattenr involves creating a WINDOW which can either
  be an array or number from one position to another.

  Depending on a certain condition, the window either
  increases or closes (and a new window is created)

  Very useful for keeping track of a subset of data in an
  array/string etc.
*/

  // MAX SUM
  function maxSubarraySum(arr, num) {
    if ( num > arr.length){
        return null;
    }
    var max = -Infinity;
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0;
        for (let j = 0; j < num; j++){
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max)
    }
    return max;
}

  // MAX SUM REFACTOR
// Time Complexity - O(N)
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    //edge case
    if (arr.length < num) return null;
    // loop
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    //loop
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum -arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3) // 19


// Write a function called sameFrequency
//Give two positive integers
//Find out if the two numbers have the sameFrequency of digits

// function takes two param int1 + int2
function sameFrequency(int1, int2){
    // convert to strings
    let strNum1 = int1.toString();
    let strNum2 = int2.toString();

    // short circut
    if (strNum1.length !== strNum2.length){
        return false;
    }

    // loook up objects
    let lookup1 = {};
    let lookup2 = {};

    //iterate string and object
    for(let num of strNum1){  
     lookup1[num] = (lookup1[num] || 0) + 1
    }

    //iterate string and object
    for(let num of strNum2){
    lookup2[num] = (lookup2[num] || 0) + 1
    }


    //have object items become key to compare
    for(let key in lookup1){
            // if keys are not equal return false
        if(lookup1[key] !== lookup2[key]){
           return false;
        }
    }
    // if no possible false return then return true
    return true;
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false

// Problem Patterns