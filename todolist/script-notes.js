const myNodeList = document.getElementsByTagName("LI");
const close = document.getElementsByClassName("close");
const list = document.querySelector("ul");

window.addEventListener("DOMContentLoaded", function () {
  createCloseBtns();
  closeButton();
});
// ///////////////////////////////////////////////////////
// Create 'close' button and append it to each list item
// ///////////////////////////////////////////////////////

/*Vanilla */
// for(let i = 0; i < myNodeList.length; i++){
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode('\u00D7');
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }show

// BUG
// myNodeList.forEach(function(index){
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode('\u00D7');
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// })

function createCloseBtns() {
  [].forEach.call(myNodeList, function (item, index) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[index].appendChild(span);
  });
}
// console.log(myNodeList);

// ///////////////////////////////////////////////////////
// Click on a close button to hide the current list item

/** Code Block
 * foreach item in close
 * apply the onlick method
 * onclick function
 * create a div from the closed buttons parent element li
 * style the div with display = "none"
 */
// ///////////////////////////////////////////////////////

function closeButton() {
  [].forEach.call(close, function (item, index) {
    close[index].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
      console.log(div);
    };
  });
}

// ///////////////////////////////////////////////////////
// Add a 'checked' symbol when clicking on a list item

/** Code Block
 * add event listener to all the items of the ul list
 * click event
 * if target of click tag is a LI
 * toggle class name 'checked' on click
 */
// ///////////////////////////////////////////////////////

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
});

// console.log(list)
// ///////////////////////////////////////////////////////
// Create a new list item when clicking on the 'Add' button

// ///////////////////////////////////////////////////////

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("main__ul").appendChild(li);
  }
  // Remove input content from content bar after event
  document.getElementById("myInput").value = "";

  // const span = document.createElement("SPAN");
  // const txt = document.createTextNode("\u00D7");
  // span.className = "close";
  // span.appendChild(txt);
  // li.appendChild(span);
  createCloseBtns();

  // Add close function to NEW list items
  // [].forEach.call(close, function(item, index){
  //     close[index].onclick = function(){
  //         let div = this.parentElement;
  //         div.style.display = "none";

  //     }
  // })
  closeButton();
}
