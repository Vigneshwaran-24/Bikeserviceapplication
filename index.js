var express=require("express");
var bodyParser=require('body-parser');
 
var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');
var registerController1=require('./controllers/register-controller1');
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets/bootstrap/css',express.static(__dirname+"/assets/bootstrap/css"));
app.use('/assets/bootstrap/js',express.static(__dirname+"/assets/bootstrap/js"));
app.use('/assets/css',express.static(__dirname+"/assets/css"));
app.use('/assets/fonts',express.static(__dirname+"/assets/fonts"));
app.use('/assets/js',express.static(__dirname+"/assets/js"));
app.use('/assets/img',express.static(__dirname+"/assets/img"));
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "/index.html" );  
})  
app.get('/index.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "/index.html" );  
 })  
 
app.get('/login.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "/login.html" );  
 })  
 app.get('/signup.html', function (req, res) {  
     res.sendFile( __dirname + "/" + "/signup.html" );  
  }) 
  app.get('/generalservice.html', function (req, res) {  
     res.sendFile( __dirname + "/" + "/generalservice.html" );  
  }) 
  app.get('/waterwash.html', function (req, res) {  
     res.sendFile( __dirname + "/" + "/waterwash.html" );  
  }) 
  app.get('/oil.html', function (req, res) {  
     res.sendFile( __dirname + "/" + "/oil.html" );  
  }) 
  app.get('/sorry.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/sorry.html" );  
}) 
app.get('/new-dashboard.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/new-dashboard.html" );
    
}) 
app.get('/booked.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "/booked.html" );  
}) 
app.get('/views/user-list', function (req, res) {  
   res.sendFile( __dirname + "/" + "/views/user-list" );  
}) 

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/register',registerController1.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/register-controller1', registerController1.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(9091);
