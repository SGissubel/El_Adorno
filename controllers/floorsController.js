var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var actor = require('../models/actor.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	actor.allAndJoin("movies", "movie_id", "id", function(data){
		// res.send(data);
		res.render('actors/index', {actors: data});
	});	
});

router.get("/new", function(req, res) {
	res.render('actors/new');
});

router.post("/create", function(req, res){
	var cols = ['name', 'movie_id'];
	var vals = [req.body.name, req.body.movie_id];

	actor.create(cols, vals, function(response){
		res.redirect('/actors');
	});
})



//make a get route to show the form

//make a post route to submit the form to it

// Export routes for server.js to use.
module.exports = router;