var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var object = require('../models/object.js');

function getPalette(colorTable){

	// Requires for getPalette function
	var ase = require('ase-utils');
	var fs = require('fs');
	var convert = require('color-convert');

	var buffer = fs.readFileSync(colorTable);

	// Input values 
	var output = ase.decode(buffer); 
	var groups = output.groups; 
	var colors = output.colors;

	var name    = {}; 
	var palette = []; 

	// Read array 
	for (var i=0; i<colors.length; i++){
	    // Get the colors array object 
	    var colorsObj = colors[i];
	    // Load individual elements 
	    var colorName = colorsObj.name;  
	    var colorModel = colorsObj.model;
	    var colorType  = colorsObj.type;

	    var colorArray = [];
	    var colorHex; 
	    // Parse RGB color array 
	    colorArray = colorsObj.color; 
	    for (var j=0; j<colorArray.length; j++){
	        var value = colorArray[j];
	        // if color is a shade < 1 multiply by 255  
	        if (value<1){
	            value*=255;
	            colorArray[j]=Math.floor(value);
	        }
	    }

	    colorHex = convert.rgb.hex(colorArray)
	    var hex = '#'+colorHex;
	    var rgb = colorModel + '(' + colorArray + ')'; 
	    var nam = colorName 

	    // Build name object 
	    name = {name:nam, hex:hex, rgb:rgb}; 

	    // Load palette array
	    palette.push(name); 
	}
	return palette;	
}

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

router.get("/allcolors", function(req, res) {
	object.some("obj_type_id=3", function(data){
		res.send(data);
		//res.send('../public/index', {objects: data});
	});	
});

router.get("/palette/:id", function(req, res) {
	object.some("obj_type_id=3 and id=" + [req.params.id], function(data){
		var colorPalette = data[0].file_path + data[0].file_name;
		var palette = getPalette(colorPalette);  
		res.send(palette);
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