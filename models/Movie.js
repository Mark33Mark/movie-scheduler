const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    tmdb_movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    release_date: {
        type: DataTypes.DATEONLY,     
    },

    overview: {
        type: DataTypes.TEXT,
    },

    language: {
        type: DataTypes.STRING,
    },

    popularity: {
        type: DataTypes.DECIMAL(8, 3),
    },

    poster_path: {
        type: DataTypes.STRING,
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
    modelName: 'movie',
    }
);

module.exports = Movie;