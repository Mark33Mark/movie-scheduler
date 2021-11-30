
const Genre     = require('./Genre');
const Upcoming  = require('./Upcoming');
const User      = require('./User');
const Watchlist = require('./Watchlist');

// Model relationships.
User.hasMany(Watchlist, {
    foreignKey: 'user_id'
});

Watchlist.belongsTo( User, {
    foreignKey: 'user_id'
});

Upcoming.hasMany(Watchlist, {
    foreignKey: 'movie_id',
    onDelete: "CASCADE",
});

Watchlist.belongsTo(Upcoming, {
    foreignKey: 'movie_id',
    onDelete: "CASCADE",
});

Genre.hasMany(Upcoming, {
    foreignKey: 'genre_id',
});

Upcoming.belongsTo(Genre, {
    foreignKey: 'genre_id',
});

module.exports = { User, Genre, Upcoming, Watchlist };