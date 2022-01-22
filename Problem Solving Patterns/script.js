//Multi Pointer Patterns
/*
    *Write a function called sumZero which accepts a sorted array of integers
    *The function should find the FIRST pair where the sum is 0
    *Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

function sumZero(){
    // sort array 
    // iterate through array 
    // compare pairs until pair equal 0 then return pair
    // if no pairs equal 0 return false
}

//Naive Solution 
function sumZero(arr){
    //iterate through array to define integers
    for(let i = 0; i < arr.length; i++){
        //iterate through array +1 to define integers move one space to the right (positive)
        for(let j = i + 1; j < arr.length; j++){
            // if any of the integers pairs match return the pair
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-4, -2, 0, 1, 3, 4])); // [-4, 4]
// console.log(sumZero([-5, -2, 0, 1, 3, 4])); // undefined


//Refactor

function sumZeroR(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[left] + arr[right];
        
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZeroR([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZeroR([-4, -2, 0, 1, 3, 4])); // [-4, 4]
console.log(sumZeroR([-5, -2, 0, 1, 3, 4])); // undefined

//Example 
/**
 * Implement a function called countUniqueValues which accepts a sorted array
 * and counts the unique values in the array 
 * There can be negative numbers in the array
 * But will always be sorted
 */

function countUniqueValues(arr){
    // short circut
    if(arr.length === 0) return 0;

    //set i counter to index of 0
    var i = 0; 
    // set j counter to index of 1
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++ // move counter right to compare
            // have unique int replace i counter current value
            arr[i] = arr[j]
        }
    }
    return i + 1 // correct 0 index to 1
}

console.log(countUniqueValues([1,1,2,2,3,4,5,6,6,7,7,8,8,9,])) // 9



