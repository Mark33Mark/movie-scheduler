
const router = require( "express" ).Router();

//const apiRoutes = require( "./api");
const homeRoutes = require( "./api/carousalRoutes" );

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);

router.use(( req, res ) => { res.send( 
    `<h1 style="display: table-cell; width: 100vw; height: 100vh; vertical-align:middle; text-align:center;"> 
    Wrong route ✋
    </h1>` ); 
});

module.exports = router;
