var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mgomycode@gmail.com',
    pass: 'aqw123+-'
  }
});

var mailOptions = {
  from: 'mgomycode@gmail.com',
  to: 'sellami.med.tn@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

