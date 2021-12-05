
const router = require('express').Router();

const userRoutes = require('./userRoutes');
const movieRoutes = require('./movieRoutes');

router.use('/user', userRoutes);
router.use('/movie', movieRoutes);


router.use(( req, res ) => { res.send( 
    `<a href="/"><h1 style="display: table-cell; width: 100vw; height: 100vh; text-decoration: none; vertical-align:middle; text-align:center;"> 
    Wrong route ✋
    </h1><a>`); 
});

module.exports = router;
