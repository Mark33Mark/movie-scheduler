const router = require('express').Router();
// const { Carousal } = require('../../models');

router.get('/',(req,res)=>{
    console.log("im hitting")
    const movies=[
    {"title":"Avatar 2", "release_date":"15 December 2022", "poster_path":"/img/Avatar.jpg"},
    {"title":"Black Adam", "release_date":"29 July 2022<", "poster_path":"/img/Cow.jpg"},
    {"title":"Cow", "release_date":"15 August 2022", "poster_path":"/img/BlackAdam.jpg"},
    {"title":"Memory Box", "release_date":"15 August 2022", "poster_path":"/img/MemoryBox.jpg"},
    {"title":"Spiderman", "release_date":"16 December 2021", "poster_path":"/img/SpiderMan.jpg"},
    {"title":"The Drovers Wife", "release_date":"5 May 2022", "poster_path":"/img/TheDroversWife.jpg"},
    {"title":"The Hill were Lioness roar", "release_date":"8 August 2022", "poster_path":"/img/TheHillWhereLionessesRoar.jpg"},
    {"title":"The Scary of sixty First", "release_date":"13 August 2022", "poster_path":"/img/TheScaryofSixtyFirst.jpg"},
    {"title":"Transform", "release_date":"9 December 2022", "poster_path":"/img/Transform.jpg"},
    {"title":"Wicked Game", "release_date":"22 September 2022", "poster_path":"/img/WickedGame.jpg"}]

    
        res.render('carousal_homepage',{layout:false,movies})
  })

  module.exports = router;