const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = ['a', 'b', 'c', 'd', 'e']
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/*map()*/
// creates a new array populated with the results of calling  a provided function on every element in the calling array

arrayDoubler = array1.map( x => x + x)
console.log(arrayDoubler)

/*reduce()*/
// creates a new array and reduces the array to a single value. In this case, the sum of the array.

const reducer = (a,b) => a + b;
const arraySum = array1.reduce(reducer)
console.log(arraySum)
console.log(array1)


/*filter()*/
// creates a new array with all elements that pass the test provided by the function
const results = words.filter(x => x.length > 10)
console.log(results)

/*slice()*/
// returns shallow copy of a portion of an array into a new array selected from `start` to `end`. The original array will not be modified
const sliceArray = words.slice(1, 3)
console.log(sliceArray)
console.log(words)

/*splice() */
// changes the contents of an array by removing or replacing existing elements
