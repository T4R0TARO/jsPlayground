// for loop

const counterTestV1 = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};

// console.log(counterTestV1());

// do...while statement

const counterTestV2 = () => {
  let i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);
};

// console.log(counterTestV2());

// while statement

const counterTestV3 = () => {
  let n = 0;
  let x = 0;
  while (n < 3) {
    n++;
    x += n;
    console.log(`n=${n}, x=${x}`);
  }
};

console.log(counterTestV3());

// for...in statement

let obj1 = [1, 43, 534, 54, 32, 4355];

const counterTestV4 = (obj) => {
  let result = [];

  for (let i in obj) {
    console.log(obj[i]);
    if (obj[i] % 2 === 0) {
      result += obj[i];
    }
  }

  return result;
};

console.log(counterTestV4(obj1));

//for...of statement

/**
 * for (variable of object){
 *      statement
 * }
 */

// Callback Function

function greeting(name) {
  console.log("Hello" + name);
}

// function processUserInput(callback) {
//     let name =
// }

//forEach()

const array1 = [1, 23, 432, 344, 23, 53435];

array1.forEach((element) => console.log(element));

// array1.forEach(function (element) {
//   console.log(element);
// });
