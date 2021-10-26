
    // Set Variables
    const baseEndpoint = `https://api.github.com` // the url where you get the data 
    const usersEndpoint = `${baseEndpoint}/users`
    const userEl = document.querySelector('.user') // DOM select p element
  
    // async await function 
    async function displayUserName(username) {  
    userEl.textContent = 'loading...';
    const response = await fetch(`${usersEndpoint}/${username}`) // fetch the data 
    const data = await response.json();
      console.log(data) // display data after json parse
      console.log(data.blog)
      console.log(data.name)
      console.log(data.location)
      userEl.textContent = `${data.name} - ${data.blog}` // changes textContent 
    }

    // Error handling 
    function handleError(err){
      console.log('OH NO!')
      console.log(err)
    }
    
    // Call the function 
    displayUserName('stolinski').catch(handleError)
