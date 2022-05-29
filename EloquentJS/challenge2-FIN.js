// MINIMUM
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log("min", min(0, 10));
// ➡ 0
console.log("min", min(0, -10));
// ➡ -10

//RECURSION 
function isEven(n){
    if(n === 0){
        return true
    } else if ( n === 1) {
        return false
    } else if (n < 0) {
        return isEven(-n)
    } else {
        return isEven(n - 2)
    }
}

console.log((isEven(50)))
// ➡ true
console.log(isEven(75))
// ➡ false
console.log(isEven(-1))
// ➡ false

// BEAN COUNTING
function countChar(string, char) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log("count Bs", countBs("BBC"));
// ➡ 2
console.log("count char", countChar("kakkerlak", "k"));
// ➡ 4
