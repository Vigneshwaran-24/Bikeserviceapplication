var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
 
var connection = require('./../config');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
    var admin="vignesh123";
   
   
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==admin){
                res.redirect('http://localhost:3000');}
           else if(password==decryptedString){
                res.redirect('/new-dashboard.html');
            }else{
                res.redirect("/sorry.html");
            }
          
        }
        else{
          res.redirect("/sorry.html");
        }
      }
    });
}
