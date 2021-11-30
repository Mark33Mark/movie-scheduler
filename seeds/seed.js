const sequelize = require('../config/connection');
const { User, Upcoming, Genre, Watchlist } = require('../models');

const watchlistData = require('./watchlistData.json');
const userData = require('./userData.json');
const movieData = require('./movieData.json');
const genreData = require('./genreData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
    });
  }

  process.exit(0);
};

seedDatabase();