// = vs ===
console.log(1 == "1");
// ➡ true
console.log(1 === "1");
// ➡ false
console.log(0 == "");
// ➡ true
console.log(0 === "");
// ➡ false
console.log(null == null);
// ➡ true
console.log(null === null);
// ➡ true
console.log(null === undefined);
// ➡ false

// probably the only time to use  double equal `==` 
console.log(null == undefined);
// ➡ true *

console.log(1 !== "1");
// true


//undefined is when a var is called with no value
//null must be set on an element value and represent the absents of value 
