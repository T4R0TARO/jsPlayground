
 const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

 const buns = ['egg', 'wonder', 'brioche'];

 const meats = {
 beyond: 10,
 beef: 5,
 pork: 7
 };

 const prices = {
 hotDog: 453,
 burger: 765,
 sausage: 634,
 corn: 234,
 };

 const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

 const feedback = [
 { comment: 'Love the burgs', rating: 4 },
 { comment: 'Horrible Service', rating: 2 },
 { comment: 'Smoothies are great, liked the burger too', rating: 5 },
 { comment: 'Ambiance needs work', rating: 3 },
 { comment: 'I DONT LIKE BURGERS', rating: 1 },
 ];


//  Array Cardio 

/*===================
Static Methods
=====================*/

// Array.of();
const newArray = Array.of(toppings[0]);
console.log(newArray);
// Make a function that creates a range from x to y with Array.from();
function createRange(start, end){
    const range = Array.from({length: end - start + 1}, (item, index) => {
        return index + start;
    });
    return range;
}
const newRange = createRange(4, 8);
console.log(newRange);
// Check if the last array you created is really an array with Array.isArray();
console.log(Array.isArray(newRange));
// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const meatEntries = Object.entries(meats);
console.log(meatEntries);
const meatKeys = Object.keys(meats);
console.log(meatKeys);
const meatValues = Object.values(meats);
console.log(meatValues);
/*======================
Instance Methods
========================*/

// Display all bun types with " or " - use join()
const joinBuns = buns.join(' or ') 
console.log(joinBuns);
// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const newString = "hot dogs,hamburgers,sausages,corn";
const splitString = newString.split(',');
console.log(splitString);
// take the last item off toppings with pop()
const popItem = toppings.pop(); 
console.log(popItem);
// add it back with push()
console.log(toppings)
toppings.push(popItem);
console.log(toppings)

// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);

// add it back in with unshift()
console.log(toppings)
toppings.unshift(firstItem);
console.log(toppings)

// Do the last four,but immutable (with spreads and new variables)

// Make a copy of the toppings array with slice()
const sliceCopy = toppings.slice(0, toppings.length);
console.log(sliceCopy);

// Make a copy of the toppings array with a spread 🍙
const spreadCopy = [...toppings];
console.log(spreadCopy);

// take out items 3 to 5 of your new toppings array with splice()
const spliceCopy = spreadCopy.splice(3, 3);
console.log(spliceCopy);

// find the index of Avocado with indexOf() / lastIndexOf()
console.log(toppings.indexOf('Avocado'));
console.log(toppings[5]);
// Check if hot sauce is in the toppings with includes()
const isThereHot = toppings.includes('hot sauce'); 
console.log(isThereHot);
// add it if it's not
if(!isThereHot){
    toppings.push('hot sauce');
}
console.log(toppings)

// flip those toppings around with reverse()
const reverseToppings = toppings.reverse();
console.log(reverseToppings);

/*=======================
Callback Methods
=========================*/

// find the first rating that talks about a burger with find()
const firstRating = feedback.find(rating => rating.comment.includes('burg'));
console.log(firstRating);

// find all ratings that are above 2 with filter()
const above2Rating = feedback.filter(rating => rating.rating > 2);
console.log(above2Rating);

// find all ratings that talk about a burger with filter()
const allBurgs = feedback.filter(rating => rating.comment.includes('burg'))
console.log(allBurgs);

// Remove the one star rating however you like!
const badReview = feedback.filter(rating => rating.rating === 1) 
const badReviewer = feedback.pop();
console.log(badReviewer);
console.log(badReview);
console.log(feedback);

// check if there is at least 5 of one type of meat with some() *turn into object
const atLeastFive = Object.values(meats).some(rating => rating >= 5);
console.log(atLeastFive);

// make sure we have at least 3 of every meat with every()
const atLeastThree = Object.values(meats).every(rating => rating >= 3);
console.log(atLeastThree)
// sort the toppings alphabetically with sort()
const sortedTopping = toppings.sort();
console.log(sortedTopping);
// sort the order totals from most expensive to least with .sort()
function numberSort(a,b){
    return a -b;
}
const sortedTotals = orderTotals.sort(numberSort) ;
console.log(sortedTotals)
// Sort the prices with sort()
const sortPrices = Object.values(prices).sort(numberSort);
console.log(sortPrices);
/*===========================
Looping Methods (next)
=============================*/