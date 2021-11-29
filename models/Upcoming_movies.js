const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Upcoming_Movies extends Model {}

Upcoming_Movies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tmdb_genre_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'genres',
            key: 'tmdb_genre_id',
        },
    },

    tmdb_movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    movie_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    release_date: {
        type: DataTypes.DATEONLY,
        
    },

    synopsis: {
        type: DataTypes.TEXT,
    },

    poster_path: {
        type: DataTypes.STRING,
    },

    language: {
        type: DataTypes.STRING,
    },

    popularity: {
        type: DataTypes.DECIMAL,
    },

    backdrop_path: {
        type: DataTypes.STRING,
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'upcoming_movies',
  }
);

module.exports = Upcoming_Movies;