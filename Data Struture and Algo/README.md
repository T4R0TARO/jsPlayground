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
`charCount("aaaa"); // {a:4}`
`charCount("hello"); // {h:1, e:1, l:2, o:1}`

`"my phone numbers is 182763"`
`"Hello hi"`
`charCount('')`


//==============================================================
// BREAK IT DOWN
//==============================================================


```js
// REFACTOR (FREQUENCY_COUNTER)
// function same take two param 
function same(arr1, arr2){
    // edge case if arr1 is not equal length of arr2 return false
    if(arr1.length !== arr2.length){
        return false;
    }
    // create two objects
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    //seperate loops
    // let val become the items of arr1
    for(let val of arr1){
        //access object and have object items equal val or 0 + 1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    // let key be the items in frequencyCounter1 
    for(let key in frequencyCounter1){
        // if key squared is NOT in frequencyCounter2 return false
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        // if key squared in frequencyCounter2  is not equal to frequencyCounters1 key items return false
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    // otherwise return true
    return true
}

same([1,2,3,2], [9,1,4,4])

```