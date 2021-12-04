const sequelize = require('../config/connection');
const { User, Genre, GenreMovie, UserMovie, Movie } = require('../models');

const watchlistData = require('./watchlistData.json');
const userData = require('./userData.json');
const movieData = require('./movieData.json');
const genreData = require('./genreData.json');
const genreHandlerData = require('./genreHandlerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate( userData, {
    individualHooks: true,
    returning: true,
  });

  for ( const movies of movieData ) {
    await Movie.create({
      ...movies,
    });
  }

  for (const genre of genreData) {
    await Genre.create({
      ...genre,
    });
  }

  for ( const watching of watchlistData ) {
    await UserMovie.create({
      ...watching,
    });

  for (const genreMovie of genreHandlerData) {
    await GenreMovie.create({
      ...genreMovie,
    });
  }
}

  process.exit(0);
};

seedDatabase();

