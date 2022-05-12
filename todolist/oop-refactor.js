// const myNodeList = document.getElementsByTagName("LI");
// const close = document.getElementsByClassName("close");
// const list = document.querySelector("ul");

// window.addEventListener("DOMContentLoaded", function () {
//   createCloseBtns();
//   closeButton();
// });
// // ///////////////////////////////////////////////////////
// // Create 'close' button and append it to each list item
// // ///////////////////////////////////////////////////////

// const createCloseBtns = () => {
//   [].forEach.call(myNodeList, (item, index) => {
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[index].appendChild(span);
//   });
// };

// // ///////////////////////////////////////////////////////
// // Click on a close button to hide the current list item
// // ///////////////////////////////////////////////////////
// const closeButton = () => {
//   [].forEach.call(close, (item, index) => {
//     close[index].onclick = function () {
//       let div = this.parentElement;
//       div.style.display = "none";
//       console.log(div);
//     };
//   });
// };

// // ///////////////////////////////////////////////////////
// // Add a 'checked' symbol when clicking on a list item
// // ///////////////////////////////////////////////////////

// list.addEventListener("click", (event) => {
//   if (event.target.tagName === "LI") {
//     event.target.classList.toggle("checked");
//   }
// });

// // ///////////////////////////////////////////////////////
// // Create a new list item when clicking on the 'Add' button
// // ///////////////////////////////////////////////////////

// let newElement = () => {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   li.appendChild(t);

//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("main__ul").appendChild(li);
//   }
//   // Remove input content from content bar after event
//   document.getElementById("myInput").value = "";

//   createCloseBtns();
//   closeButton();
// };

let createCloseObj = {
  myNodeList: document.getElementsByTagName("LI"),
  createCloseBtns: function () {
    [].forEach.call(this.myNodeList, (item, index) => {
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      this.myNodeList[index].appendChild(span);
    });
  },
};

createCloseObj.createCloseBtns();

console.log();
