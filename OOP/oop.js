// console.log('wah')

// PROCEDURAL PROGRAMMING
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;

// function getWage(){
    // }
    //     return baseSalary + (overtime * rate);

// console.log(getWage())

// OBJECT ORIENDTED PROGRAMING (OOP) 

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
}

employee.getWage();

console.log(employee.getWage())

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// }

// console.log(circle.draw())
// console.log(circle.radius)
// console.log(circle.location.y)

// // Factory Function 
// function createCircle(radius){
//     return {
//         radius,
//         draw: function() {
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)

// console.log(circle.constructor)

// // Constructor Function
// function Circle(radius){
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw')
//     }
// }

// const another = new Circle(1)

// console.log(another.constructor)

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(10)

// Iterate through an object 
for(let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key])
    
    // console.log(key)
    // console.log(circle[key])

}

const keys = Object.keys(circle)
console.log(keys)

if('radius' in circle)
    console.log('Circle has a radius.');

