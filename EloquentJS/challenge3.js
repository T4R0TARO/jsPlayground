// const range = (start, end, step) => {
//   //returns arr containing  all numbers from start to end
//   if (step == null) step = 1;
//   const arr = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//   } else {
//     for (let i = start; i >= end; i += step) {
//       arr.push(i);
//     }
//   }
// };

//returns arr containing  all numbers from start to end
const range = (start, end, step) => {
  // if  null default to 1
  if (step == null) step = 1;

  const arr = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
};

console.log(range(5, 2, -1));
// write sum function that takes an arr  of numbers and returns the sum of these num

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur);
};

console.log(sum(range(1, 10)));
