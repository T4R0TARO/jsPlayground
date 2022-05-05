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
 * create var that refers to elements with class name 'close'
 * iterate through the 'close' items
 * for Each iteration: 
 * access the 'close' index
 * apply the onlcick funct for each item:
 * onlick():
 * create a var that refers to the parernt of the SPAN > LI 
 * change the style display="none"

 */

const close = document.getElementsByClassName('close')

for(let i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = 'none'
    }
}

// Click LI items to toggle check mark icon
/** Code Block
 * create a var that refers to the UL element
 * add event listener to var:
 * if(event.target.tagName = 'LI') 
 * event.target.classList.toggle('checked')

 */
const list = document.querySelector('UL')

list.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked')
    }
})

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
 * Create functionality to close button

 */

function newElement(){
    const li = document.createElement('LI')
    const inputValue = document.getElementById('myInput').value
    const t = document.createTextNode(inputValue)
    li.appendChild(t)
    // console.log(inputValue)

    if(inputValue === ''){
        alert('You have to write something') 
    } document.getElementById('main__ul').appendChild(li)
    document.getElementById('myInput').value = ''

    const span = document.createElement('SPAN')
    const text = document.createTextNode('\u00D7')
    span.className = 'close'
    span.appendChild(text)
    li.appendChild(span)

    
    for(let i = 0; i < close.length; i++){
        close[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = 'none'
        }
    }
}