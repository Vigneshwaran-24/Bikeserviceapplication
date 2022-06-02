var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport({

    service:'gmail',
    auth: {
        user: 'bikecare00@gmail.com',
        pass: 'carebike@00'
    }

});

var composemail={
    from: 'bikecare00@gmail.com',
    to: 'saytovignesh9091@gmail.com',
    subject:'Thanks for booking a service',
    text: 'Your booking for a bike service is going on.We will contact you once your bike is ready !!!'
};

sender.sendMail(composemail,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("Mail sent successfully" +info.response);
    }
});
 