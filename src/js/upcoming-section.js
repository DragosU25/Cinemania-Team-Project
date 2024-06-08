const options = { method: 'GET', headers: { accept: 'application/json' } };
const apiKey = 'd76d8df6a2b0d7e69c80b59c6dadfabe';
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US-EN&page=1`;
const apiUrlGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US-EN&page=1`;

fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

async function getMovieOfTheWeek() {
  try {
    const response = await fetch(apiUrl);
    const movieGenre = await fetch(apiUrlGenre);
    const data = await response.json();
    const movie = data.results[0];

    document.getElementById('movie-title').innerText = movie.title;
    document.getElementById('genre').innerText = movieGenre.id;
    document.getElementById('voteRating').innerText = movie.vote_average;
    document.getElementById('voteCount').innerText = movie.vote_count;
    document.getElementById('release_date').innerText = movie.release_date;
    document.getElementById('moviePoster').innerText = movie.poster_path;
    document.getElementById('movie-overview').innerText = movie.overview;
    document.getElementById('movie-rating').innerText = `${movie.vote_average}`;
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
  var g = '';
  for (i in genres) {
    g += genres[i].name;
  }
  document.getElementById('genres').textContent = genres[i].name;
}

getMovieOfTheWeek();

// const getTrendingMovie = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}trending/movie/week?api_key=${API_KEY}`
//     );
//     if (!response.ok) {
//       throw new Error('Network response was not ok: ' + response.statusText);
//     }
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error('Fetch error', error);
//     throw error;
//   }
// };
