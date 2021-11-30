const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genres extends Model {}

Genres.init(
  {

    tmdb_genre_id: {
        type: DataTypes.INTEGER,
    },

    genre_name: {
        type: DataTypes.STRING,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genres',
  }
);

module.exports = Genres;