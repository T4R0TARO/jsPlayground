const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array2 = ['a', 'b', 'c', 'd', 'e']
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/*map()*/
// non-mutable
// creates a new array populated with the results of calling  a provided function on every element in the calling array

arrayDoubler = array1.map( x => x + x)
// console.log(arrayDoubler)

/*reduce()*/
// creates a new array and reduces the array to a single value. In this case, the sum of the array.

const reducer = (a,b) => a + b;
const arraySum = array1.reduce(reducer)
// console.log(arraySum)


/*filter()*/
// creates a new array with all elements that pass the test provided by the function
const results = words.filter(x => x.length > 10)
// console.log(results)

/*slice()*/
// returns shallow copy of a portion of an array into a new array selected from `start` to `end`. The original array will not be modified
const sliceArray = words.slice(1, 3)
// console.log(sliceArray)
// console.log(words)

/*splice() */
// changes the contents of an array by removing or replacing existing elements
const spliceArray = words.splice(0, 3)
console.log(spliceArray)
console.log(words)

/*concat() */
// used to merge two or more arrays. This method does not change the existing array;
const concatArray = array2.concat(words)
// console.log(concatArray)


/*forEach() */
// executes a provided funtion once for each array element

spliceArray.forEach(element => words.push(element))

console.log(words)

/**sort() */
// sorts the elements of an array and returns the sorted array. The default sort ascending.
words.sort();
console.log(words)

/**isArray() */
// checks if array is a array and returns a boolean value
console.log(Array.isArray(words));

words.push('wah')
console.log(words);

/*pop*/
// remove the last item from the targeted array 
// This method changes the array
words.pop();
console.log(words);


