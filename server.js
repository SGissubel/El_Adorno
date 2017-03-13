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
var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public/app"));

app.use(bodyParser.urlencoded({ extended: false }));

var userController = require("./controllers/userController.js");
var signupController = require("./controllers/signupController.js");

app.use(methodOverride("_method"));


app.use("/home", userController);
app.use("/signup", signupController);



app.listen(port);