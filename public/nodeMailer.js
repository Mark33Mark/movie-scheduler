const { response } = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const { Watchlist } = require('../models');
const { User } = require('../models');
//const emailTemplate = require('../views/emailContent.handlebars')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zachtestacct@gmail.com',
    pass: 'testingacct'
  }
});

let options = {
  viewEngine : {
    extname: '.handlebars', // handlebars extension
    layoutsDir: 'views/layouts/', // location of handlebars templates
    defaultLayout: 'email', // name of main template
  },
  viewPath: 'views/layouts/',
  extName: '.handlebars'
};

transporter.use('compile', hbs(options)); 

  let mailOptions = {
    from: 'zachtestacct@gmail.com',
    //multiple recipients by doing 'zachobba@gmail.com, zachobba1@gmail.com,
    to: 'zachobba@gmail.com',
    subject: `Reminder about an upcoming movie`,
    template: 'email',
    context: {
      movie: "Avengers Whatever", //replace with movie.title
      name: "Zac" , //replace with user.name
    }
  };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});