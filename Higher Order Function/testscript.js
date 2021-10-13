
/**
 * We have an array of objects
 * We will use the method reduce() to reduce the array to a single value 
 * In other words, the items in the array will be combined together to a single value
 * Create a totalPrice variable to contain the combined values
 * We used a forEach() to loop through the array items 
 * Add the item price value added to the totalPrice variable 
 */

const items = [
    { name: "Rice", price: 5 },
    { name: "Book", price: 20 },
    { name: "Chicken", price: 10 },
    { name: "Monitor", price: 100 }
]

// let totalPrice = 0;
// items.forEach(item => {
//     totalPrice += item.price
// })

//Reduce!!!
// The reduce method takes in 2 different parameters 
// a function 
// a starting point; in this case 0

// the function take  a couple different parameters 
//  the first param that the func takes is called the accumulator which is the thing we are 'reducing' our value down to 
// in this case we are trying to reduce all the values down to a single price
// so the accumulator in our case is the 'total' amount  
// and then next param will be the item itself
// with each iteration we will add to the total the item.price value

/** What is happening? 🤔
  * The items array is being looped through with reduce()
  * With each iteration an individual item is created/assigned
  * and we get the previous value that we returned from reduce()
  * The default value is 0 because we set it that way if changed default value changes
  * When you return from the reduce function is going to be the value for total on the next itereation 
  * When there is no more items to loop through the number you return on your last iteration will be the value of totalPrice
  * Why would I use this?
  * forEach()  tells us we are looping through items 
  * reduce()  tells us that we are reducing the items to a single item ; clear meaning  
 */
const totalPrice = items.reduce((total, item) => {
    console.log(`Total: ${total}`)
    console.log(`Item: ${item.price}`)
    return total + item.price 
}, 0)

console.log(totalPrice);


// Example group the objects by age; we have two people with the same age so we want them grouped in their own array

const people = [
    { name: 'Ina', age: 26 },
    { name: 'Gura', age: 31 },
    { name: 'Ame', age: 42 },
    { name: 'Jill', age: 42 }
]

const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log(result)
console.clear();

//Advanced Reduce
// If you do not set a default value then reduce will take the value of the first item of the array and set it as the starting value

const numbers = [13, 2, 5]

const sum = numbers.reduce((total, number) => {
    console.log(`Total: ${total}`)
    console.log(`Number: ${numbers}`)
    return total + number
}, 0)

console.log(sum)