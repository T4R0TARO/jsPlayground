# Fetch API 
How does the Fetch API work? 
Start with the keyword `fetch`then ('https://linktotheAPI.in/ap/user')
which will return back data to you 

Fetch API is promised based 
Fetch always succceds so check if response is 'ok'


```js
fetch('https://reqres.in/api/users', {
    .then(res => res.json()) //access response and parse reseponse to json 
    .then(data => console.log(data)) // display the newly parsed json data
})
```

Now for error handling, if you apply a .catch() it will not work. Even if we have 404 the success code block will run because fetch always succceed.  We need to check if `res` is `ok`

```js
fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok){
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
        res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
```