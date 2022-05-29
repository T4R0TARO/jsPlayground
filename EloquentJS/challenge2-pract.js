// MINIMUM
// create a function that take two numbers and return the lowest value between the two

function min(num1, num2) {
  if (num1 < num2) return num1;
  else return num2;
}

// console.log("min", min(10, 100));
// console.log("min", min(0, -10));

//RECURSION
// create a function that takes a number
// return a boolean value if the number is even
// zero is even
// one is odd
// for any other number `n`, its eveness is the same as `n-2`.

function isEven(n) {
  //short-circut
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(-n);
  } else {
    return isEven(n - 2);
  }
}

// console.log("isEven", isEven(55));

// NON-RECURSION
const thisIsEven = (n) => {
  if (n === 0) return true;
  else if (n === 1) return false;

  if (n % 2 === 0) return true;
  else return false;
};

console.log("thisIsEven", thisIsEven(60));
console.log("thisIsEven", thisIsEven(55));
console.log("thisIsEven", thisIsEven(1));
console.log("thisIsEven", thisIsEven(0));

// BEAN COUNTING

function countChar(string, char) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      counted += 1;
    }
  }
  return counted;
}

// write a funct that counts B's that takes a string as its only argument
// returns a number that indicates how many B's there are
// Helper Func
function countsBs(string) {
  return countChar(string, "B");
}

console.log("Count Bs", countsBs("BBC"));
