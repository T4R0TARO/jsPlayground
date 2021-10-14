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
