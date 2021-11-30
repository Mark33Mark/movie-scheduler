const router = require('express').Router();
// const { Carousal } = require('../../models');

router.get('/',(req,res)=>{
    console.log("im hitting")
    const movies=[
    {"title":"Hary Poop", "release_date":"10/10/20", "poster_path":"/img/Avatar.jpg"},
    {"title":"Hary Poppy", "release_date":"10/10/20", "poster_path":"/img/Avatar.jpg"},
    {"title":"Hary Poor", "release_date":"10/10/20", "poster_path":"/img/Avatar.jpg"},
    {"title":"Hary potter", "release_date":"10/10/20", "poster_path":"/img/Avatar.jpg"}]
    
        res.render('carousal_homepage',{layout:false,movies})
  })

  module.exports = router;