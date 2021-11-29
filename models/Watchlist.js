const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Watchlist extends Model {}

Watchlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    movie_id: {
        type: DataTypes.STRING,
        references: {
            model: 'upcoming_movies',
            key: 'tmdb_movie_id',
        },
    },

    notification_period: {
        type: DataTypes.ENUM,
        values: ['3 days','1 week', '2 weeks'],
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
    },

    // If they want a notification 3 days, 1 week or two weeks out from release date
    notification_period: {
        type: DataTypes.ENUM,
        values: ['3 Days', '1 Week', '2 Weeks']
    },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'watchlist',
  }
);

module.exports = Watchlist;