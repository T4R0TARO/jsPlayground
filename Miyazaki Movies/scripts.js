// Get DATA
const baseEndPoint = "https://ghibliapi.herokuapp.com/films/";
const sectionContainer = document.querySelector(".section-container");

window.addEventListener("DOMContentLoaded", function () {
  getData();
});

async function getData() {
  try {
    const response = await fetch(`${baseEndPoint}`);
    const data = await response.json();
    console.log(data);

    let displayMovieItems = data.map(function (movie) {
      return `<div class="movie-item">
            <img src=${movie.image} alt=${movie.title} class="movie-img">
            <div class="item-info">
                <header>
                    <h2>${movie.title}</h2>
                    <h4>${movie.original_title}</h4>
                    <h4>${movie.original_title_romanised}</h4>
                    <h4>${movie.director}</h4>
                </header>
                <img src="${movie.movie_banner}" alt="movie-banner" class="movie-banner">
                <p>${movie.description}</p>
                <div class="btn-container">
                    <button class="trailer-button">Watch Trailer</button>
                </div>
            </div>
        </div>`;
    });
    displayMovieItems = displayMovieItems.join("");
    console.log(displayMovieItems);
    sectionContainer.innerHTML = displayMovieItems;
  } catch (err) {
    console.log(err);
    console.log("Error");
  }
}
