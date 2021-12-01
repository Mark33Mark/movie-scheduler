
const router = require( "express" ).Router();

const apiRoutes     = require( "./api");
const landingRoutes = require( "./landingRoutes" );

router.use('/', landingRoutes);
// router.use('/api', apiRoutes);

router.use(( req, res ) => { res.send( 
    `<h1 style="display: table-cell; width: 100vw; height: 100vh; vertical-align:middle; text-align:center;"> 
    Wrong route ✋
    </h1>` ); 
});

module.exports = router;
