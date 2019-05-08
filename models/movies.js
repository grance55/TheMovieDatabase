class Movie {
  constructor(movie) {
    this.id = movie.id;
    this.poster = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
    this.title = movie.title;
    this.year = movie.release_date;
    this.plot = movie.overview;
    this.cover = movie.backdrop_path;
    this.vote = movie.vote_average;
    this.duration = movie.runtime;
    this.rate = movie.vote_average;
    this.genre = movie.genres.map((item) => item.name).join();
  }
}

module.exports = Movie;
