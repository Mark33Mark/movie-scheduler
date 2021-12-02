const router = require('express').Router();
const { UserMovie, User } = require('../../models');

//Route to create new watchlist entry
router.post('/', async (req, res) => {
  try {
    const watchlistEntry = await UserMovie.create({
      ...req.body,
      user_id: req.session.user_id,
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    res.status(200).json(watchlistEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

//route to get a Watchlist entry
/*router.get('/:id', async (req, res) => {
  try {
    const WatchlistData = await Watchlist.findByPk(req.params.id, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    if (!WatchlistData) {
      res.status(404).json({ message: 'No Watchlist entry found with this id!' });
      return;
    }

    res.status(200).json(WatchlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});*/

//route to delete Watchlist entry, link up to delete button
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