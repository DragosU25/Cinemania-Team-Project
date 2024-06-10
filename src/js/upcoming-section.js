const options = { method: 'GET', headers: { accept: 'application/json' } };
const apiKey = 'd76d8df6a2b0d7e69c80b59c6dadfabe';
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US-EN&page=1`;
const apiUrlGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US-EN&page=1`;
const BASE_URL = 'https://api.themoviedb.org/3/';
const imagePath = 'https://image.tmdb.org/t/p/w1280/';
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

async function getMovieOfTheWeek() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const movie = data.results[0];
    const imagePath = 'https://image.tmdb.org/t/p/w1280/';
    const imagePoster = movie.backdrop_path;
    console.log(imagePoster);

    document.getElementById('movie-title').innerText = movie.title;
    // document.getElementById('genre').innerText = movieGenre.id;
    document.getElementById('voteRating').innerText = movie.vote_average;
    document.getElementById('voteCount').innerText = movie.vote_count;
    document.getElementById('release_date').innerText = movie.release_date;
    document.getElementById('movie-overview').innerText = movie.overview;
    document.getElementById('movie-rating').innerText = `${movie.vote_average}`;
    var el = document.getElementById('moviePoster');
    el.innerHTML = `<img class="upcoming-img" src='${imagePath}${imagePoster}'>`;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
}

getMovieOfTheWeek();

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const genres = data.genres;
    const genreList = genres.map(genre => genre.name).join(', ');
    console.log('Movie Genres:', genreList);
    // Display genreList on your webpage
    document.getElementById('genre').innerText = genreList;
  })
  .catch(error => console.error('Error fetching genres:', error));

// const idMovieStorage = movie.id;
// console.log(idMovieStorage);
// var buttonStorageSave = document.getElementById('saveServer');
// localStorage.setItem('server', buttonStorageSave.val(idMovieStorage));
