class Movie {
  constructor({Poster, Title, Released, Plot}) {
    this.poster = Poster;
    this.title = Title;
    this.year = Released;
    this.plot = Plot;
  }
}

module.exports = Movie;
