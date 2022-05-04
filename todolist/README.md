## createCloseBtns
    Code Block:
    -forEach item in `myNodeList`
    -create a span element
    -create a text node 
    -give the new span a class name "close"
    -have the span element become the parent of textnode
    -access myNodeList index 
    -have each item of myNodeList become the parent of the new span element
    Solution: creates a span with the content `close' symbol to each item of myNodeList

```js
const createCloseBtns = () => {
    [].forEach.call(myNodeList, (item, index) => {
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodeList[index].appendChild(span);
    })
}
```

## closeButton
    Code Block: 
    -forEach item in `close`
    -access the `close` index 
    -apply the onclick function to each item 
    -onclick func
        -create div from `close` parentElement : li 
        -change div style to hide div
    Solution: Create functionlity the the close button when clicked change the parent of the close button `li` and display none to hide the element

### NEW
    -call() : call a function can html colc, node, arr, and function
    -this.
    -parentElement
    - `let div = this.parentElement`
    - var takes on the value of `this` refers to the span close
    - the reference to parents of the targeted element
    - target parents of span close: li 
    - change display style to none
```js
const closeButton = () => {
    [].forEach.call(close, (item, index) => {
        close[index].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
            console.log(div)
        }
    })
}
```