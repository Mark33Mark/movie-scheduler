
const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projectes and JOIN with user data.
        const savedProjects = await Project.findAll({
            include: [
                { 
                    model: User, 
                    attributes:['name'],
                },
            ],            
        });
    
    const projects = savedProjects.map( ( project ) => project.get({ plain: true }));

// Pass serialize data and session flag into template.
    res.render('homepage', { 
        projects, 
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
