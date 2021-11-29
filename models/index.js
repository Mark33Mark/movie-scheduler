
const Genres = require('./Genres');
const Upcoming_Movies    = require('./Upcoming_Movies');
const User    = require('./User');
const Watchlist    = require('./Watchlist');

// Model relationships.
User.hasMany(Upcoming_Movies, {
    foreignKey: 'user_id'
});

Upcoming_Movies.belongsTo(User, {
    foreignKey: 'user_id',
    key: 'id',
});

Upcoming_Movies.belongsTo(Watchlist, {
    foreignKey: 'upcoming_movies',
    key: 'tmdb_movie_id',
})

Watchlist.belongsTo(User, {
    foreignKey: 'user_id',
    key: 'id',
})

Upcoming_Movies.hasMany(Genres, {
    foreignKey: 'genres',
    key: 'tmdb_genre_id',
})


module.exports = { User, Genres, Upcoming_Movies, Watchlist };