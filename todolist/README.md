## forEach
    Problem: Refactor the for-loop into a forEach loop; How do I reference the index of the Nodelist
    Solution:
     - Create an empty array 
     - Apply the forEach method
     - call() the target Nodelist
     - create callback function with index as parameter
     - Access index within brackets
```js

// Create 'close' button and append it to each list item 
const myNodeList = document.getElementsByTagName("LI");

/*Vanilla */
// for(let i = 0; i < myNodeList.length; i++){
//     const span = document.createElement("SPAN");
//     const txt = document.createTextNode('\u00D7');
//     span.className = "close";
//     span.appendChild(txt);
//     myNodeList[i].appendChild(span);
// }

/** Code Block
 * For each item in myNodeList
 * Create a span
 * Create a txt
 * Give new span class name 'close'
 * Have span 'close' become the parent of the new txt
 * Have myNodeList current item become the parent of the new span 
*/


// Iterate through the items in the NodeList
/**Refactor ES6 */
[].forEach.call(myNodeList, (item, index) => {
    const span = document.createElement("SPAN"); 
    const txt = document.createTextNode('\u00D7');
    span.className = "close";
    span.appendChild(txt);
    myNodeList[index].appendChild(span);
});

```
