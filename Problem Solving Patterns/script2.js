/**SLIDING WINDOW
 * This pattern involves creating a window which can either
 * be an array or number from one position to another
 * Depending on a certain condition, the window either increases
 * or closes( and a new window is created)
 * Very useful for keeping track of a subset of data in an array/string etc.
 */

// EXAMPLE
/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the max sum of n consecutive elements in the array
 */

function maxSubarraySum(arr, num){
// short circut 
if (num >  arr.length){
    return null;
}
// define max
var max = -Infinity;

for(let i = 0; i < arr.length - num + 1; i++){
    temp = 0;
    for (let j = 0; j < num; j++){
        temp += arr[i + j];
    }
    if (temp > max){
        max = temp;
    }
    console.log(temp, max)
}
return max;
}
//                          i i i i i i i i i
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
//                          j j j j j j j j j 

// REFACTOR 
function maxSubarraySumR(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if(arr.length < num) return null;
    
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i ++){
        tempSum = tempSum - arr[i -  num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

console.log(maxSubarraySumR([2,6,9,2,1,8,5,6,3],3))