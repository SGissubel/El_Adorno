var express = require("express");

var router = express.Router();

// 1 pm

// Import the model (cat.js) to use its database functions.
var movie = require('../models/movie.js')

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	movie.all(function(data){
		res.render('movies/index', {movies: data});
	});
});

router.get("/new", function(req, res) {
	res.render('movies/new');
});

router.post("/create", function(req, res){
	// res.send(req.body);
	var cols = ['title', 'genre', 'rating'];
	var vals = [req.body.title, req.body.genre, req.body.rating];

	movie.create(cols, vals, function(response){
		res.redirect('/movies');
	});
})


// Export routes for server.js to use.
module.exports = router;










