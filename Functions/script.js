const square = function(x) {
    return x * x;
};

console.log(square(12));
//144

const makeNoise = function(){
    console.log("Pling!");
};

makeNoise();
// Pling!

const power = function(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};

console.log(power(2, 10))
// 1024

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // 60
}
// y is not visible here
console.log(x + z);
// 40


// When the code inside the halve funcstion refers to n
// it is seeing its own n, not the global n
const halve = function(n) {
    return n / 2;
};

let n = 10;
console.log(halve(100));
// 50
console.log(n);
// 10

//Big O Notation
/*
* To anyalyze the performance of an algorithm, Big O Notation
* Big O Notation can give use a high level of understanding of the time or space complexity of an algo
* Big O Notation doesn't care about percision, only about general trends.(linear? quadratic? constant?)
* The time or space complexity (as measured by Big O) depends only on the algorithms, not the hardware used to run the algorithm

*/
//O(1)
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}
//O(n)
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}
//O(n)
// Closures 
function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// 1
console.log(wrap2());
// 2

/*
    Begin able to reference a specific instance of a  local binding
    enclosing scope is called a CLOSURE

    A function that references bindings from locals scopes around it 
    is called  a CLOSURE
*/

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// 10

let thrice = multiplier(3);
console.log(thrice(5))
// 15


// Recursion 
function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 3));
// 8

