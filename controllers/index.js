
const router = require( "express" ).Router();

const apiRoutes = require( "./api");
const landingRoutes = require( "./landingRoutes" );

router.use('/api', apiRoutes);
router.use('/', landingRoutes);

router.use(( req, res ) => { res.send( 
    `<a href="/"><h1 style="display: table-cell; width: 100vw; height: 100vh; text-decoration: none; vertical-align:middle; text-align:center;"> 
    Wrong route ✋
    </h1><a>` ); 
});

module.exports = router;
