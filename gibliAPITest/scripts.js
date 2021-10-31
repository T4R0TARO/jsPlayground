const app = document.getElementById('root');
const logo = document.createElement('img');

logo.src = 'https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png';
logo.setAttribute('align', 'center');


const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

	/* Begin accessing JSON data here */
	if(request.status>=200 && request.status<400){
		var data = JSON.parse(this.response);
		
			for(var i=0;i<data.length;i++){

			const card = document.createElement('div'); // create div container for content 
			card.setAttribute('class', 'card'); //set attribute for div container 

			const h1 = document.createElement('h1'); // create h1 element 
			h1.textContent = data[i].title;// have the content of the h1 element be = to the data.title value
			
			// var title = data[i].title.replace(/[^a-zA-Z]/g, ""); //single title 🤔?
			// var url = encodeURI('https://www.studioghibli.com.au/' // url to send user for more info; --> official store
					// + title.toLowerCase()); // changes strng to lowercase 🤔?
			//console.log(data[i].title);

			// var desc = data[i].description.substring(0,300) + '.....';// description data from API contained in variable 🤔?
			// const p = document.createElement('p');// creaate p element 
			// p.textContent = desc; // have the contents of p element = to the value of desription value of API

			// const a = document.createElement('a'); 
			// a.setAttribute('href', url);
			// a.textContent = 'more';

			container.appendChild(card);// main div container makes card div it child
			card.appendChild(h1); // card div makes h1 element its child
			// card.appendChild(p); // h1 element makes p element its child
			// p.appendChild(a); // p element makes a element its child 
		}
		// Error Handler 
	} else{
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Gah, it's not working!`;
		app.appendChild(errorMessage);
	}
	//console.log(data);
}

//Send Request
request.send();
