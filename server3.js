var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'tuskibansal@gmail.com',
           pass: 'tushar@gmail',
       }
   });

   const mailOptions = {
    from: 'tuskibansal@gmail.com', // sender address
    to: 'bansaltushar014@gmail.com', // list of receivers
    subject: 'Subject of your email', // Subject line
    html: '<p>Your html here</p>'// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });