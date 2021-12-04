
const router = require('express').Router();
const { Genre, GenreMovie, Movie, User, UserMovie } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.findAll({
            attributes:
            [   
                'id',
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
        logged_in: req.session.logged_in 
    });

    } catch (err) {
    res.status(500).json(err);
    }
});


router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
        where: 
        { 
            id:req.session.user_id, 
        },
        attributes:
        {
            exclude: ['password'],
        },
        include: 
        [
            {
                model: Movie,
                attributes:['title', 'release_date', 'poster_path'],
                include:[{model:Genre, attributes:['genre_name']}]
            },
        ],
        });

        let user = userData.map(( post ) => post.get({ plain: true }));        

        res.render( "watchlist", { 
        user, 
        layout: "dashboard",
        logged_in: req.session.logged_in,
        });

    } catch (err) {
        res.status(500).json(err);
    }
    });


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
    }

    res.render('login',
    { 
        layout: 'signin',
    });
});

router.get('/join', (req, res) => {

    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('join',
    { 
        layout: 'signin',
    });
    
  });

  router.post('/logout', (req, res) => {
      console.log("User wants to log out.");
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
