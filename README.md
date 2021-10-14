## AJAX

AJAX: Asynchronus JavaScript and XML
What does AJAX allow us to do?
AJAX lets use retrieve data from without leaving the curren webpage

## How AJAX works
1. Create an XMLHTTP Request object 
2. Create a callback function 
3. Open a request 
4. Send the request 

```js
// 1. Create a XMLHTTP request object
    var xhr = new XMLHttpRequest();
```
* If you wanted to use ajax twice on a page you would have to create a new request object 

--------------------------------------------------------------------
```js
// 2. Create a callback funtion 
    xhr.onreadystatechange = function () {

    }
```
* Think of  a callback like a note you leave the web-browser, give me a call when you are ready
* When the browser sends off its ajax request it continues doing other things
* This is the asynchronous part of ajax
* The most important event  is the onreadystatechange which is triggered whenever there's a change in an AJAX request

```js
// 2. Create a callback function cont.
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 ) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }
    }
```
* We are checking if the ready state is equal to 4
* This means we've got a response back 
* Take the full response and place it on the webpage 
* First select the element and change its html content with innerHTML
* Every XML HTTP request object has a property called reponseText
* This is the information that the web server sends back 
--------------------------------------------------------------------

```js
// 3. Open Request
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 ) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }
    }

    xhr.open('GET', 'sidebar.html');
```
* an XHR object has a method or function called open
* This function prepares the browser for sending the request
* You give the function two pieces of information 
* First is  the HTTP method that your are going to use 
* Most common GET and POST
* The URL is where the request is going

```js
// 4. Send Request
    xhr.onreadystatechange = function () {
        if ( xhr.readyState === 4 ) {
            document.getElementById('ajax').innerHTML = xhr.responseText;
        }
    }

    xhr.open('GET', 'sidebar.html');

 
        xhr.send();

```
* The previous three steps gave the web browser all the informationit needs;
* We can now send off the request to the web server 
* send()

```js
// 4. Send Request cont.
var xhr = new XMLHttpRequest();
    
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 ) {
    document.getElementById('ajax').innerHTML = xhr.responseText; 
    
  }
};

xhr.open('GET', 'sidebar.html');

function sendAJAX() {
  xhr.send();
  document.getElementById('load').style.display = "none"
}
```
* We can make the page more interactive by attaching the sendAJAX to a function eventlistener  and have the button disappear when after click






