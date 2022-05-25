// pass by value OR pass by reference? Pass by VALUE
// the value on the right of the equals is copied and by the var
// create a value of 10 and have var `a` copy that value, so a = 10
// have var `c` copy the value of var `a`, now c = 10
// `c` is not referencing a, `c` is copying the value of `a`
// if `c` changes values `a` is unchanges since `c` has its own copied value

let a = 10;
let b = "Hi";
let c = a;
c = c + 1;

/**
 *   Variable    |   Value
 *      a              10
 *      b             "Hi"
 *      c              10 / 11
 */

// pass by value OR pass by reference? Pass by REFERENCE
// the arr is reference by the var
// if var `j` copies the value of var `z` then
// BOTH are pointing to the same reference *
// this could lead to future bugs if one of the references are change
// if `j` references a new arr then if change again `c` wont be changed
// because it is `j` is no longer referencing the [1,2] arr

let x = 10;
let y = "Hi";
let z = [1, 2];
let j = z;
// j.push(3)
j = [3, 4, 5];

/**
 *   Variable    |   Value       Address     |      Value
 *      x              10           0x01            [1 , 2]
 *      y             "Hi"          0x02            [3, 4, 5]           
 *      z             <0x01>
 *      d             <0x02>
 */
