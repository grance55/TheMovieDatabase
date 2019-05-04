class Movie {
  constructor({id, poster_path, title, release_date, overview}) {
    this.id = id;
    this.poster = `http://image.tmdb.org/t/p/w500${poster_path}`;
    this.title = title;
    this.year = release_date;
    this.plot = overview;
    // this.cover = backdrop_path;
    // this.vote = vote_average;
  }
}

module.exports = Movie;

// { adult: false,
//   backdrop_path: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
//   belongs_to_collection:
//    { id: 86311,
//      name: 'The Avengers Collection',
//      poster_path: '/qJawKUQcIBha507UahUlX0keOT7.jpg',
//      backdrop_path: '/zuW6fOiusv4X9nnW3paHGfXcSll.jpg' },
//   budget: 500000000,
//   genres: [ [Object], [Object], [Object] ],
//   homepage: 'https://www.marvel.com/movies/avengers-endgame',
//   id: 299534,
//   imdb_id: 'tt4154796',
//   original_language: 'en',
//   original_title: 'Avengers: Endgame',
//   overview: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
//   popularity: 488.627,
//   poster_path: '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
//   production_companies: [ [Object] ],
//   production_countries: [ [Object] ],
//   release_date: '2019-04-24',
//   revenue: 1664151786,
//   runtime: 181,
//   spoken_languages: [ [Object] ],
//   status: 'Released',
//   tagline: 'Part of the journey is the end.',
//   title: 'Avengers: Endgame',
//   video: false,
//   vote_average: 8.7,
//   vote_count: 3774 }
