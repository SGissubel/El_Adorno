var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var showroom = require('../models/showroom.js');
var layer    = require('../models/layer.js');

var layers   = [];

// Create all our routes and set up logic within those routes where required.
router.get("/user/:id", function(req, res) {
	showroom.some("user_id=" + [req.params.id], function(data){
		res.send(data); 
	});
});

router.get("/showroom/:id", function(req, res) {
	showroom.selectAndJoin("layers", "id", "showroom_id", [req.params.id], function(data){
		res.send(data);
	});	
});

router.post("/showroom", function(req, res){
	// var showroom_name = req.body.showroom_name;
	// console.log(showroom_name);
	console.log(req.body);
	// //first this to do is create a new showroom record
	// var cols = ['showroom_name','user_id'];
	// var vals = [req.body.showroom_name,req.body.showroom_user_id];

	// // showroom.create(cols, vals, function(response){
	// // });

		//then create the layer records
		var layers = JSON.parse(req.body);
		console.log(layers);
	// for (var i = 0; i < layers.length; i++) {

	// 	var element = array[i];
		
	// }

	// var cols = ['showroom_name','user_id'];
	// var vals = [req.body.showroom_name,req.body.user_id];

	// showroom.create(cols, vals, function(response){
	// });
});

router.put("/showroom", function(req, res){
	var cols = ['showroom_name','user_id'];
	var vals = [req.body.showroom_name,req.body.user_id];

	showroom.create(cols, vals, function(response){
	});
});

router.post("/create_layer", function(req, res){
	var cols = ['layer_index','height', 'width','position_top',
				'position_left','aspect_ratio','color','opacity',
				'object_id','showroom_id'];
	var vals = [req.body.layer_index,req.body.height,req.body.width,
				req.body.position_top,req.body.position_left,
				req.body.aspect_ratio,req.body.color,req.body.opacity,
				req.body.object_id,req.body.showroom_id];

	layer.create(cols, vals, function(response){
	});
});

// Export routes for server.js to use.
module.exports = router;