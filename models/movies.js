class Movie {
  constructor({id, poster_path, title, release_date, overview}) {
    this.id = id;
    this.poster = `http://image.tmdb.org/t/p/w500${poster_path}`;
    this.title = title;
    this.year = release_date;
    this.plot = overview;
  }
}

module.exports = Movie;
