var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var object = require('../models/object.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	object.all(function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/artwork", function(req, res) {
	object.some("obj_type_id=1", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/backgrounds", function(req, res) {
	object.some("obj_type_id=2", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/floors", function(req, res) {
	object.some("obj_type_id=4", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/furniture", function(req, res) {
	object.some("obj_type_id=5", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/rooms", function(req, res) {
	object.some("obj_type_id=6", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/textures", function(req, res) {
	object.some("obj_type_id=7", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
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