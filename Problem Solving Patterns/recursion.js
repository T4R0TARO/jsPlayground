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

// HELPER METHOD RECURSION 
function outer(input){

    var outScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerSpaceVariable;
}

// Recursion_Helper_Method
function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}


//PURE RECURSIONS
function collectOddValues(arr){
    let newArr = [];
    // base point
    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5])) // [1,3,5]