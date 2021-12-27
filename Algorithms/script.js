// Binary Search 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [-1, 0, 3, 5, 9, 12];
const target = 9;

 var search = function(nums, target) {
    //  Define first and last variables
        let first = 0;
        let last = nums.length - 1;
        
    //   while first is less tha or equal to last 
        while(first <= last){
    //         Define thhe middle  variable 
            let mid = Math.floor(((first +  last) / 2))
    // If the target value is larger - continue to search on the right.
            if(nums[mid] < target){
                first = mid + 1
    // If the target value is smaller - continue to search on the left.
            } else if(nums[mid] > target) {
                last = mid - 1
            } else {
    // If the target value is equal to the middle element - we're done.
                return mid
            }
        }        
        return -1;
    };



