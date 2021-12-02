
const router = require('express').Router();
const { Genre, GenreMovie, Movie, User, UserMovie } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.findAll({
            attributes:
            [   
                'id',
                'tmdb_movie_id',
                'title',
                'release_date',
                'overview',
                'poster_path',
            ],
        });

    const movieInfo = movies.map(( info ) => info.get({ plain: true }) );
    const posterCount = movieInfo.length;

    res.render('landing', { 
        movieInfo, 
        posterCount,
        // logged_in: req.session.logged_in 
    });

    } catch (err) {
    res.status(500).json(err);
    }
});

router.get('/landing', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Movie }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('landing', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

 router.get('/login', (req, res) => {
     // If the user is already logged in, redirect the request to another route
     if (req.session.logged_in) {
     res.redirect('/');
     return;
     }

     res.render('login');
 });

module.exports = router;
