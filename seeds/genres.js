const { genres } = require('../models');

const genreData = [
  {
    genre_name: 'Action',
  },
  {
    genre_name: 'Adventure',
  },
  {
    genre_name: 'Animation',
  },
  {
    genre_name: 'Comedy',
  },
  {
    genre_name: 'Crime',
  },
  {
    genre_name: 'Documentary',
  },
  {
    genre_name: 'Drama',
  },
  {
    genre_name: 'Family',
  },
  {
    genre_name: 'Fantasy',
  },
  {
    genre_name: 'History',
  },
  {
    genre_name: 'Horror',
  },
  {
    genre_name: 'Music',
  },
  {
    genre_name: 'Mystery',
  },
  {
    genre_name: 'Romance',
  },
  {
    genre_name: 'Science_Fiction',
  },
  {
    genre_name: 'TV_Movie',
  },
  {
    genre_name: 'Thriller',
  },
  {
    genre_name: 'War',
  },
  {
    genre_name: 'Western',
  },
];

const seedGenreData = () => genres.bulkCreate(genreData);

module.exports = seedGenreData;
