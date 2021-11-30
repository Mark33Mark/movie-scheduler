const { movies } = require('../models');

const moviedata = [
  {
    id: 1,
    tmdb_genre_id: 1,
    genre_name: 1,
    tmdb_movie_id: 1,
    movie_name: 1,
    release_date: 1,
    synopsis: 1,
    poster_path: 1,
    backdrop_path: 6,
    popularity: 4,
    original_language: ''
  },
];

const seedMovieData = () => movies.bulkCreate(moviedata);

module.exports = seedMovieData;
