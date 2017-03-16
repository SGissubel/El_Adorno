var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var showroom = require('../models/showroom.js');
var layer    = require('../models/layer.js');

var layers   = [];

// function getLayers(showroomId){
// 	// create a Layers array
// 	// Get Layers based on showroom id
// 	layer.some("showroom_id=" + showroomId, function(data) {
// 		layers = data;  
// 	}); 
// 	return layers;
// }

// function putLayers(showroomId){
// 	// create a Layers array
// 	// Get Layers based on showroom id
// 	layer.some("showroom_id=" + showroomId, function(data) {
// 		return data; 	
// 	}) 
// }


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

router.get("/layers/:id", function(req, res) {
	layer.some("showroom_id=" + [req.params.id], function(data){
		res.send(data);
	});	
});

router.post("/create_showroom/:name", function(req, res){
	var cols = ['showroom_name','user_id'];
	var vals = [req.params.name,req.session.user_id];

	showroom.create(cols, vals, function(response){
		putLayers(layers); 
	});
});

// Export routes for server.js to use.
module.exports = router;