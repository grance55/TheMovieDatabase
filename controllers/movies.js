const fetch = require('node-fetch');

const Movie = require('../models/movies');
const env = require('../config/env');

async function fetchHomeMovies(page) {
  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}&language=en-US&page=${page}`);
  const moviesData = await movieRes.json();
  return moviesData.results.map((item) => new Movie(item));
}

module.exports = {
  fetchHomeMovies,
}
