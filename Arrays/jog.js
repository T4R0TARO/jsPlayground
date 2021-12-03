const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = ['a', 'b', 'c', 'd', 'e']

/*map()*/
// creates a new array populated with the results of calling  a provided function on every element in the calling array

arrayDoubler = array1.map( x => x + x)
console.log(arrayDoubler)

/*reduce()*/
// reduce the array to a single value. In this case, the sum of the array.

const reducer = (a,b) => a + b;
const arraySum = array1.reduce(reducer)
console.log(arraySum)
