//Mock Technical Problems

//HTML

//CSS

//JS ALGO

/**
 * Write a function that takes two numbers and returns the sum of those numbers
 */
function add(num1, num2){}

console.log("add", add(2, 3)); //Expect 5

/**
 * Write a function that takes any number of arguments of type number and returns the sum  of all the arguments 
 */
function sum() {}

console.log("sum", sum(2,3,4,5)) // Expect 14
/**
 * Write a function that takes two string. A and B, and returns whether B is in A in a case-insensitive way
 */
function stringIncludes() {}

console.log(
    "stringIncludes",
    stringIncludes("I drove to New York in a van with my friend", "new")
) // Expect true

/**
 * Write a function that takes an array of objects, and returns an array of the objects 'name' property, only if that property exists
 */
function getNames() {

    console.log(
        "getNames",
        getNames([
            { a : 1 },
            { name: "Jane" },
            {},
            { name: "Mark"},
            { name: "Sophia"},
            { b:2 }
        ])
    ); //Expect ['Jone', 'Mark', 'Sophia']
}

/**
 * Write a function that takes an array of numbers and returns the index of the largest number
 */
function getLargestNumberIndex() {

    console.log("getLargestNumberIndex", getLargestNumberIndex([7,1,4,12,9]));
}

/**
 * Write a function that returns a promise that resolves after n number of miliseconds
 */

function delay(n){}

(async () => {
    console.time("Testing delay");
    await delay(1000);
    console.timeEnd("Testing delay");
})();