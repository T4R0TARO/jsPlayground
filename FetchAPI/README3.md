1. Fetch the url
2. response/parse file
3. do some with the data 
4. catch for errors 

## Response for text()
```js
fetch('sample.txt')
.then((res) => res.text()) // for text files
.then((data) => console.log(data))
.catch((err) => console.log(err))
```

## Response for json()
```js
fetch('sample.txt')
.then((res) => res.json()) // for text files
.then((data) => console.log(data))
.catch((err) => console.log(err))
```

----------------------------------------------------------


## fetch() properties 
```js
    function addPosts(e){
        e.preventDefault();

        let title = document.getElementById('title').value
        let body = document.getElementById('body').value

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type':'application/json'
            },
            body:JSON.stringify({title:title, body:body})
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }

```