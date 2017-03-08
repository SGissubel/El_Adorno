$(document).ready(function() {

  //App Starts executing here

  var canvas = $("#room-canvas");

  var $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-01').attr('src', "room_01.png").attr('width', "200px").attr('alt', "room_01");
  $("#bg").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-02').attr('src', "room_02.png").attr('width', "200px").attr('alt', "room_02");
  $("#bg").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-03').attr('src', "room_03.png").attr('width', "200px").attr('alt', "room_02");
  $("#bg").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-art-01').attr('src', "art_01.png").attr('width', "200px").attr('alt', "room_02");
  $("#artwork").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-art-02').attr('src', "art_02.png").attr('width', "200px").attr('alt', "room_02");
  $("#artwork").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-furn-01').attr('src', "furn_01.png").attr('width', "200px").attr('alt', "room_02");
  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail  img-furn-02').attr('src', "furn_02.png").attr('width', "200px").attr('alt', "room_02");
  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail  img-furn-03').attr('src', "furn_03.png").attr('width', "200px").attr('alt', "room_02");
  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail  img-furn-04').attr('src', "furn_04.png").attr('width', "200px").attr('alt', "room_02");
  $("#furniture").append($imgThumbnail);


$(document).on("click", ".img-room-01", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'room_01.png',
  draggable: false,
  fromCenter: false,
  x: 0, y: 0,
  width: 1200, height: 800
}).drawLayers();

}); 

$(document).on("click", ".img-room-02", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'room_02.png',
  draggable: false,
  fromCenter: false,
  x: 0, y: 0,
  width: 1200, height: 800
}).drawLayers();

}); 

$(document).on("click", ".img-room-03", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'room_03.png',
  draggable: false,
  fromCenter: false,
  x: 0, y: 0,
  width: 1200, height: 800
}).drawLayers();

}); 

$(document).on("click", ".img-art-01", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'art_01.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 

$(document).on("click", ".img-art-02", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'art_02.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 

$(document).on("click", ".img-furn-01", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'furn_01.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 

$(document).on("click", ".img-furn-02", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'furn_02.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 


$(document).on("click", ".img-furn-03", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'furn_03.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 

$(document).on("click", ".img-furn-04", function() { 

$("#room-canvas").addLayer({
  type: 'image',
  source: 'furn_04.png',
  draggable: true,
  fromCenter: false,
  x: 0, y: 0
}).drawLayers();

}); 





}); // end document ready
