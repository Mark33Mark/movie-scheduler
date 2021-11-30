const sequelize = require('../config/connection');
const { User, Genre, Watchlist, Upcoming } = require('../models');

const watchlistData = require('./watchlistData.json');
const userData = require('./userData.json');
const movieData = require('./movieData.json');
const genreData = require('./genreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  const users = await User.bulkCreate( userData, {
    individualHooks: true,
    returning: true,
  });

  for (const genre of genreData) {
    await Genre.create({
      ...genre,
    });
  }

  for ( const movies of movieData ) {
    const upcoming = await Upcoming.bulkCreate({
      ...movies,
    });
  }

  for ( const watching of watchlistData ) {
    await Watchlist.create({
      ...watching,
    });
  }
  process.exit(0);
};

seedDatabase();