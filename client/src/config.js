const API_URL = "https://api.themoviedb.org/3/";
// const API_KEY2 = "844dba0bfd8f3a4f3799f6130ef9e335";
const API_KEY = "121faa95467770d73bd452962979b83e";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = "w1280";
// w92, w154, w185, w342, w500, w780, original.
const POSTER_SIZE = "w500";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "https://cine--app.herokuapp.com/api";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  BASE_URL,
};
