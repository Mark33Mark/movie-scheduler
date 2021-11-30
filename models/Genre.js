const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model {}

Genres.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tmdb_genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    genre_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genre',
  }
);

module.exports = Genre;
