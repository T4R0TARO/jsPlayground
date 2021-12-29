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