var Jimp = require("jimp");
var sizeOf = require('image-size');
var toNumber = require('to-num');
var Images = require('images');

const waitSync = require('wait-sync');

var imgHeight  = 0;
var imgWidth   = 0;
var wallHeight = 0;
var wallWidth  = 0;
var wallHexClr = 0;
var wallColor  = 0;

//var wImg = 'wallLayer.png';
var fImg = 'furnLayer.jpg';
var tImg = 'testLayer.jpg'; 

//Get Dimensions of original PNG images 
sizeOf(wImg, function (err, dimensions) {
    imgWidth  = dimensions.width; 
    imgHeight = dimensions.height;         
});
waitSync(1.0); 
console.log(' ');
console.log('Wall Image = ' + wImg);
console.log('Dimensions = ' + imgWidth + ' by ' + imgHeight + ' (WxH)');


// Clone & Resize original image 
function colorWall(img) {
    Jimp.read(img, function (err, image) {
        if (err) throw err;

        // Clone the image and work with the clone 
        var wallImage = image.clone();               

        // Get color of PNG region (0,0) - this is our wall 
        wallHexClr = wallImage.getPixelColor(0,0);                      
              
        //for (var i=newHeight; i>0; i--){
        for (var i=1; i<imgHeight; i++){   
            var newHexClr = wallImage.getPixelColor(0,i);
            wallHeight = i; 
            if (newHexClr != wallHexClr){
                console.log('NewHeight  = ' + i); 
                console.log('WallHexClr = ' + wallHexClr); 
                console.log('NewHexClr  = ' + newHexClr); 
                console.log(' '); 
                i = imgHeight; 
            }
        } 
        waitSync(1.0); 
        wallWidth = imgWidth; 
        console.log('Dimensions = ' + wallWidth + ' by ' + wallHeight + ' (WxH)');

        wallColor = toNumber('0x9CFFF4'); 
        console.log('New Wall Color = ' + wallColor)

        for (var i=0; i<wallWidth; i++) {
            for (var j=0; j<wallHeight; j++){
                var newHexClr = wallImage.getPixelColor(i,j);
                if (newHexClr == wallHexClr){
                    wallImage.setPixelColor(wallColor, i, j); 
                }
            }
        }            
        wallImage.write(tImg); 
        //console.log(wallImage.getPixelColor(799,274));        
    });    
}

// Get Wall Dimensions and colorize
colorWall(fImg); 
waitSync(1.0);

// Haven't been able to get this to work correctly.  
// They merge, but the 2nd overlays the first completely. 
//Images(wImg).draw(Images(fImg), 0, 0).save(tImg); 

