$(document).ready(function () {

  $('.login-form').validator();
  $('.registration-form').validator();

  var canvas;
  var c;
  var appLoggedIn = false;

  var $canvasWidth;
  var $canvasHeight;


  var delLayer;
  var patt;
  var patt_obj_id;
  var patt_type;

  var textureExists = false;
  var colorExists = false;
  var floorMode = false;
  var backgroundMode = false;
  var roomMode = false;
  var artworkCount = 0;

  function setCanvas() {
    if ($(window).width() > 1900 && $(window).width() <= 2500) {
      $canvasWidth = 1200;
      $canvasHeight = 800;
    } else {
      if ($(window).width() > 1550 && $(window).width() <= 1900) {
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

  function draw(patt, _this) {
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
      data: {
        type: patt_type,
        objid: patt_obj_id
      },
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

  //load Rooms
  $.ajax({
    url: "/objects/rooms",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
        .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "room").attr("data-type", "room")
        .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#rooms").append($imgThumbnail);

    }
  });

  //load Floors
  $.ajax({
    url: "/objects/floors",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
        .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "floor").attr("data-type", "floor")
        .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#floors").append($imgThumbnail);

    }
  });

  //load Backgrounds
  $.ajax({
    url: "/objects/backgrounds",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
        .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "background").attr("data-type", "background")
        .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#decors").append($imgThumbnail);

    }
  });

  //load Textures

  var removeTexture = $("<button>").text("No Texture").addClass("btn btn-default no-texture").attr("type", "button");

  $("#textures").append(removeTexture);

  $.ajax({

    url: "/objects/textures",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
        .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "texture").attr("data-type", "texture")
        .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#textures").append($imgThumbnail);

    }
  });

  //load Artwork
  $.ajax({
    url: "/objects/artwork",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-art").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", true).attr("data-height", data[i].height)
        .attr("data-width", data[i].width).attr("data-x", 100).attr("data-y", 20).attr("data-name", data[i].obj_name).attr("data-copy", 1)
        .attr("data-type", "art").attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#artwork").append($imgThumbnail);

    }
  });

  //load Furniture
  $.ajax({
    url: "/objects/furniture",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
      var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-furn").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", true).attr("data-height", data[i].height)
        .attr("data-width", data[i].width).attr("data-x", 100).attr("data-y", 100).attr("data-name", data[i].obj_name).attr("data-copy", 1)
        .attr("data-type", "furn").attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name).attr("data-obj-id", data[i].id);

      $("#furniture").append($imgThumbnail);

    }
  });

  // canvas.detectPixelRatio();
  // canvas.restoreCanvas();

  $('#btnRegister').on('click', function () {

    $("a[href='#registration']").click();

  });

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
        type: $(this).data("type"),
        objid: $(this).data("obj-id")
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
        type: $(this).data("type"),
        objid: $(this).data("obj-id")
      },
      fromCenter: false,
      x: $(this).data("x"),
      y: $(this).data("y"),
      width: this.naturalWidth / 2,
      height: this.naturalHeight / 2,
      resizeFromCenter: false,
      constrainProportions: true,
      shadowColor: '#222',
      shadowBlur: 10,
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
    patt_type = $(this).data("type");
    patt_obj_id = $(this).data("obj-id");

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

  var button = document.getElementById('btn-download');

  button.addEventListener('click', function (e) {
    var fileName = "Showroom_" + moment().format("YYYY-MM-DD-h:mm:ss");
    $(this).attr("download", fileName);
    var dataURL = c.toDataURL('image/png');
    button.href = dataURL;
  });

  $('#btn-save').on('click', function () {

    var l = canvas.getLayers(function (layer) {
      return (layer.name);
    });

    for (var i = 0; i < l.length; i++) {
      console.log("layer name: " + l[i].name + " index: " + l[i].index + " height: " + l[i].height + " width: " + l[i].width + " position_top: " + l[i].y + " position_left: " + l[i].x + " aspect_ratio: " + l[i].aspectRatio + " other info: " + Object.keys(l[i].data) + " : " + Object.values(l[i].data))

    }

  });

  $("#full").spectrum({
    color: "#ECC",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showAlpha: true,
    togglePaletteOnly: true,
    togglePaletteMoreText: "more",
    togglePaletteLessText: "less",
    hideAfterPaletteSelect: true,

    showPalette: true,
    showPaletteOnly: false,
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
        data: {
          color: color.toHexString()
        },
        fromCenter: false,
        index: colorIndex,
        x: 0,
        y: 0,
        width: c.width,
        height: c.height
      }).drawLayers();

      colorExists = true;
    },
    // palette: [
    //   ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
    //     "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)",
    //     "rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    //     "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)",
    //     "rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    //     "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    //     "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    //     "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    //     "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    //     "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    //     "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    //     "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    //     "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    //     "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
    //   ]
    // ]
    // palette: 
    // [ 
    // ["RGB(60,61,61)","RGB(85,86,87)","RGB(107,114,117)","RGB(152,141,144)","RGB(148,142,137)","RGB(161,153,140)","RGB(191,184,176)","RGB(61,73,85)","RGB(72,88,105)","RGB(113,139,151)", "RGB(127,145,147)","RGB(160,172,174)","RGB(137,173,189)","RGB(191,191,186)","RGB(204,203,199)","RGB(70,81,78)","RGB(44,88,97)","RGB(112,142,123)","RGB(135,146,131)", "RGB(140,159,151)","RGB(167,187,185)","RGB(186,201,192)","RGB(220,224,218)","RGB(67,89,76)","RGB(96,110,85)","RGB(124,117,106)","RGB(127,123,101)","RGB(173,156,116)","RGB(181,175,159)", "RGB(184,182,161)","RGB(211,212,199)","RGB(94,84,69)","RGB(139,101,68)", "RGB(178,145,114)","RGB(209,176,132)","RGB(198,181,162)","RGB(218,202,178)", "RGB(245,216,166)","RGB(239,235,224)","RGB(79,67,64)","RGB(123,105,93)", "RGB(160,134,116)","RGB(203,163,127)","RGB(231,179,124)","RGB(252,213,162)", "RGB(248,225,195)","RGB(236,223,203)","RGB(100,74,64)","RGB(127,87,73)", "RGB(135,74,62)","RGB(162,104,74)","RGB(182,139,113)","RGB(210,191,174)", "RGB(228,210,190)","RGB(235,226,211)","RGB(106,68,68)","RGB(135,65,64)", "RGB(151,62,69)","RGB(155,114,117)","RGB(176,100,89)","RGB(188,131,110)", "RGB(216,168,144)","RGB(241,235,226)","RGB(71,91,90)","RGB(152,196,197)", "RGB(127,161,162)","RGB(102,108,68)","RGB(129,128,74)","RGB(186,173,119)", "RGB(96,152,150)","RGB(200,192,174)","RGB(97,96,77)","RGB(158,156,121)", "RGB(184,179,145)","RGB(210,204,175)","RGB(84,92,71)","RGB(111,116,91)", "RGB(119,140,89)","RGB(150,164,134)","RGB(193,198,170)","RGB(37,100,97)", "RGB(72,85,65)","RGB(91,113,76)","RGB(111,129,89)","RGB(141,171,137)", "RGB(184,198,177)", "RGB(70,84,82)", "RGB(92,136,120)", "RGB(68,158,125)", "RGB(111,182,150)", "RGB(131,189,149)", "RGB(166,185,186)", "RGB(85,111,106)", "RGB(114,162,149)", "RGB(136,184,170)", "RGB(159,191,184)", "RGB(0,112,120)", "RGB(59,139,152)", "RGB(97,148,152)", "RGB(143,191,202)", "RGB(208,199,184)", "RGB(186,179,146)", "RGB(110,136,142)", "RGB(148,138,121)", "RGB(97,92,71)", "RGB(172,169,149)", "RGB(155,152,134)", "RGB(140,136,125)", "RGB(92,88,78)", "RGB(188,185,175)", "RGB(158,158,157)", "RGB(149,151,140)", "RGB(124,128,125)", "RGB(73,102,108)", "RGB(105,106,97)", "RGB(180,191,181)", "RGB(150,163,151)", "RGB(120,132,113)", "RGB(93,106,90)", "RGB(84,98,88)", "RGB(158,188,170)", "RGB(120,172,147)", "RGB(126,158,142)", "RGB(115,133,130)", "RGB(41,86,92)", "RGB(64,67,90)", "RGB(157,158,169)", "RGB(111,117,143)", "RGB(0,96,127)", "RGB(62,106,131)", "RGB(103,133,150)", "RGB(83,87,101)", "RGB(155,175,182)", "RGB(55,84,110)", "RGB(31,101,146)", "RGB(90,144,179)", "RGB(137,182,211)", "RGB(55,72,94)", "RGB(86,116,149)", "RGB(106,127,156)", "RGB(128,152,179)", "RGB(174,196,208)", "RGB(60,60,61)", "RGB(58,72,126)", "RGB(68,78,136)", "RGB(89,114,169)", "RGB(106,138,186)", "RGB(176,187,211)", "RGB(69,64,100)", "RGB(75,70,120)", "RGB(89,77,121)", "RGB(116,106,144)", "RGB(194,191,204)", "RGB(171,169,172)", "RGB(69,63,86)", "RGB(87,79,104)", "RGB(122,111,130)", "RGB(178,168,180)", "RGB(100,71,97)", "RGB(125,94,125)", "RGB(165,143,167)", "RGB(195,190,195)", "RGB(183,190,193)", "RGB(155,161,163)", "RGB(132,131,142)", "RGB(137,144,147)", "RGB(107,113,116)", "RGB(131,153,162)", "RGB(89,119,133)", "RGB(82,104,115)", "RGB(53,83,99)", "RGB(165,176,185)", "RGB(154,162,170)", "RGB(140,148,155)", "RGB(125,140,150)", "RGB(91,90,96)", "RGB(103,117,130)", "RGB(196,200,208)", "RGB(157,171,199)", "RGB(126,141,162)", "RGB(85,97,129)", "RGB(59,73,106)", "RGB(165,170,191)", "RGB(131,137,154)", "RGB(107,113,130)", "RGB(70,78,93)", "RGB(79,73,83)", "RGB(179,135,78)", "RGB(208,156,104)", "RGB(187,145,91)", "RGB(122,85,127)", "RGB(150,124,167)", "RGB(185,132,174)", "RGB(167,120,66)", "RGB(191,168,211)", "RGB(15,104,156)", "RGB(0,141,200)", "RGB(24,164,218)", "RGB(171,208,217)", "RGB(0,112,131)", "RGB(0,134,170)", "RGB(32,164,191)", "RGB(95,178,191)", "RGB(131,197,210)", "RGB(161,110,66)", "RGB(79,116,77)", "RGB(70,139,79)", "RGB(119,161,103)", "RGB(174,219,141)", "RGB(209,221,180)", "RGB(116,137,70)", "RGB(149,166,113)", "RGB(186,173,100)", "RGB(203,199,158)", "RGB(221,211,169)", "RGB(230,180,175)", "RGB(198,130,105)", "RGB(213,140,108)", "RGB(201,143,108)", "RGB(223,165,119)", "RGB(171,77,62)", "RGB(182,107,100)", "RGB(199,117,100)", "RGB(213,136,118)", "RGB(182,188,219)", "RGB(168,173,210)", "RGB(225,165,160)", "RGB(136,131,196)", "RGB(98,85,129)", "RGB(127,185,230)", "RGB(88,144,198)", "RGB(86,125,191)", "RGB(44,108,175)", "RGB(171,233,223)", "RGB(126,215,211)", "RGB(23,181,181)", "RGB(0,153,161)", "RGB(201,104,107)", "RGB(0,154,143)", "RGB(177,219,199)", "RGB(150,216,195)", "RGB(79,177,144)", "RGB(0,144,107)", "RGB(15,121,94)", "RGB(231,193,123)", "RGB(225,184,101)", "RGB(227,173,103)", "RGB(214,160,96)", "RGB(191,91,106)", "RGB(218,199,181)", "RGB(231,219,212)", "RGB(221,209,202)", "RGB(189,198,216)", "RGB(204,207,214)", "RGB(202,212,223)", "RGB(214,203,193)", "RGB(213,214,221)", "RGB(191,203,209)", "RGB(205,215,222)", "RGB(213,225,229)", "RGB(220,220,219)", "RGB(182,202,204)", "RGB(200,215,221)", "RGB(202,230,236)", "RGB(216,228,226)", "RGB(215,221,221)", "RGB(217,194,187)", "RGB(185,202,186)", "RGB(201,207,197)", "RGB(217,222,194)", "RGB(223,226,209)", "RGB(221,223,216)", "RGB(224,202,171)", "RGB(236,206,170)", "RGB(227,213,174)", "RGB(232,217,194)", "RGB(227,218,202)", "RGB(226,223,220)", "RGB(236,196,173)", "RGB(215,195,181)", "RGB(231,210,196)", "RGB(224,213,202)", "RGB(228,216,215)", "RGB(239,217,210)", "RGB(225,219,213)", "RGB(233,230,225)", "RGB(227,226,231)", "RGB(216,214,223)", "RGB(227,220,217)", "RGB(216,210,214)", "RGB(204,200,201)", "RGB(220,224,226)", "RGB(216,221,226)", "RGB(212,214,215)", "RGB(197,216,232)", "RGB(222,221,216)", "RGB(209,213,209)", "RGB(202,214,206)", "RGB(196,218,212)", "RGB(222,211,208)", "RGB(194,226,220)", "RGB(219,215,205)", "RGB(227,218,197)", "RGB(223,209,180)", "RGB(217,205,183)", "RGB(218,212,180)", "RGB(230,223,210)", "RGB(229,220,201)", "RGB(220,204,183)", "RGB(212,197,179)", "RGB(209,191,187)", "RGB(115,88,63)", "RGB(224,197,168)", "RGB(207,164,126)", "RGB(93,90,87)", "RGB(109,111,110)", "RGB(153,148,140)", "RGB(147,102,66)", "RGB(198,196,192)", "RGB(119,115,109)", "RGB(144,134,123)", "RGB(171,160,150)", "RGB(183,175,166)", "RGB(94,85,81)", "RGB(130,125,116)", "RGB(171,161,146)", "RGB(192,180,164)", "RGB(208,195,181)", "RGB(108,85,73)", "RGB(128,109,93)", "RGB(152,130,111)", "RGB(178,158,137)", "RGB(199,174,149)", "RGB(226,197,166)", "RGB(104,90,82)", "RGB(140,110,91)", "RGB(164,129,108)", "RGB(179,151,129)", "RGB(192,166,145)", "RGB(209,173,144)", "RGB(88,76,68)", "RGB(133,118,106)", "RGB(182,164,149)", "RGB(211,187,169)", "RGB(92,77,73)", "RGB(113,90,84)", "RGB(160,141,132)", "RGB(194,174,158)", "RGB(227,216,190)", "RGB(199,179,145)", "RGB(185,152,124)", "RGB(194,170,127)", "RGB(188,159,125)", "RGB(215,201,182)", "RGB(199,184,160)", "RGB(187,167,142)", "RGB(171,152,127)", "RGB(214,195,166)", "RGB(203,183,149)", "RGB(200,181,156)", "RGB(180,167,150)", "RGB(175,133,101)", "RGB(156,128,106)", "RGB(215,187,136)", "RGB(210,171,117)", "RGB(203,159,104)", "RGB(179,145,107)", "RGB(162,129,87)", "RGB(201,170,131)", "RGB(191,158,128)", "RGB(161,127,99)", "RGB(132,98,69)", "RGB(139,101,79)", "RGB(140,70,74)", "RGB(184,111,130)", "RGB(165,92,109)", "RGB(116,78,68)", "RGB(141,96,84)", "RGB(166,116,100)", "RGB(180,91,107)", "RGB(181,145,127)", "RGB(95,75,72)", "RGB(125,97,89)", "RGB(135,111,105)", "RGB(177,151,140)", "RGB(97,69,65)", "RGB(119,87,85)", "RGB(165,125,116)", "RGB(190,144,130)", "RGB(202,169,158)", "RGB(144,77,90)", "RGB(93,65,71)", "RGB(120,89,93)", "RGB(140,109,109)", "RGB(174,145,144)", "RGB(194,172,171)", "RGB(91,71,74)", "RGB(94,78,78)", "RGB(107,87,84)", "RGB(127,107,106)", "RGB(161,143,140)", "RGB(198,163,169)", "RGB(110,76,96)", "RGB(114,96,112)", "RGB(149,135,136)", "RGB(181,165,166)", "RGB(67,63,62)", "RGB(85,76,77)", "RGB(115,106,116)", "RGB(146,132,140)", "RGB(226,193,171)", "RGB(211,165,140)", "RGB(147,92,114)", "RGB(183,135,111)", "RGB(169,112,89)", "RGB(215,152,125)", "RGB(191,119,97)", "RGB(158,85,67)", "RGB(148,74,63)", "RGB(218,184,168)", "RGB(171,108,100)", "RGB(147,89,83)", "RGB(137,91,84)", "RGB(132,76,90)", "RGB(114,70,65)", "RGB(192,148,140)", "RGB(161,113,109)", "RGB(144,88,89)", "RGB(116,67,71)", "RGB(105,68,71)", "RGB(200,156,156)", "RGB(188,123,127)", "RGB(184,102,102)", "RGB(152,67,67)", "RGB(119,78,88)"] ]

    palette:
    [
    ["RGB(204,206,203)", "RGB(154,149,147)", "RGB(109,108,110)", "RGB(147,148,147)", "RGB(133,130,130)", "RGB(60,51,49)", "RGB(213,209,196)", "RGB(177,173,164)", "RGB(133,133,129)", "RGB(147,150,146)", "RGB(114,118,114)", "RGB(99,101,100)", "RGB(197,187,172)", "RGB(176,168,156)", "RGB(145,138,129)", "RGB(158,151,141)", "RGB(136,131,122)", "RGB(107,100,94)", "RGB(213,208,196)", "RGB(188,183,170)", "RGB(178,174,163)", "RGB(161,159,152)", "RGB(131,127,121)", "RGB(107,106,104)", "RGB(226,225,210)", "RGB(203,200,181)", "RGB(151,141,119)", "RGB(171,164,148)", "RGB(143,138,125)", "RGB(115,111,104)", "RGB(214,208,192)", "RGB(189,182,162)", "RGB(164,155,137)", "RGB(198,191,174)", "RGB(179,172,154)", "RGB(131,124,110)", "RGB(230,225,209)", "RGB(178,166,146)", "RGB(135,123,110)", "RGB(175,165,152)", "RGB(148,139,125)", "RGB(84,72,59)", "RGB(233,225,207)", "RGB(214,204,185)", "RGB(192,182,164)", "RGB(182,163,145)", "RGB(134,118,104)", "RGB(79,68,62)", "RGB(240,235,220)", "RGB(224,212,190)", "RGB(181,164,137)", "RGB(149,132,111)", "RGB(128,109,88)", "RGB(100,80,67)", "RGB(223,209,186)", "RGB(204,184,157)", "RGB(199,169,132)", "RGB(163,128,94)", "RGB(137,100,73)", "RGB(108,79,63)", "RGB(250,247,232)", "RGB(233,223,208)", "RGB(207,193,175)", "RGB(186,156,131)", "RGB(145,99,82)", "RGB(117,71,53)", "RGB(235,226,209)", "RGB(222,205,190)", "RGB(210,186,170)", "RGB(182,157,142)", "RGB(139,111,99)", "RGB(95,60,48)", "RGB(228,224,214)", "RGB(214,209,200)", "RGB(182,170,158)", "RGB(160,143,133)", "RGB(136,127,121)", "RGB(85,67,60)", "RGB(228,223,209)", "RGB(214,204,191)", "RGB(198,184,173)", "RGB(188,169,164)", "RGB(146,121,119)", "RGB(110,89,85)", "RGB(215,188,188)", "RGB(172,106,111)", "RGB(132,68,80)", "RGB(159,64,99)", "RGB(106,59,61)", "RGB(89,48,48)", "RGB(142,144,162)", "RGB(112,98,120)", "RGB(78,52,85)", "RGB(97,47,79)", "RGB(108,95,108)", "RGB(57,42,49)", "RGB(233,234,226)", "RGB(215,211,206)", "RGB(193,189,189)", "RGB(214,214,209)", "RGB(146,138,140)", "RGB(96,90,97)", "RGB(208,213,216)", "RGB(143,164,198)", "RGB(84,98,144)", "RGB(135,145,165)", "RGB(76,75,93)", "RGB(65,61,64)", "RGB(209,222,230)", "RGB(155,179,198)", "RGB(96,143,195)", "RGB(79,114,155)", "RGB(69,88,115)", "RGB(65,68,68)", "RGB(221,223,217)", "RGB(196,200,198)", "RGB(169,176,177)", "RGB(202,207,210)", "RGB(163,177,184)", "RGB(89,101,114)", "RGB(141,165,174)", "RGB(184,207,213)", "RGB(153,193,208)", "RGB(122,143,154)", "RGB(83,91,97)", "RGB(52,57,63)", "RGB(95,164,178)", "RGB(60,153,163)", "RGB(39,119,143)", "RGB(132,161,174)", "RGB(57,108,141)", "RGB(1,72,100)", "RGB(204,212,205)", "RGB(156,176,178)", "RGB(131,162,168)", "RGB(87,134,141)", "RGB(69,101,110)", "RGB(3,60,79)", "RGB(168,200,189)", "RGB(127,183,173)", "RGB(118,160,155)", "RGB(90,126,126)", "RGB(74,111,116)", "RGB(31,73,81)", "RGB(233,231,223)", "RGB(188,196,188)", "RGB(146,159,152)", "RGB(184,199,191)", "RGB(139,160,156)", "RGB(113,125,122)", "RGB(207,207,193)", "RGB(160,162,149)", "RGB(119,120,106)", "RGB(195,201,185)", "RGB(170,182,166)", "RGB(139,159,137)", "RGB(220,224,205)", "RGB(201,209,184)", "RGB(173,175,147)", "RGB(136,146,123)", "RGB(106,118,99)", "RGB(73,83,66)", "RGB(219,218,189)", "RGB(195,191,160)", "RGB(149,149,119)", "RGB(201,204,160)", "RGB(182,185,150)", "RGB(156,164,118)", "RGB(225,220,170)", "RGB(208,204,141)", "RGB(189,185,121)", "RGB(210,211,87)", "RGB(177,190,78)", "RGB(142,174,98)", "RGB(238,234,202)", "RGB(215,209,154)", "RGB(202,192,129)", "RGB(187,184,98)", "RGB(134,126,68)", "RGB(91,86,57)", "RGB(243,232,190)", "RGB(241,224,166)", "RGB(226,203,145)", "RGB(215,190,112)", "RGB(189,164,71)", "RGB(150,127,56)", "RGB(240,233,203)", "RGB(249,229,179)", "RGB(237,209,148)", "RGB(240,218,155)", "RGB(230,195,106)", "RGB(188,145,31)", "RGB(240,231,204)", "RGB(220,195,150)", "RGB(214,184,130)", "RGB(188,158,98)", "RGB(153,127,86)", "RGB(135,112,76)", "RGB(234,225,193)", "RGB(202,189,151)", "RGB(189,169,123)", "RGB(227,209,173)", "RGB(206,189,151)", "RGB(182,160,125)", "RGB(240,237,218)", "RGB(223,215,192)", "RGB(203,193,167)", "RGB(171,158,130)", "RGB(150,132,107)", "RGB(109,94,75)", "RGB(241,231,211)", "RGB(228,207,173)", "RGB(215,179,142)", "RGB(205,153,108)", "RGB(172,114,66)", "RGB(140,93,44)", "RGB(234,203,167)", "RGB(219,175,134)", "RGB(190,129,88)", "RGB(190,114,60)", "RGB(166,86,40)", "RGB(210,115,38)", "RGB(210,129,110)", "RGB(179,108,94)", "RGB(145,85,69)", "RGB(215,151,122)", "RGB(190,123,101)", "RGB(170,89,69)", "RGB(192,64,46)", "RGB(172,64,49)", "RGB(170,53,53)", "RGB(191,112,104)", "RGB(149,70,69)", "RGB(120,58,54)", "RGB(223,133,129)", "RGB(201,100,98)", "RGB(177,99,93)", "RGB(181,78,82)", "RGB(161,37,51)", "RGB(160,36,62)", "RGB(89,57,54)", "RGB(94,77,85)", "RGB(163,138,140)", "RGB(192,165,161)", "RGB(237,239,237)", "RGB(236,238,235)", "RGB(241,242,235)", "RGB(106,54,66)", "RGB(91,55,71)", "RGB(80,60,81)", "RGB(112,102,121)", "RGB(243,242,231)", "RGB(236,231,216)", "RGB(227,213,195)", "RGB(121,58,53)", "RGB(160,63,63)", "RGB(157,47,60)", "RGB(167,57,66)", "RGB(237,235,225)", "RGB(228,224,211)", "RGB(216,206,184)", "RGB(153,73,66)", "RGB(167,77,68)", "RGB(185,110,83)", "RGB(190,101,73)", "RGB(247,241,226)", "RGB(226,215,194)", "RGB(208,187,157)", "RGB(143,81,74)", "RGB(143,64,49)", "RGB(166,90,79)", "RGB(180,106,88)", "RGB(243,240,224)", "RGB(234,222,198)", "RGB(212,193,158)", "RGB(127,75,71)", "RGB(194,134,116)", "RGB(231,190,173)", "RGB(243,219,205)", "RGB(246,239,217)", "RGB(242,229,197)", "RGB(238,216,165)", "RGB(189,140,111)", "RGB(194,137,115)", "RGB(221,171,135)", "RGB(241,202,162)", "RGB(239,224,184)", "RGB(233,212,162)", "RGB(226,195,140)", "RGB(250,216,150)", "RGB(251,226,161)", "RGB(252,236,194)", "RGB(254,239,179)", "RGB(238,230,207)", "RGB(222,212,184)", "RGB(203,185,141)", "RGB(230,197,140)", "RGB(235,208,161)", "RGB(228,218,188)", "RGB(230,216,186)", "RGB(227,220,195)", "RGB(214,201,167)", "RGB(194,183,152)", "RGB(157,111,74)", "RGB(203,165,115)", "RGB(219,190,153)", "RGB(235,211,178)", "RGB(232,220,188)", "RGB(218,202,162)", "RGB(207,186,134)", "RGB(186,154,121)", "RGB(202,173,135)", "RGB(227,211,180)", "RGB(221,205,180)", "RGB(223,209,193)", "RGB(208,189,165)", "RGB(189,167,141)", "RGB(170,143,106)", "RGB(177,153,123)", "RGB(185,162,132)", "RGB(202,180,149)", "RGB(233,221,201)", "RGB(228,196,167)", "RGB(186,136,103)", "RGB(166,142,115)", "RGB(181,160,140)", "RGB(202,176,153)", "RGB(216,195,174)", "RGB(226,208,182)", "RGB(211,172,137)", "RGB(157,97,65)", "RGB(181,157,142)", "RGB(196,185,175)", "RGB(203,190,176)", "RGB(203,186,169)", "RGB(235,213,177)", "RGB(214,180,136)", "RGB(185,142,97)", "RGB(205,186,174)", "RGB(212,197,187)", "RGB(221,212,203)", "RGB(232,222,208)", "RGB(224,207,180)", "RGB(193,168,136)", "RGB(154,125,88)", "RGB(159,141,125)", "RGB(184,170,157)", "RGB(202,191,176)", "RGB(212,202,190)", "RGB(206,197,182)", "RGB(184,171,155)", "RGB(160,143,125)", "RGB(115,88,73)", "RGB(135,97,80)", "RGB(181,151,123)", "RGB(201,173,143)", "RGB(197,187,171)", "RGB(174,163,145)", "RGB(133,116,95)", "RGB(102,90,75)", "RGB(158,136,117)", "RGB(151,136,120)", "RGB(163,158,151)", "RGB(203,197,177)", "RGB(176,166,144)", "RGB(134,123,105)", "RGB(87,79,73)", "RGB(106,105,104)", "RGB(140,133,125)", "RGB(128,126,120)", "RGB(183,185,166)", "RGB(155,157,136)", "RGB(99,101,82)", "RGB(140,131,117)", "RGB(143,130,107)", "RGB(159,145,122)", "RGB(210,198,169)", "RGB(215,219,192)", "RGB(176,179,137)", "RGB(124,129,105)", "RGB(164,160,136)", "RGB(172,159,137)", "RGB(198,196,175)", "RGB(227,232,221)", "RGB(202,209,192)", "RGB(141,154,134)", "RGB(89,99,82)", "RGB(154,147,118)", "RGB(175,170,144)", "RGB(197,195,177)", "RGB(220,215,168)", "RGB(195,210,199)", "RGB(145,164,148)", "RGB(91,114,106)", "RGB(90,83,61)", "RGB(106,104,84)", "RGB(97,99,66)", "RGB(151,155,115)", "RGB(192,199,188)", "RGB(168,180,171)", "RGB(158,169,162)", "RGB(67,73,63)", "RGB(134,132,104)", "RGB(150,146,128)", "RGB(185,185,162)", "RGB(200,208,201)", "RGB(164,177,175)", "RGB(123,133,128)", "RGB(136,137,115)", "RGB(148,153,129)", "RGB(166,171,147)", "RGB(188,199,184)", "RGB(177,202,209)", "RGB(128,158,173)", "RGB(108,137,150)", "RGB(49,73,75)", "RGB(79,109,108)", "RGB(112,144,143)", "RGB(157,173,159)", "RGB(161,191,207)", "RGB(134,161,183)", "RGB(76,91,114)", "RGB(84,115,133)", "RGB(132,185,209)", "RGB(152,196,224)", "RGB(189,213,222)", "RGB(204,222,227)", "RGB(100,136,160)", "RGB(64,83,103)", "RGB(130,166,193)", "RGB(155,181,200)", "RGB(178,192,200)", "RGB(156,178,188)", "RGB(181,198,216)", "RGB(119,134,162)", "RGB(93,107,134)", "RGB(17,86,126)", "RGB(65,115,157)", "RGB(95,144,183)", "RGB(175,212,230)", "RGB(187,204,224)", "RGB(92,110,147)", "RGB(66,75,99)", "RGB(49,77,138)", "RGB(57,99,164)", "RGB(108,142,180)", "RGB(162,192,214)", "RGB(202,209,217)", "RGB(148,161,190)", "RGB(93,99,117)", "RGB(93,122,180)", "RGB(142,174,218)", "RGB(158,179,209)", "RGB(166,184,206)", "RGB(223,227,228)", "RGB(161,167,183)", "RGB(111,114,131)", "RGB(44,60,77)", "RGB(117,126,147)", "RGB(148,167,191)", "RGB(200,214,229)", "RGB(173,180,203)", "RGB(125,130,158)", "RGB(106,110,135)", "RGB(64,66,81)", "RGB(54,58,100)", "RGB(65,71,110)", "RGB(64,70,126)", "RGB(167,167,190)", "RGB(131,128,147)", "RGB(82,77,91)"] 
    ]

  });

  $(document).on("resize", canvas, function () {

    canvas.drawLayers();

  });


  // User register/login

  $("#sign-in").on("click", function () {
    $("#login-modal").modal("toggle");
  });

  $("#reg-cancel").on("click", function () {
    $("#login-modal").modal("toggle");
  });

  $("#sign-out").on("click", function () {
    appLoggedIn = false;
    $("#user-name").addClass("hidden");
    $("#user-pic").addClass("hidden");
    $("#sign-out").addClass("hidden");

    // Hide sign-in button.
    $("#sign-in").removeClass("hidden");
  });

  var currentURL = window.location.origin;

  $("#login-submit").on("click", function (e) {
    e.preventDefault();
    var userN = $("#login-user-name").val();
    var pass = $("#login-password").val();

    var userSession = {
      user_name: userN,
      password_hash: pass
    }

    console.log(userSession)

    //AJAX post the data to the friends API.
    $.post("/login/user_login", userSession, function (data) {
      console.log(data);
      if (data.logged_in == true) {
        appLoggedIn = true;
        // var profilePicUrl = data.photoURL;

        // Set the user's profile pic and name.
        // this.userPic.css("backgroundImage", "url(" + profilePicUrl + ")");
        $("#user-name").text("Welcome, " + data.first_name);

        // Show user's profile and sign-out button.
        $("#user-name").removeClass("hidden");
        $("#user-pic").removeClass("hidden");
        $("#sign-out").removeClass("hidden");

        // Hide sign-in button.
        $("#sign-in").addClass("hidden");
        $("#login-modal").modal("toggle");
        // process user logged in
      } else {
        appLoggedIn = false;
        $("#user-name").addClass("hidden");
        // $("#user-pic").addClass("hidden");
        $("#sign-out").addClass("hidden");
        $("#sign-in").removeClass("hidden");

        //display error message
      }


    });

  });

  $("#reg-save").on("click", function (e) {
    e.preventDefault();
    var userName = $("#reg-user-name").val();
    var firstName = $("#reg-first-name").val();
    var lastName = $("#reg-last-name").val();
    var email = $("#reg-email").val();
    var password = $("#reg-password").val();

    var newUser = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password_hash: password
    };

    // $.ajax({
    //   url: "/login/user_signup",
    //   method: "POST",
    //   data: newUser
    // }).done(function (data) {
    //               if(data == true){
    //            location.href = "/app"
    //           } 
    // });

    $.post("/login/user_signup", newUser, function (data) {
        console.log(data);
      if (data.logged_in == true) {
        
        appLoggedIn = true;
        $("#user-name").text("Welcome, " + data.first_name);

        // Show user's profile and sign-out button.
        $("#user-name").removeClass("hidden");
        $("#user-pic").removeClass("hidden");
        $("#sign-out").removeClass("hidden");

        // Hide sign-in button.
        $("#sign-in").addClass("hidden");
        $("#login-modal").modal("toggle");
      } else {
        $("#user-name").addClass("hidden");
        // $("#user-pic").addClass("hidden");
        $("#sign-out").addClass("hidden");
        $("#sign-in").removeClass("hidden");

        //display error message
      }
    });

  }); //end reg-save

$("#sign-out").on("click", function(){
$.ajax({
      url: "/login/sign_out",
      method: "get",
      data: ""
    }).done(function (data) {
      console.log(data)
                  if(data == true){
               location.href = "/app"
              } 
    });
})


}); // end document ready