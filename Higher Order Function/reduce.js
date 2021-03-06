const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  //   Iterate through the arrays and log every item 
    for(let i = 0; i < companies.length; i++){
        console.log(companies[i])
    }  

    const canDrink = [];
    for(let i = 0; i < ages.length; i++){
        if (ages[i] >= 21){
            canDrink.push(ages[i])
        }
    }
    
    console.log(canDrink);


/*-----------
forEach
------------*/
companies.forEach(function(company){
    console.log(company.name);   
})
/*-----------
filter
------------*/
    
    // Filter retail companies 
    // Get all retail 
const allRetail = companies.filter( company => company.category === "Retail");
console.log(allRetail);

    // Get companies that started in the 80s
const company80 = companies.filter( company => company.start >= 1980 && company.start < 1990 ) ;
console.log(company80)
    // Get companies that lasted 10 years or more
const moreThenTen = companies.filter( company => company.end - company.start >= 10 );
console.log(moreThenTen);

 /*-----------
    map
 ------------*/
//Create array of company names 
// const companyNames = companies.map(function(company){
//     return company.name;
// });

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

const testMap = companies.map( company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
const agesTimesTwo = ages.map(age => age * 2)
console.log(agesTimesTwo);
console.log(agesSquare);

 /*-----------
    sort
 ------------*/
 
//  const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     } else {
//         return -1;
//     }
//  }); 

//  const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
//  console.log(sortedCompanies);

//  const sortAges = ages.sort((a, b) => a -b);
//  console.log(sortAges)
 
  /*-----------
    reduce
 ------------*/

 //  let ageSum = 0;
//  for(let i = 0; i < ages.length; i++){
//      ageSum += ages[i];
//  } 

// reduce 
// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// console.log(totalYears);
// console.log(ageSum);

//Combine Methods

const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0);
console.log(combined);