
var ase = require('ase-utils');
var fs = require('fs');
var convert = require('color-convert');

var buffer = fs.readFileSync('../public/app/Media/Colors/BenjaminMoore_HistoricalColors_en-us.ase');
//var output = require('./test.json');

// Input values 
var output = ase.decode(buffer); 
var groups = output.groups; 
var colors = output.colors;

//console.log(colors);

// Output values
var name    = {}; 
var names   = [];
var palette = []; 

//console.log(output);

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
    //console.log(rgb); 
    var nam = colorName 
    //console.log(nam); 

    name = {name:nam, hex:hex, rgb:rgb}; 

    //names.push(colorName.replace(/\s/g, '')+': #'+colorHex);

    // Load palette array
    // palette.push(colorModel+'('+colorArray[0]+','+
    //                             colorArray[1]+','+
    //                             colorArray[2]+')');
    palette.push(name); 

    // console.log('Color: ' + colorName + ' , #' + colorHex + ' ,' + 
    //                         colorModel + '(' + colorArray[0] + ',' + 
    //                         colorArray[1] + ',' + colorArray[2] + ') ,' + 
    //                         colorType); 
}
//console.log(names); 
//console.log(palette);

var jsontext = fs.createWriteStream('palette.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

for (var x=0; x<palette.length; x++){
    name = palette[x]; 
    if (x == 0)
        jsontext.write('[');

    jsontext.write(JSON.stringify(name)); 
    //jsontext.write(name); 

    if (x < palette.length-1) 
        jsontext.write(',\n');
    else 
        jsontext.write(']');  
}