/** RECURSION
 * Define what recursion is?
 * Understand the two essential components of a recursive function
 * Visualize the call stack to better debug and understand recursive functions
 * Use helper method recursion and pure recursion to solve more diffucult problems
 */

// What is recursion?
// A process(a function) that calls itself

// Why?
// ex JSON.parse/ JSON.stringify
// document.getElementById and DOM traversal algorithms
// Object traversal 
// We will see it with more complex data structures
// It sometimes a cleaner alt to iteration

// The call stack 
// When a function is invoked, it's place on top of the call stack
// When you remove, remove from the top 'pop'

function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()

/**How recusive functions work
 * Invoke the same function with a different input until you reach your base case!
 */

/** Two essential parts of a recursive function! 
 *  Base Case 
 *  Different Input 
*/

function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

 //print 3
 //countDown(2)
 //print 2
 //countDown(1)
 //print 1
 //countDown(0)
 // print "All Done"
countDown(5)

function countDownR(num){
    for(var i = num; i > 0; i--){
        console.log(i)
    }
    console.log("All done!")
}
countDownR(5)

//RECURSION2

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}

//Can you spot the base case?

//Do you notice the different input?

//What would happen if we didn't return?

console.log(sumRange(3)) 

//Naive / Easy
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

console.log(factorial(3)) // 6

//Recursion
function factorialR(num){
    if(num === 1 ) return 1; // base case 
    return num * factorialR(num - 1) // --
}

console.log(factorialR(3)) // 6

// WHERE THINGS GO WRONG
// No base case 
// Forgetting to return or returning the wrong thing!
// Stack overflow!

function factorialRR(num){
    if(num === 1)  return 1; 
    return num + factorialRR(num);
}

// WRONG  'return' is missing on the base case
// Stackoverflow  means too many function being called
function factorialRR(num){
    if(num === 1) console.log(1);
    return num * factorial(num -1);
}

// HELPER METHOD RECURSION ALGO

// outer function non-recursive
function outer(input){

    //out outscoped variable
    var outScopedVariable = []

    // inner helper function recursive 
    function helper(helperInput){
        // modify the outerScopedVariable 
        helper(helperInput--) // recursive logic
    }

    //call helper function that accepts input then updates outscoped variable
    helper(input)
    return outerSpaceVariable;
}


// Recursion_Helper_Method
/**
 * Function collectOddValues accept an array // [1,2,3,4,5,6,7,8,9]
 * create new results array 
 * function helper accepts a helperInput array // [1,2,3,4,5,6,7,8,9]
 * function helpers base case if length is 0 return // false [1,2,3,4,5,6,7,8,9]
 * function helper checks if helperInput's first item is odd // true [1]
 * if true push helperInput item into result array // true [1] push into results array
 * if false then there is no item pushed // 
 * function helper is called again with the result of the rest of the array [2,3,4,5,6,7,8,9]
 * helperInput.slice(1) access the array without the 0 index
 * function helper is called and accepts arr // [1,2,3,4,5,6,7,8,9]
 * return results array 
 */

// outer function is not not recursive
function collectOddValues(arr){
    //creates new array
    let result = [];

    //inner function is recursive
    function helper(helperInput){
        //base case 
        if(helperInput.length === 0){
            return;
        }
        //checks if item is odd
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        //call recursive function starting at index 1
        helper(helperInput.slice(1))
    }

    //call inner recursive function
    helper(arr)
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//PURE RECURSIONS
/**
 * function collectOddValues accepts an array ex. [1,2,3,4,5]
 * define a NEW array to be empty
 * edge case; if the array is empty return newArr // [1,2,3,4,5] false
 * check if the first item in the array is odd // [1,2,3,4,5] true [1]
 * if true PUSH the first odd number into newArr
 * have new array equal newArr and concat the results of function collectOddvalues
 * on the rest of the array
 * the recusive function collectOddvalues is called [2,3,4,5]
 * creates a new array
 * base case checks if the number is not 0 // false  [2]
 * checks if the first number in the array is odd // false [2]
 * newArr [] equal and concat the results of function collectOddvalues on the rest of the arrayu
 * the recusive function collectOddvalues is called // [3,4,5]
 * creates a new array newArr
 * checks if the first number of the array is odd // [3,4,5] true
 * if true PUSH the first item of the array into newArr
 * have new Array equal newArr.concat the result of the function collectOddValues on the rest of the array
 * the recursive function collectOddValues is called [4,5]
 * creates new array
 * base case checks for 0 // false 
 * checks if first item in array is odd // false [4,5]
 * update newArr and concat the results of function collectOddValues
 * recursive function collecOddValues is called [5]
 * creates new array
 * base case checks for 0 // false
 * condition checks if first item in array is odd // [5] true
 * push item to new array
 * update newArr and concat the result of function collectOddvalues
 * recusive function collectOddvalues is called []
 * creates new array
 * base case checks of 0 values // [] true
 * return newArr
 */

// arr.slice(1)- give the element on the 1 index
function collectOddValues(arr){
    let newArr = [];
    //base case
    if(arr.length === 0) {
        return newArr;
    }
    //condition
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    //--
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5])) // [1,3,5]]

// WE HAVE SEPERATE ARRAYS WE WANT THEM TOGETHER
//[1].concat(collectOddvalues([2,3,4,5]))
    //[].concat(collectOddvalues([3,4,5]))
        //[3].concat(collectOddvalues([4,5]))
            //[].concat(collectOddvalues([5]))
                //[5].concat(collectOddvalues([]))
                 //[]

// concat was waiting for the result to finish
// 
//return [1,3,5]
    
       
         
                 
                
                 
