$(document).ready(function () {

  var canvas;
  var c;

  var $canvasWidth;
  var $canvasHeight;


  var delLayer;
  var patt;

  var textureExists = false;
  var colorExists = false;
  var floorMode = false;
  var backgroundMode = false;
  var roomMode = false;
  var artworkCount = 0;

  function setCanvas() {
    if ($(window).width() > 2000 && $(window).width() <= 2500) {
      $canvasWidth = 1200;
      $canvasHeight = 800;
    } else {
      if ($(window).width() > 1550 && $(window).width() <= 2000) {
        $canvasWidth = 999;
        $canvasHeight = 666;
      } else {
        if ($(window).width() <= 1550) {
          $canvasWidth = 900;
          $canvasHeight = 600;
        } else { //browser window is bigger than 2500
          $canvasWidth = 1800;
          $canvasHeight = 1200;
        }
      }
    }

    var $canvas = $("<canvas>").attr("id", "room-canvas").attr("width", $canvasWidth).attr("height", $canvasHeight);

    $("#canvas").append($canvas);
    canvas = $("#room-canvas");
    c = document.getElementById('room-canvas');

  }


  function showHandles(layer) {
    return canvas.setLayer(layer, {
      handle: {
        type: "rectangle",
        visible: true,
        strokeWidth: 1,
        fillStyle: "#00ffff",
        width: 20,
        height: 20,
      }
    });
  };

  function hideHandles(layer) {
    return canvas.setLayer(layer, {
      handle: {
        type: "rectangle",
        visible: false,
        strokeWidth: 5,
        fillStyle: "#00ffff",
        width: 10,
        height: 10,
      }
    });
  };

  function draw(patt) {
    var objOpacity;

    if (colorExists) objOpacity = 1;
    else objOpacity = 0;

    textureExists = true;
    canvas.removeLayer("texture");

    canvas.addLayer({
      name: "texture",
      type: "rectangle",
      fillStyle: patt,
      opacity: objOpacity,
      draggable: false,
      fromCenter: false,
      x: 0,
      y: 0,
      width: c.width,
      height: c.height
    });

    canvas.setLayer("color", {
      opacity: .9
    });

    canvas.moveLayer("texture", 0).drawLayers();

  };

  setCanvas();


  // START -----------------------    This code will be replaced by retrieving data from our database   --------------------------------------

  var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", "room_01.png").attr("data-drag", false)
    .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "floor").attr("data-type", "floor")
    .attr("src", "room_01.png").attr("width", "150px").attr("alt", "room_01");

  $("#floors").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", "room_02.png").attr("data-drag", false)
    .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "floor").attr("data-type", "floor")
    .attr("src", "room_02.png").attr("width", "150px").attr("alt", "room_02");

  $("#floors").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", "room_03.png").attr("data-drag", false)
    .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "floor").attr("data-type", "floor")
    .attr("src", "room_03.png").attr("width", "150px").attr("alt", "room_03");

  $("#floors").append($imgThumbnail);


  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", "room_04.png").attr("data-drag", false)
    .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "room").attr("data-type", "room")
    .attr("src", "room_04.png").attr("width", "150px").attr("alt", "room_04");

  $("#rooms").append($imgThumbnail);


  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", "room_05.png").attr("data-drag", false)
    .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "background").attr("data-type", "background")
    .attr("src", "room_05.png").attr("width", "150px").attr("alt", "room_05");

  $("#bg").append($imgThumbnail);


  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-art").attr("data-src", "art_01.png").attr("data-drag", true)
    .attr("data-width", 553).attr("data-height", 395).attr("data-x", 200).attr("data-y", 200).attr("data-name", "art_01").attr("data-copy", 1)
    .attr("data-type", "art").attr("src", "art_01.png").attr("width", "150px").attr("alt", "art_01");

  $("#artwork").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-art").attr("data-src", "art_02.png").attr("data-drag", true)
    .attr("data-width", 500).attr("data-height", 417).attr("data-x", 200).attr("data-y", 200).attr("data-name", "art_02").attr("data-copy", 1)
    .attr("data-type", "art").attr("src", "art_02.png").attr("width", "150px").attr("alt", "art_02");

  $("#artwork").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-furn").attr("data-src", "furn_01.png").attr("data-drag", true)
    .attr("data-width", c.height).attr("data-height", 268).attr("data-x", 500).attr("data-y", 100).attr("data-name", "furn_01").attr("data-copy", 1)
    .attr("data-type", "furn").attr("src", "furn_01.png").attr("width", "150px").attr("alt", "furn_01");

  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-furn").attr("data-src", "furn_02.png").attr("data-drag", true)
    .attr("data-width", c.height).attr("data-height", 211).attr("data-x", 500).attr("data-y", 100).attr("data-name", "furn_02").attr("data-copy", 1)
    .attr("data-type", "furn").attr("src", "furn_02.png").attr("width", "150px").attr("alt", "furn_02");

  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-furn").attr("data-src", "furn_03.png").attr("data-drag", true)
    .attr("data-width", c.height).attr("data-height", 245).attr("data-x", 500).attr("data-y", 100).attr("data-name", "furn_03").attr("data-copy", 1)
    .attr("data-type", "furn").attr("src", "furn_03.png").attr("width", "150px").attr("alt", "furn_03");

  $("#furniture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-furn").attr("data-src", "furn_04.png").attr("data-drag", true)
    .attr("data-width", c.height).attr("data-height", 265).attr("data-x", 500).attr("data-y", 100).attr("data-name", "furn_04").attr("data-copy", 1)
    .attr("data-type", "furn").attr("src", "furn_04.png").attr("width", "150px").attr("alt", "furn_04");

  $("#furniture").append($imgThumbnail);


  //Textures

  var removeTexture = $("<button>").text("No Texture").addClass("btn btn-default no-texture").attr("type", "button");

  $("#texture").append(removeTexture);


  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_01.jpg").attr("data-drag", false)
    .attr("data-name", "patt_01").attr("data-type", "patt").attr("src", "patt_04.jpg").attr("width", "150px").attr("alt", "patt_01");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_02.jpg").attr("data-drag", false)
    .attr("data-name", "patt_02").attr("data-type", "patt").attr("src", "patt_02.jpg").attr("width", "150px").attr("alt", "patt_02");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_03.jpg").attr("data-drag", false)
    .attr("data-name", "patt_03").attr("data-type", "patt").attr("src", "patt_03.jpg").attr("width", "150px").attr("alt", "patt_03");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_04.jpg").attr("data-drag", false)
    .attr("data-name", "patt_04").attr("data-type", "patt").attr("src", "patt_04.jpg").attr("width", "150px").attr("alt", "patt_04");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_05.jpg").attr("data-drag", false)
    .attr("data-name", "patt_05").attr("data-type", "patt").attr("src", "patt_05.jpg").attr("width", "150px").attr("alt", "patt_05");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_06.jpg").attr("data-drag", false)
    .attr("data-name", "patt_06").attr("data-type", "patt").attr("src", "patt_06.jpg").attr("width", "150px").attr("alt", "patt_06");

  $("#texture").append($imgThumbnail);

  $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", "patt_07.jpg").attr("data-drag", false)
    .attr("data-name", "patt_07").attr("data-type", "patt").attr("src", "patt_07.jpg").attr("width", "150px").attr("alt", "patt_07");

  $("#texture").append($imgThumbnail);

  // END -----------------------    This code will be replaced by retrieving data from our database   --------------------------------------

  // canvas.detectPixelRatio();
  // canvas.restoreCanvas();

  $(document).on("click", ".img-base", function () {

    if (floorMode) canvas.removeLayer("floor");
    if (roomMode) canvas.removeLayer("room");
    if (backgroundMode) canvas.removeLayer("background");

    floorMode = false;
    backgroundMode = false;
    roomMode = false;

    var objIndex;

    if ($(this).data("type") === "room") {
      if (colorExists) canvas.removeLayer("color");
      if (textureExists) canvas.removeLayer("texture");
      colorExists = false;
      textureExists = false;
      objIndex = 0;
      $("#full").spectrum("disable");
    } else {
      $("#full").spectrum("enable");
      if (colorExists && textureExists) objIndex = 2 + artworkCount;
      if ((colorExists && !(textureExists)) || (!(colorExists) && textureExists)) objIndex = 1 + artworkCount;
      if (!(colorExists) && !(textureExists)) objIndex = 0 + artworkCount;
    }

    switch ($(this).data("type")) {
      case "floor":
        floorMode = true;
        break;
      case "background":
        backgroundMode = true;
        break;
      case "room":
        roomMode = true;
        break;
    }

    canvas.addLayer({
      type: "image",
      name: $(this).data("name"),
      source: $(this).data("src"),
      draggable: $(this).data("drag"),
      data: {
        type: $(this).data("type")
      },
      fromCenter: false,
      intangible: true,
      index: objIndex,
      x: $(this).data("x"),
      y: $(this).data("y"),
      width: $(this).data("width"),
      height: $(this).data("height")
    }).drawLayers();

  });

  $(document).on("click", ".img-art, .img-furn", function () {

    var objIndex;
    var layerName = $(this).data("name") + "_" + $(this).data("copy");

    canvas.addLayer({
      type: "image",
      name: layerName,
      source: $(this).data("src"),
      draggable: $(this).data("drag"),
      data: {
        type: $(this).data("type")
      },
      fromCenter: false,
      x: $(this).data("x"),
      y: $(this).data("y"),
      width: $(this).data("width"),
      height: $(this).data("height"),
      resizeFromCenter: false,
      constrainProportions: true,
      handlePlacement: "corners",
      dblclick: function (layer) {
        delLayer = layer;
        $("#deleteModal").modal({
          backdrop: "static",
          keyboard: true
        });
      },
      mouseover: function (layer) {
        showHandles(layer).drawLayers();
      },
      mouseout: function (layer) {
        hideHandles(layer).drawLayers();
      }
    }).drawLayers();

    if ($(this).data("type") === "art") {
      artworkCount++;
      if (roomMode) objIndex = 1;
      else {
        if (colorExists && textureExists) objIndex = 2;
        if ((colorExists && !(textureExists)) || (!(colorExists) && textureExists)) objIndex = 1;
        if (!(colorExists) && !(textureExists)) objIndex = 0;
      }
      canvas.moveLayer(layerName, objIndex).drawLayers();
    }

    //increment copy number so if the same image is added to canvas, it will take on the next copy number
    var num = $(this).data("copy") + 1;

    $(this).data("copy", num);

  });

  $(document).on("click", ".img-patt", function () {

    patt = canvas.createPattern({
      source: $(this).data("src"),
      repeat: "repeat",
      load: draw
    });

  });

  $(document).on("click", ".no-texture", function () {
    textureExists = false;

    canvas.setLayer("color", {
      opacity: 1
    });

    canvas.removeLayer("texture").drawLayers();
  });

  $(document).on("click", "#delete-obj", function () {

    canvas.removeLayer(delLayer).drawLayers();

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
    localStorageKey: "spectrum.impulso",
    move: function (color) {

    },
    show: function () {

    },
    beforeShow: function () {

    },
    hide: function () {

    },
    change: function (color) {

      var colorIndex;
      var colorOpacity;

      canvas.removeLayer("color");

      if (textureExists) {
        canvas.setLayer("texture", {
          opacity: 1
        });
        colorIndex = 1;
        colorOpacity = .9;
      } else {
        colorIndex = 0;
        colorOpacity = 1;
      }


      canvas.addLayer({
        name: "color",
        type: "rectangle",
        fillStyle: color.toHexString(),
        opacity: colorOpacity,
        draggable: false,
        fromCenter: false,
        index: colorIndex,
        x: 0,
        y: 0,
        width: c.width,
        height: c.height
      }).drawLayers();

      colorExists = true;
    },
    palette: [
      ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
        "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)",
        "rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)",
        "rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
      ]
    ]
  });

  $(document).on("resize", canvas, function () {

    canvas.drawLayers();

  });





}); // end document ready

// logic for sign in/up from
// document.querySelector('.img__btn').addEventListener('click', function() {
//   document.querySelector('.cont').classList.toggle('s--signup');
// });