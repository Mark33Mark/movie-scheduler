
const router = require('express').Router();
const { Genre, GenreMovie, Movie, User, UserMovie } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
    try {
        const genres=await Genre.findAll({});     
        const genreInfo = genres.map(( genre ) => genre.get({ plain: true }) );

        console.log(genreInfo);
       res.render('search-movies',{genreInfo});

    } catch (err) {
    res.status(500).json(err);
    }
});


// router.get('/login', (req, res) => {
//     // If the user is already logged in, redirect the request to another route
//     if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//     }

//     res.render('login');
// });



module.exports = router;
