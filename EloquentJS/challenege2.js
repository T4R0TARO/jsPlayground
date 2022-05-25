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

//Recursion

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
