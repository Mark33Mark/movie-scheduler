
const { watchlist } = require('../models');

const watchlistData = [
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

const seedWatchlistData = () => watchlist.bulkCreate(watchlistData);

module.exports = seedWatchlistData;



