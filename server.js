var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// app.get('/', function(req, res){
// 	res.send('hi')
// });
// Import routes and give the server access to them.
var moviesController = require("./controllers/moviesController.js");
var actorsController = require("./controllers/actorsController.js");

app.use("/movies", moviesController);
app.use("/actors", actorsController);

app.listen(port, function(){
	console.log('listening on port ' + port)
});









