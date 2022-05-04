// Create 'close' button and append it to each list item 
const myNodeList = document.getElementsByTagName("LI");

[].forEach.call(myNodeList, (item, index) => {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    myNodeList[index].appendChild(span);
});

// Click on a close button to hide the current list item 

const close = document.getElementsByClassName("close");

[].forEach.call(close, (item,index) => {
    close[index].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
})

// Add a 'checked' symbol when clicking on a list item 
const list = document.querySelector('ul');

list.addEventListener('click', event => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});


// Create a new list item when clicking on the 'Add' button

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
      document.getElementById("myInput").value = "";
  
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  

    [].forEach.call(close, (item, index) => {
        close[index].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
          }
    })
  }
