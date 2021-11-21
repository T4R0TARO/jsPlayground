/** async function fetchJoke()
 * removes class name 'hidden' to turn on loader
 * fetch data from api url with
 * fetch properties (review)
 * parse data to json
 * add class 'hidden' to turn off loader 
 * return data from API
 */
 export async function fetchJoke() {
    // turn loader on
    loader.classList.remove('hidden');
    const response = await fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    // turn the loader off
    loader.classList.add('hidden');
    return data;
  }