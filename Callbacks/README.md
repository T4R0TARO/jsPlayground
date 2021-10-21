# Callbacks
1. What is a callback function?
    A callback function is a function that lives within another function. The inner function is then fired💥 from within; to complete either a rountine or action

2. What are example of callback functions?
    `addEventListener()` is a example of a JS method that takes 'function' as a parameter. Wait for a event, then fires💥 the function.
    `setTimeout()` is another example of a JS method that takes functions a a parameter

```js

 /**
  * More Callbacks
  */

  const button = document.querySelector('button')

  function toggle() {
      button.classList.toggle('altColor')
  }

// call toggle within addEventListener() when the event 'click' occurs
button.addEventListener('click', toggle)
```