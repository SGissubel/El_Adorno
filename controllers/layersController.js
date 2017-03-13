var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var layer = require('../models/layer.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
	layer.all(function(data){
		res.send(data);
		//res.send('../public/index', {layers: data});
	});	
});

router.post("/create_layer", function(req, res){
	var cols = ['layer_index','height','width',
				'position_top','position_left',
				'aspect','object_id'];
	var vals = [req.body.layer_index, req.body.height,req.body.width,
				req.body.position_top,req.body.position_left,
				req.body.aspect,object_id];

	layer.create(cols, vals, function(response){
		res.redirect('/');
	});
});

router.post("/delete_layer", function(req, res){

	layer.delete(condition, function(response){
		res.redirect('/');
	});
});

// Export routes for server.js to use.
module.exports = router;