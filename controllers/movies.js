const fetch = require('node-fetch');

const Movie = require('../models/movies');
const env = require('../config/env');

async function fetchHomeMovies(page) {
  const movieRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}&language=en-US&page=${page}`);
  const moviesData = await movieRes.json();
  return moviesData.results.map((item) => new Movie(item));
}

async function fetchArrayMovies(array) {
  const movieRes = await Promise.all(array.map((id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}`)
  }));

  const data = await Promise.all(movieRes.map((item) => item.json()));

  return data.map((item) => new Movie(item));
}

async function fetchSingleMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${env.API_KEY}`);
  const data = await res.json();

  return new Movie(data);
}

module.exports = {
  fetchHomeMovies,
  fetchArrayMovies,
  fetchSingleMovie,
}
