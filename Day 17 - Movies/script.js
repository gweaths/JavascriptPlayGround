const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=21f5021eea3a1c5d8b516c7cd50a2c43&page=1';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=21f5021eea3a1c5d8b516c7cd50a2c43&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


const getMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
};

const showMovies = async (movies) => {
    main.innerText = '';
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML =

            `<img
        src = "${IMG_PATH + poster_path}"
        alt = "${title}"
            />
        <div class="movie-info">
          <h3>Movie Title</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`;

        main.appendChild(movieElement);
    });
};

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';

    }
    else if (vote >= 3 && vote < 8) {
        return 'orange';
    }
    else {
        return 'red';
    }
}

getMovies(API_URL);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm) {
        getMovies(`${SEARCH_URL + searchTerm} `);
        search.value = '';
    } else {
        window.location.reload();
    }
});

form;

getMovies(API_URL);


