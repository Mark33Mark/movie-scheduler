const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GenreMovie extends Model {}

GenreMovie.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },

        genre_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genre',
            key: 'id',
            unique: false
        },
        },

        movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'movie',
            key: 'id',
            unique: false
        },
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'genremovie',
    }
);

module.exports = GenreMovie;
