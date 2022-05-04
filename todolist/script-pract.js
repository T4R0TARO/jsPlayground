
// Create a close button for the li items 
/** Code Block
 * create var that refers to all li elements
 * iterate through var 
 * for Each iteration:
 * create a span
 * create a textNode
 * give span className 'close'
 * make span parent of textNode
 * access index
 * make li parent of span 
 */

const myNodeList = document.getElementsByTagName('LI')

for(let i = 0; i < myNodeList.length; i++){
    const span = document.createElement('SPAN')
    const text = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(text)
    myNodeList[i].appendChild(span)
}

// Click on close button and hide the current list item 
/** Code Block
 * create var that referes to all elements with the 'close' class Name
 * Iterate through the var
 * access the index
 * apply the onlclick() on each item:
 * create var that refers to this span parent element
 * change the style of var to display none 
 */

const close = document.getElementsByClassName('close')

for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        const div = this.parentElement;
        div.style.display = "none";
    }
}



// Click LI items to toggle check mark icon
/** Code Block
 * create a var that refers to the UL element
 * add Event Listeners when clicked:
 * event.currentTarget.tagName('LI')
 * event.currentTarget.classList.toggle('checkout')
 */

const list = document.querySelector('ul');

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
})

// console.log(list)
