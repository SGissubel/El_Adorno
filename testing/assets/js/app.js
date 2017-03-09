$(document).ready(function () {

  //App Starts executing here

  // var params = {
  // // Callback fired on rotation start.
  // start: function(event, ui) {
  // },
  // // Callback fired during rotation.
  // rotate: function(event, ui) {
  // },
  // // Callback fired on rotation end.
  // stop: function(event, ui) {
  // },
  // // Set the rotation center at (25%, 75%).
  // rotationCenterX: 25.0, 
  // rotationCenterY: 75.0
  // };
  // $('#canvas').rotatable(params);

  var canvas = $("#room-canvas");

  var $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-01').attr('src', "room_01.png").attr('width', "200px").attr('alt', "room_01");
  $("#bg").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-02').attr('src', "room_02.png").attr('width', "200px").attr('alt', "room_02");
  $("#bg").append($imgThumbnail);

  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-03').attr('src', "room_03.png").attr('width', "200px").attr('alt', "room_02");
  $("#bg").append($imgThumbnail);


  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-04').attr('src', "room_04.png").attr('width', "200px").attr('alt', "room_02");
  $("#bg").append($imgThumbnail);


  $imgThumbnail = $('<img>').addClass('img-responsive img-thumbnail img-room-05').attr('src', "room_05.png").attr('width', "200px").attr('alt', "room_02");
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


  $(document).on("click", ".img-room-01", function () {

    // $("#room-canvas").addLayer({
    //   type: "rectangle",
    //   fillStyle: '#00f100',
    //   draggable: false,
    //   fromCenter: false,
    //   x: 0, y: 0,
    //   width: 999, height: 666
    // }).drawLayers();  

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'room_01.png',
      draggable: false,
      fromCenter: false,
      x: 0, y: 0,
      width: 999, height: 666
    }).drawLayers();

  });

  $(document).on("click", ".img-room-02", function () {

    // $("#room-canvas").addLayer({
    //   type: "rectangle",
    //   fillStyle: '#00f100',
    //   draggable: false,
    //   fromCenter: false,
    //   x: 0, y: 0,
    //   width: 999, height: 666
    // }).drawLayers();  

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'room_02.png',
      draggable: false,
      fromCenter: false,
      x: 0, y: 0,
      width: 999, height: 666
    }).drawLayers();

  });

  $(document).on("click", ".img-room-03", function () {

    // $("#room-canvas").addLayer({
    //   type: "rectangle",
    //   fillStyle: '#00f100',
    //   draggable: false,
    //   fromCenter: false,
    //   x: 0, y: 0,
    //   width: 999, height: 666
    // }).drawLayers();  

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'room_03.png',
      draggable: false,
      fromCenter: false,
      x: 0, y: 0,
      width: 999, height: 666
    }).drawLayers();

  });

  $(document).on("click", ".img-room-04", function () {

    // $("#room-canvas").addLayer({
    //   type: "rectangle",
    //   fillStyle: '#00f100',
    //   draggable: false,
    //   fromCenter: false,
    //   x: 0, y: 0,
    //   width: 999, height: 666
    // }).drawLayers();  

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'room_04.png',
      draggable: false,
      fromCenter: false,
      x: 0, y: 0,
      width: 999, height: 666
    }).drawLayers();

  });

  $(document).on("click", ".img-room-05", function () {

    // $("#room-canvas").addLayer({
    //   type: "rectangle",
    //   fillStyle: '#00eeff',
    //   draggable: false,
    //   fromCenter: false,
    //   x: 0, y: 0,
    //   width: 999, height: 666
    // }).drawLayers();  

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'room_05.png',
      draggable: false,
      fromCenter: false,
      x: 0, y: 0,
      width: 999, height: 666
    }).drawLayers();

  });


  function showHandles(layer) {
    return $("#room-canvas").setLayer(layer, { 
      handle: {
        type: 'rectangle',
        visible: true,
        strokeWidth: 1,
        fillStyle: '#00ffff',
        width: 10, height: 10,
      }
      });
  };

  function hideHandles(layer) {
    return $("#room-canvas").setLayer(layer, { 
      handle: {
        type: 'rectangle',
        visible: false,
        strokeWidth: 1,
        fillStyle: '#00ffff',
        width: 10, height: 10,
      }
      });
  };


  $(document).on("click", ".img-art-01", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'art_01.png',
      name: "art-01",
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 553, height: 395,
      resizeFromCenter: false,
      constrainProportions: true,
      handlePlacement: 'corners',
      mouseover: function (layer) {
        showHandles(layer).drawLayers();
      },
      mouseout: function (layer) {
        hideHandles(layer).drawLayers();
      }
    }).drawLayers();
  });

  $(document).on("click", ".img-art-02", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'art_02.png',
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 500, height: 417
    }).drawLayers();

  });

  $(document).on("click", ".img-furn-01", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'furn_01.png',
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 600, height: 268
    }).drawLayers();

  });

  $(document).on("click", ".img-furn-02", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'furn_02.png',
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 600, height: 211
    }).drawLayers();

  });


  $(document).on("click", ".img-furn-03", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'furn_03.png',
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 600, height: 245
    }).drawLayers();

  });

  $(document).on("click", ".img-furn-04", function () {

    $("#room-canvas").addLayer({
      type: 'image',
      source: 'furn_04.png',
      draggable: true,
      fromCenter: false,
      x: 0, y: 0,
      width: 600, height: 265
    }).drawLayers();

  });




  $("#full").spectrum({
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    localStorageKey: "spectrum.demo",
    move: function (color) {

    },
    show: function () {

    },
    beforeShow: function () {

    },
    hide: function () {

    },
    change: function (color) {
      $("#room-canvas").addLayer({
        type: "rectangle",
        fillStyle: color.toHexString(),
        draggable: false,
        fromCenter: false,
        x: 0, y: 0,
        width: 999, height: 666
      }).drawLayers();

    },
    palette: [
      ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"],
      ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
      ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
  });




}); // end document ready
