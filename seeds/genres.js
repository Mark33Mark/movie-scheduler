const { genres } = require('../models');

const genreData = [
  {
    id: 1,
    genre_id: 28,
    genre_name: 'Action',
  },
  {
    id: 1,
    genre_id: 12,
    genre_name: 'Adventure',
  },
  {
    id: 1,
    genre_id: 16,
    genre_name: 'Animation',
  },
  {
    id: 1,
    genre_id: 35,
    genre_name: 'Comedy',
  },
  {
    genre_id: 80,
    genre_name: 'Crime',
  },
  {
    genre_id: 99,
    genre_name: 'Documentary',
  },
  {
    genre_id: 18,
    genre_name: 'Drama',
  },
  {
    genre_id: 10751,
    genre_name: 'Family',
  },
  {
    genre_id: 14,
    genre_name: 'Fantasy',
  },
  {
    genre_id: 36,
    genre_name: 'History',
  },
  {
    genre_id: 27,
    genre_name: 'Horror',
  },
  {
    genre_id: 10402,
    genre_name: 'Music',
  },
  {
    genre_id: 9648,
    genre_name: 'Mystery',
  },
  {
    genre_id: 10749,
    genre_name: 'Romance',
  },
  {
    genre_id: 878,
    genre_name: 'Science_Fiction',
  },
  {
    genre_id: 10770,
    genre_name: 'TV_Movie',
  },
  {
    genre_id: 53,
    genre_name: 'Thriller',
  },
  {
    genre_id: 10752,
    genre_name: 'War',
  },
  {
    genre_id: 37,
    genre_name: 'Western',
  },
];

const seedGenreData = () => genres.bulkCreate(genreData);

module.exports = seedGenreData;
