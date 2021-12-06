
const router = require('express').Router();
const { Genre, GenreMovie, Movie, User, UserMovie } = require('../../models');
const withAuth = require('../../utilities/auth');


// == CREATE ==================================================================

router.post('/:id', withAuth, async (req, res) => {

console.log(req.session.user_id, req.params.id, req.body.notification_period, req.body.notified);

  try {
    const newWatchlist = await UserMovie.create({
        user_id: req.session.user_id,
        movie_id: req.params.id,
        notification_period: req.body.notification_period,
        notified: req.body.notified
      },
    );

    console.log("Watchlist post = " + newWatchlist);

    if (!newWatchlist) {
      res.status(404).json({ message: 'There was a problem adding this movie to your watchlist.' });
      return;
    }

    res.status(200).json(newWatchlist);
  } catch (err) {
    res.status(500).json(err);
  }
});


// == READ ====================================================================

router.get('/:id', withAuth, async (req, res) => {

  const movieID = req.url.replace("/","");

  try {
    const movie = await Movie.findAll({
        where:
        {
          id:movieID,
        },
        include: 
        [
            {
              model:UserMovie,

              attributes:
              [
                  "notified", "notification_period"
              ]
            },
            {
                model: Genre,
                attributes:['genre_name'],
            },
        ],
    });

    let movie_found = movie.map(( data ) => data.get({ plain: true }));

    console.log(movie_found[0]);

    res.render( "movie", { 
      movie_found, 
      layout: "scheduler",
      logged_in: req.session.logged_in,
      });

  } catch (err) {
    res.status(400).json(err);
  }
});

// == UPDATE ==================================================================

router.put('/:id', withAuth, async (req, res) => {

  // movie_id arrives as a string.
  const movieID = parseInt(req.body.movie_id);

  // add user_id to the object
  req.body.user_id = req.session.user_id;

  // update the movie_id to integer
  req.body.movie_id = movieID;

  try {

    const getUniqueID = await UserMovie.findOne(
      {
        where: { movie_id: movieID, user_id: req.body.user_id},
      });

    const [updatePreference] = await UserMovie.update({
        notified: req.body.notified, 
        notification_period: req.body.notification_period
      },
      {
        where: 
        { 
          id:getUniqueID.id
        },

      });

      if(updatePreference) {
        console.log("Update successful.");
        res.status(200);
      } else {
        console.log("");
        res.status(200);
      }

  } catch (err) {
    console.log("BAD ERROR");
    console.log(err);
    res.status(500).json(err);
  }
});

// == DELETE ==================================================================

router.delete('/:id', async (req, res) => {

  try {
    const WatchlistData = await UserMovie.destroy({
      where: {
        movie_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!WatchlistData) {
      res.status(404).json({ message: 'No watchlist found with this movie id!' });
      return;
    }

    res.status(200).json(WatchlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ============================================================================

module.exports = router;