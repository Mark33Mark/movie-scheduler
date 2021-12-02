
const router = require('express').Router();
const { Genre, GenreMovie, Movie, User, UserMovie } = require('../../models');
const withAuth = require('../../utilities/auth');



router.get('/:id', async (req, res) => {

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
});*/



router.delete('/:id', async (req, res) => {
  try {
    const WatchlistData = await Watchlist.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!WatchlistData) {
      res.status(404).json({ message: 'No Watchlist found with this id!' });
      return;
    }

    res.status(200).json(WatchlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;