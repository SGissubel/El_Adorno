var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//Vinny put this back, needed to serve index.html content
app.use(express.static(process.cwd() + "/public"));


var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

//Vinny commented out, conflicts with index.html
// app.use(express.static(process.cwd() + "/public/app"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

var objectsController  = require("./controllers/objectsController.js");
var palettesController = require("./controllers/palettesController.js");
var signupController   = require("./controllers/signupController.js");


app.get('/app', function(req, res){
  res.sendFile(path.join(__dirname, "./public/app/index.html"));
})

app.use("/objects", objectsController);
app.use("/palettes", palettesController);
app.use("/login", signupController);


app.listen(port, function() {
    console.log('listening on port ' + port)

});



/* ===========================================================
					SOCKET.IO SERVER
=============================================================*/

var io  = require('socket.io').listen(5001),
    dl = require('delivery'),
    fs  = require('fs');

io.sockets.on('connection', function(socket){
  delivery = dl.listen(socket);
  delivery.on('receive.success',function(file){

    fs.writeFile(file.name,file.buffer, function(err){
      if(err){
        console.log('File could not be saved.');
      }else{
        console.log('File saved.');
      };
    });
  });
});