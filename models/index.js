
const Genre         = require('./Genre');
const GenreMovie    = require('./GenreMovie');
const Movie         = require('./Movie');
const User          = require('./User');
const UserMovie     = require('./UserMovie');

User.belongsToMany( Movie, {
    through: {
        model: UserMovie,
        unique: false,
        as: 'user_movies',
    },
});

Genre.belongsToMany( Movie, {
    through: {
        model: GenreMovie,
        unique: false,
        as: 'movie_genres',
    },
});

Movie.belongsToMany( User, {
    through: {
        model: UserMovie,
        unique: false,
        as: 'movies_user',
    },
});

Movie.belongsToMany(Genre, {
    through: {
        model: GenreMovie,
        unique: false,
        as: 'genres_movies',
    },
});

// User.hasMany(Movie);
// Genre.hasMany(Movie);
// Movie.hasMany(Genre);
// Movie.hasMany(User);



module.exports = { User, Genre, GenreMovie, Movie, UserMovie };