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

router.post("/crt_object", function(req, res){
	var cols = ['obj_name','obj_type_id','static','height',
				'width','aspect','color','opacity',
				'file_name','file_path'];
	var vals = [req.body.obj_name, req.body.obj_type_id,req.body.static,
				req.body.height,req.body.width,req.body.aspect,
				req.body.color,req.body.opacity,
				req.body.file_name,req.body.file_path];

	object.create(cols, vals, function(response){
		res.redirect('/');
	});
});

// Export routes for server.js to use.
module.exports = router;