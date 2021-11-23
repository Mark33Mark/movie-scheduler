const router = require('express').Router();

const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

router.use(( req, res ) => { res.send( 
    `<h1 style="display: table-cell; width: 100vw; height: 100vh; vertical-align:middle; text-align:center;"> 
    Wrong route ✋
    </h1>` ); 
});

module.exports = router;
