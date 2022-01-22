//DIVIDE AND CONQUER
/**
 * This pattern involves dividing a data set into smaller chucks and then repeating a process with a subset of data. 
 * This pattern can tremondously decrease time complexity 
 */

//EXAMPLE 
/**
 * Given a sorted array of integers
 * Write a function called 'search'
 * function accepts a value and returns the index where the value passed to the function is loacted 
 * If the value is not found return -1 
 */

search([1,2,3,4,5,6],4) // 3
search([1,2,3,4,5,6],6) // 5
search([1,2,3,4,5,6],11) // -1 

//Given an sorted array integers write a function called search 
function search(arr, val){
    // loop through arr
    for(let i = 0; i < arr.length; i++){
        // if arr counter is equal to the valid index the return the counter 
        if(arr[i] === val){
            return i;
        }
    }
    // If the value is not found return -1
    return -1
}

//REFACTOR 
function searchR(array, val){
    let min = 0;
    let max = array.length - 1; 

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
        
        if (array[middle] < val) {
            min = middle + 1;
        } else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}

[1,2,3,5,6,8,9,12,15,16,29]