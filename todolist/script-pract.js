// Create a close button for the li items
/** Code Block
 * create var that refers to LI elements
 * iterate through LI items
 * for Each iteration:
 * create a span element
 * create a textNode
 * give SPAN a className = 'close'
 * have SPAN become parent of textNode
 * access the LI index
 * have LI become parent of SPAN
 */
// Contain li elements in a var
// Iterate through the amount li elements
// Each iteration
// create span element
// create textNode
// give class name to element
// access the each li and make it the parent of the span element
const myNodeList = document.getElementsByTagName("LI");

[].forEach.call(myNodeList, (item, index) => {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u0007");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[index].appendChild(span);
});

// Click on close button and hide the current list item
/** Code Block
 * create var that refers to elements with class name 'close'
 * iterate through the 'close' items
 * for Each iteration: 
 * access the 'close' index
 * apply the onlcick funct for each item:
 * onlick():
 * create a var that refers to the parent of the SPAN > LI 
 * change the style display="none"

 */

const close = document.getElementsByClassName("close");

[].forEach.call(close, (item, index) => {
  close[index].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
});

// Contain the close item values in a var
// Iterate through close items
// each close item
// apply onclick function
// func will
// access the close items parent element `div`
// change the style to display none

// Click LI items to toggle check mark icon
/** Code Block
 * create a var that refers to the UL element
 * add event listener to var:
 * if(event.target.tagName = 'LI') 
 * event.target.classList.toggle('checked')

 */
const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

//Create new list item when clicking on the 'Add' button
/**Code Block
 * create function that will create new list element
 * create LI element
 * create var that refers to the value of the user input
 * create textNode that refers to the value from the user input
 * have LI become parent of textNode
 * 
 * if user input is blank
 * alert "You must write something"
 * else get access to UL 
 * have UL become parent of LI 
 * 
 * Create a close button for new LI 
 * 
 * Create functionality to close  button

 */
