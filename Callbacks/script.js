console.log('wah');

//Callback Function


// The function that will be called later in the future (callback)
function sayHello() {
    console.log('Hello');
}
// The function containing the callback function
// function can be used as a param. as well
// In this case all functions that fire through this function is a callback 
function executeCallback( callback ){
    callback();
}
// Function fires callback function
executeCallback(sayHello);

 
// More Callbacks
const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

function makeRed(element) {
    element.style.backgroundColor = "red";
}

function makeBlue(element) {
    element.style.backgroundColor = "blue";
}

function makeGreen(element) {
  element.style.backgroundColor = "Green"
}

function addStyleToElement(element, callback) {
    callback(element);
}

addStyleToElement(div1, makeRed);

addStyleToElement(div2, makeBlue);

addStyleToElement(div3 , makeGreen);

// More Callbacks 

const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');


const focusHandler =  event => {
    event.target.className = 'highlight';
  };

const blurHandler =  event => {
    event.target.className = '';
  };

 nameInput.addEventListener('focus', focusHandler);
 nameInput.addEventListener('blur', blurHandler);


 messageTextArea.addEventListener('focus',  focusHandler);
 messageTextArea.addEventListener('blur', blurHandler);