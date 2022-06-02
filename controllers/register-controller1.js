var Cryptr =require('cryptr');
var express=require("express");
var connection = require('../config');

 
module.exports.register=function(req,res){
    var today = new Date();
  
    var booking={
        "name":req.body.name,
        "email":req.body.email,
        "wno":req.body.wno,
        "model":req.body.model,
        "vno":req.body.vno,
        "date":req.body.date,
        "general":req.body.ck,
        "oil":req.body.ok,
        "water":req.body.wk
        
    }
    connection.query('INSERT INTO booking SET ?',booking, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.redirect("/booked.html");
      }
    });
}
