
const router = require('express').Router();
const { Upcoming, Watchlist, User } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
    try {
        // Get all upcoming movies and JOIN with user data.
        const upMovies = await Upcoming.findAll({
            include: [
                { 
                    model: User, 
                    attributes:['name'],
                },
                {
                    model: Upcoming,
                    attributes: ['genre_id', 'title', 'release_date', 'overview', 'language', 'poster_path', 'popularity'],
                  },
            ],            
        });
    
    const upcomings = upMovies.map( ( upcoming ) => upcoming.get({ plain: true }));

// Pass serialize data and session flag into template.
    res.render('homepage', { 
        upcomings, 
        logged_in: req.session.logged_in 
    });

    } catch (err) {
    res.status(500).json(err);
    }
});

//Get upcoming movie by id
router.get('/upcoming/:id', async (req, res) => {
    try {
      const movieData = await Upcoming.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
  
          },
          {
            model: Upcoming,
            attributes: ['genre_id', 'title', 'release_date', 'overview', 'language', 'poster_path'],
          },
        ],
      });
  
      const upcoming = movieData.get({ plain: true });
  
      res.render('upcoming', {
        ...upcoming,
        logged_in: req.session.logged_in
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
