var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zachtestacct@gmail.com',
    pass: 'testingacct'
  }
});

var mailOptions = {
  from: 'zachtestacct@gmail.com',
  to: 'zachobba@gmail.com', 
  subject: 'Sending Email using Node.js',
  text: 'Sent email with nodeMailer.js!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});