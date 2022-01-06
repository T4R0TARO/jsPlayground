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

