
const Genre         = require('./Genre');
const GenreMovie    = require('./GenreMovie');
const Movie         = require('./Movie');
const User          = require('./User');
const UserMovie     = require('./UserMovie');

// Model relationships.
Movie.belongsToMany( User, {
    through: {
        model: UserMovie,
        unique: false
    },
    as: 'user_watches'
});

User.belongsToMany( Movie, {
    through: {
        model: UserMovie,
        unique: false
    },
    as: 'movie_watch'
});


Genre.belongsToMany( Movie, {
    through: {
        model: GenreMovie,
        unique: false
    },
    as: 'movie_genres'
});

Movie.belongsToMany(Genre, {
    through: {
        model: GenreMovie,
        unique: false
    },
    as: 'genres_movies'
});


module.exports = { User, Genre, GenreMovie, Movie, UserMovie };