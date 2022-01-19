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

 function sameR(){
     
 }