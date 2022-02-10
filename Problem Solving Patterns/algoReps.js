//Mock Technical Problems

//HTML

//CSS

//JS ALGO

/**
 * Write a function that takes two numbers and returns the sum of those numbers
 */
function add(num1, num2){
 return num1 + num2;
}

console.log("add", add(2, 3)); //Expect 5

/**
 * Write a function that takes any number of arguments of type number and returns the sum  of all the arguments 
 */
function sum(...arg) {
    let results = 0;

    for(let i = 0; i < arg.length; i++){
        results += arg[i];
    }

    return results
}

console.log("sum", sum(2,3,4,5)) // Expect 14
/**
 * Write a function that takes two string. A and B, and returns whether B is in A in a case-insensitive way
 */
function stringIncludes(stringA, stringB) {
    let tempString = stringA.toLowerCase();
    
    return tempString.includes(stringB);
}

console.log(
    "stringIncludes",
    stringIncludes("I drove to New York in a van with my friend", "new")
) // Expect true


/**
 * Write a function that takes an array of objects, and returns an array of the objects 'name' property, only if that property exists
 */
function getNames(array) {
    //create empty array called results
    let result = [];
    //loop through array length
    for(let i = 0; i < array.length; i++){
        //if array item has property called name 
        //push said item into the results array
        if(array[i].hasOwnProperty('name')){
            result.push(array[i].name);
        }
    } 
    //return update results array
    return result;
}

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



/**
 * Write a function that takes an array of numbers and returns the index of the largest number
 */
function getLargestNumberIndex(array) {
    //sort array
    //reverse array 
    //return first item of array 
    array.sort(function(a,b){
        return a - b;
    });
    return array;
}
console.log("getLargestNumberIndex", getLargestNumberIndex([7,1,4,12,9]));
/**
 * Write a function that returns a promise that resolves after n number of miliseconds
 */

function delay(n){}

(async () => {
    console.time("Testing delay");
    await delay(1000);
    console.timeEnd("Testing delay");
})();