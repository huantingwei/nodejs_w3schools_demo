var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'outlook',
    auth:{
        user:'hweiac@connect.ust.hk',
        pass:'ting10332019'
    }
});

var mailOptions = {
    from:'hweiac@connect.ust.hk',
    to:'ting02940@gmail.com',
    subject:'Sending first email from Nodejs!',
    text:'That was easy. Just type a few words.'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent:'+info.response);
    }
});