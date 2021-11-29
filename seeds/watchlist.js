
const { watchlist } = require('../models');

const watchlistData = [
  {
    genre_name: 1,
    tmdb_movie_id: 1,
    notification_period: 1,
  },
];

const seedWatchlistData = () => watchlist.bulkCreate(watchlistData);

module.exports = seedWatchlistData;



