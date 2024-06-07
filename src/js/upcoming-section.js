const API_KEY = 'd76d8df6a2b0d7e69c80b59c6dadfabe';
const options = { method: 'GET', headers: { accept: 'application/json' } };

fetch('https://api.themoviedb.org/3/trending/all/week?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

if (e.target.id === 'more-details') {
  let html = `
  <h1 class="upcoming-title">upcoming this month</h1>
  <div class="upcoming-div-container">
    <img
      class="upcoming-img"
      src="./images/Upcoming.section.jpg"
      alt="upcoming this month"
    />
    <div>
      <h1 class="upcoming-movie-title">THE LOST CITY</h1>
      <table>
        <tr>
          <td class="upcoming-description-text">Release date</td>
          <td class="upcoming-rel-date">03.03.2023</td>
        </tr>
        <tr>
          <td class="upcoming-description-text">Vote / Votes</td>
          <td class="upcoming-votes-idk">
            <p class="upcoming-votes">7.3</p>
            /
            <p class="upcoming-votes">1260</p>
          </td>
        </tr>
        <tr>
          <td class="upcoming-description-text">Popularity</td>
          <td class="upcoming-popularity">99.9</td>
        </tr>
        <tr>
          <td class="upcoming-description-text">Genre</td>
          <td class="upcoming-genre">Comedy, action</td>
        </tr>
      </table>
      <h2 class="upcoming-about">ABOUT</h2>
      <p class="upcoming-about-description">
        Reclusive author Loretta Sage writes about exotic places in her popular
        adventure novels that feature a handsome cover model named Alan. While
        on tour promoting her new book with Alan, Loretta gets kidnapped by an
        eccentric billionaire who hopes she can lead him to an ancient city's
        lost treasure from her latest story. Determined to prove he can be a
        hero in real life and not just on the pages of her books, Alan sets off
        to rescue her.
      </p>
      <button class="upcoming-button">Add to my library</button>
    </div>
  </div> `;
}
