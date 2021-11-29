const { movies } = require('../models');

const moviedata = [
  {
    genre_id: 1,
    genre_name: 1,
    movie_id: 1,
    movie_name: 1,
    release_date: 1,
    synopsis: 1,
    poster_path: 1,
    backdrop_path: 6,
    tmdb_int: 4,
  },
];

const seedMovieData = () => movies.bulkCreate(moviedata);

module.exports = seedMovieData;
