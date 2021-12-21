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
const newErArray = Array.of('hmu');
const newArray = Array.of('wah');
// console.log(newArray);

// Make a function that creates a range from x to y with Array.from();
function createRange(start, end) {
const range = Array.from({length:end - start + 1}, (item, index) => {
return index + start; 
});
return range;
}

const newRange = createRange(3, 7);

// console.log(newRange);

// Check if the last array you created is really an array with Array.isArray();
// console.log(Array.isArray(newRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
const newMeatsEntries = Object.entries(meats);
// console.log(newMeatsEntries);
const newMeatsKeys = Object.keys(meats);
// console.log(newMeatsKeys);
const newMeatsValues = Object.values(meats);
// console.log(newMeatsValues);

/*======================
Instance Methods
========================*/

// Display all bun types with " or " - use join()
// console.log(buns.join(' or '));

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const newString = "hot dogs,hamburgers,sausages,corn";
const splitString = newString.split(',');
// console.log(splitString);

// take the last item off toppings with pop()
const popItem = toppings.pop();
// console.log(popItem);
// console.log(toppings);

// add it back with push()
toppings.push(popItem);
// console.log(toppings);

// take the first item off toppings with shift()
const firstItem = toppings.shift();
// console.log(firstItem);
// console.log(toppings);

// add it back in with unshift()
toppings.unshift(firstItem);
// console.log(toppings);

// Do the last four,but immutable (with spreads and new variables)

// Make a copy of the toppings array with slice()
const newSlice = toppings.slice(0, toppings.length);
// console.log(newSlice);

// Make a copy of the toppings array with a spread 🍙
const newSpread = [...toppings];
// console.log(newSpread);
// console.log(toppings); 

// take out items 3 to 5 of your new toppings array with splice()
const atLeastFive = newSlice.splice(3, 3);
// console.log(atLeastFive);

// find the index of Avocado with indexOf() / lastIndexOf()
// console.log(toppings.indexOf('Avocado'));
// console.log(toppings[5]);

// Check if hot sauce is in the toppings with includes()
// console.log(toppings.includes('hot sauce'));
const isInToppings = toppings.includes('hot sauce');

// add it if it's not
if(!isInToppings){
toppings.push('hot sauce');
}
// console.log(toppings);

// flip those toppings around with reverse()
// console.log(toppings.reverse());


/*=======================
Callback Methods
=========================*/

// find the first rating that talks about a burger with find()

const burgRating = feedback.find(rating => rating.comment.includes('burg'));
// console.log(burgRating);

// find all ratings that are above 2 with filter()
const above2Rating = feedback.filter(rating2 => rating2.rating > 2);
// console.log(above2Rating);

// find all ratings that talk about a burger with filter()
const allBurgs = feedback.filter(allBurgs => allBurgs.comment.includes('burg'));
// console.log(allBurgs);

// Remove the one star rating however you like!
const singleRating = feedback.filter(singleStar => singleStar.rating === 1);
// console.log(singleRating);
// console.log(feedback);

// check if there is at least 5 of one type of meat with some() *turn into object
const meatsAtLeast5 = Object.values(meats).some( meatsValue => meatsValue >= 5);
// console.log(meatsAtLeast5);

// make sure we have at least 3 of every meat with every()
const meatsAtLeast3 = Object.values(meats).every( meatsValue => meatsValue >= 3);
// console.log(meatsAtLeast3);


// sort the toppings alphabetically with sort()
const sortedToppings = toppings.sort();
// console.log(sortedToppings);

const numbers = [1, 2, 3, 100, 40, 69, 11];

const sortedNumbers = numbers.sort((firstItem, secondItem) => {
return firstItem - secondItem;
});

// console.log(sortedNumbers);

// sort the order totals from most expensive to least with .sort()
function numberSort(a, b){
return a - b;
}

// console.log(orderTotals.sort(numberSort))

// Sort the prices with sort()
const productSortedByPrice = Object.entries(prices).sort(function(a,b){
const aPrice = a[1];
const bPrice = b[1];
return aPrice - bPrice;
})
// console.log(productSortedByPrice);

/*===========================
Looping Methods (next)
=============================*/