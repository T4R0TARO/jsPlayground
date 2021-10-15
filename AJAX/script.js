// 1. Create a new XMLHttpRequest Object 
var xhr = new XMLHttpRequest();
// 2. Create a callback function  
// Create a conditional that wait for the readyState to full complete 
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200 ) {
    document.getElementById('ajax').innerHTML = xhr.responseText; 
    
  }
};
// 3. Open a request 
// Open request contain two values the HTTP method, and the url path its opening 
xhr.open('GET', 'sidebar.html');


function sendAJAX() {
// 4. Send the request
  xhr.send();
  document.getElementById('load').style.display = "none"
}

