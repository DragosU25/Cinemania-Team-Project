async function fetchNewMovies() {
  const apiKey = 'd76d8df6a2b0d7e69c80b59c6dadfabe';
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await response.json();
  return data.results;
}

function getRandomMovie(movies) {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
}

function displayMovie(movie) {
  document.getElementById(
    'movie-image'
  ).src = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  document.getElementById('movie-title').textContent = movie.title;
  document.getElementById(
    'movie-release-date'
  ).textContent = `${movie.release_date}`;
  document.getElementById('movie-rating').textContent = `${movie.vote_average}`;
  document.getElementById('movie-genres').textContent = `${movie.genre_ids.join(
    ', '
  )}`;
  document.getElementById('movie-description').textContent = movie.overview;
  document.getElementById('voteRating').textContent = movie.vote_average;
  document.getElementById('voteCount').textContent = movie.vote_count;
}

function updateLibraryButton(movie) {
  const library = JSON.parse(localStorage.getItem('myLibrary')) || [];
  const isInLibrary = library.some(item => item.id === movie.id);
  const button = document.getElementById('library-button');

  if (isInLibrary) {
    button.textContent = 'Remove from My Library';
  } else {
    button.textContent = 'Add to My Library';
  }

  button.onclick = function () {
    if (isInLibrary) {
      removeFromLibrary(movie.id);
    } else {
      addToLibrary(movie);
    }
    updateLibraryButton(movie);
  };
}

function addToLibrary(movie) {
  const library = JSON.parse(localStorage.getItem('myLibrary')) || [];
  library.push(movie);
  localStorage.setItem('myLibrary', JSON.stringify(library));
}

function removeFromLibrary(movieId) {
  let library = JSON.parse(localStorage.getItem('myLibrary')) || [];
  library = library.filter(item => item.id !== movieId);
  localStorage.setItem('myLibrary', JSON.stringify(library));
}

document.addEventListener('DOMContentLoaded', async function () {
  const movies = await fetchNewMovies();

  if (movies.length === 0) {
    document.getElementById('movie-container').innerHTML =
      '<p>No new movies available.</p>';
    return;
  }

  const randomMovie = getRandomMovie(movies);
  displayMovie(randomMovie);
  updateLibraryButton(randomMovie);
});
