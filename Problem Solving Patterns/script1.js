// Frequency Counter 
/** EXAMPLE
 * Write a function called 'same' which accepts two arrays
 * The function should return true if every value in the array has it's corresponding value squared in the second array.
 * The frequency of values must be the same
 */

// function called 'same' accepts two arrays
 function same(arr1, arr2){
     // short circut
    if (arr1.length !== arr2.length) return false

    // iterate through arr1
    for (let i = 0; i < arr1.length; i++) {
        // define correctIndex as arr2 index is arr1 index sqaured
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        // if correct index equal -1 meaning the item is not present return false
        if(correctIndex === -1) return false;

        // access arr2 and change the array to the correctIndex with splice
        arr2.splice(correctIndex, 1)
    }
    //return true if all fail safe have been bypassed 
    return true
}

console.log(same([1,2,3], [1,4,9])) // true

// indexOf
// returns the index of the element in the array or -1 if unpresent
const idols = ['ina', 'ame', 'gura', 'kiara', 'cali']
console.log(idols.indexOf('gura')); // 2 

// splice()
// changes the array by declaring a starting index point and an ending index point 
// it can also replace an element in the array with a new item
 const numbers = [1,2,3,4,5];
 numbers.splice(1, 0, 'wah');
 console.log(numbers) // [1, 'wah',2, 3, 4, 5]


 //REFACTOR 

 function sameR(arr1, arr2){
     //short circut 
     if(arr1.length !== arr2.length) return false;
     
     // object counters
     let frequencyCounter1 = {};
     let frequencyCounter2 = {};

     //loop over arr1
     for (let val of arr1){
         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
         
     }
     //loop over arr2
     for (let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        
    }
    //loop over frequencyCounter1
     for (let key in frequencyCounter1){
         //if key squared is NOT in frequencyCounter2 return false
         if(!(key **2 in frequencyCounter2)) return false
        // if key squared is NOT equal to frequencyCounter[key]
         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false
     }
     // if all cases are false cases are bypassed return true
     console.log(frequencyCounter1)
     console.log(frequencyCounter2)
     return true
 }

 console.log(sameR([1,2,2,3], [1,4,4,9])) // true

  
 /** ANAGRAM 
  * Write a function that accepts two strings
  * If str1 is NOT the same length as str2 return false 
  * create loopup object to compare later
  * loop through str1
  * loop through str2
  * Check if str2 is NOT an anagram to str1 return false
  * return true 
  */


 //Write a function that accepts two strings
 function anagram(str1, str2){
     //If str1 is NOT the same length as str2 return false 
     if (str1.length !== str2.length) return false
     
     let lookup = {}

    // loop through str1
    for (let i = 0; i < str1.length; i++){
        let letter = str1[i];
        // if letter exists, increments otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    // loop through str2
    for (let i = 0; i < str2.length; i++){
        let letter = str2[i];
        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false
        } else {
            // subtracts the count of letters is objects if all letter become zero then the return true
            // we do not need to write the logic for zero out because  if 
            lookup[letter] -= 1; 
        }
    }
    return true;
 }

{
    c:1
    a:1
    r:1
}
{
    a:3
    n:1
    g:1
    r:1
    m:1
}
console.log(anagram('car', 'arc'))
console.log(anagram('anagram', 'nagaram'))