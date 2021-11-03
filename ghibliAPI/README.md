# Fetch API
TODO: Take the data from the public API and display the data on the page. 

### Solution:
1. Contain existing elements in variables for later use
2. Create new elements for the API data that will be assigned later 
3. `fetch()` data
4. parse data ex. `json()`
5. execute code block:
```js
const app = document.getElementById('root') 
const container = document.createElement('div')

container.setAttribute('class', 'container')
app.appendChild(container)

function getData() {
    fetch('https://ghibliapi.herokuapp.com/films/')
    .then((res) => res.json())
    .then((data) => {      
        //Code here
    })
    .catch((err) => console.log(err))
}
getData()


```

### Code Block: 
- Loop through the API array items
- For every loop create a `div` and set its class to the API data
- For every loop create a `h1` and set its class to the API data
- append the new elements `div` `h1` to the appropriate parent element

```js
        for(let i = 0; i < data.length; i++){
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const h1 = document.createElement('h1')
            h1.textContent = data[i].title

            container.appendChild(card)
            card.appendChild(h1)
        }

```

LT: Before you can display the data on the page, you must first create an element for the data to be stored in, then display that element on the DOM.
 
----------------------------------------
6. Catch for errors
7. Call the function
---------------------------------------- 

