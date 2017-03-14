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

//load Showrooms
  $.ajax({
    url: "/objects/rooms",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
    var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-base").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
      .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "room").attr("data-type", "room")
      .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

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
      .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

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
      .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

      $("#backgrounds").append($imgThumbnail);

    }
  });

//load Textures

  var removeTexture = $("<button>").text("No Texture").addClass("btn btn-default no-texture").attr("type", "button");

  $("#texture").append(removeTexture);

  $.ajax({
    url: "/objects/textures",
    method: "GET"
  }).done(function (data) {
    for (var i = 0; i < data.length; i++) {
    var $imgThumbnail = $("<img>").addClass("img-responsive img-thumbnail img-patt").attr("data-src", data[i].file_path + data[i].file_name).attr("data-drag", false)
      .attr("data-width", c.width).attr("data-height", c.height).attr("data-x", 0).attr("data-y", 0).attr("data-name", "texture").attr("data-type", "texture")
      .attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

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
        .attr("data-type", "art").attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

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
        .attr("data-type", "furn").attr("src", data[i].file_path + data[i].file_name).attr("width", "150px").attr("alt", data[i].obj_name);

      $("#furniture").append($imgThumbnail);

    }
  });

  // canvas.detectPixelRatio();
  // canvas.restoreCanvas();

  $('#btnRegister').on('click', function() {

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
      // width: $(this).data("width") / 4,
      // height: $(this).data("height") / 4,
      width: this.naturalWidth / 2,
      height: this.naturalHeight / 2,
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

var button = document.getElementById('btn-download');

button.addEventListener('click', function (e) {
    var fileName = "Showroom_" + moment().format("YYYY-MM-DD-h:mm:ss");
    $(this).attr("download", fileName);
    var dataURL = c.toDataURL('image/png');
    button.href = dataURL;
});

  $('#btn-save').on('click', function() {

    

});



// function download() {
//     var dt = c.toDataURL('image/jpeg');
//     this.href = dt;
// };

//   $(document).on("click", "#save-canvas-file", function () {

//     // console.log(canvas.getCanvasImage('png'));

//   download();
//   });

  // $(document).on("change", "#sv-dir", function (e) {
  
  //   console.log($("#sv-dir").val());
  //   var files = e.target.files;
  //   var path = files[0].webkitRelativePath;
  //   var Folder = path.split("/");
  //   alert(Folder[0]);
  // });

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
//     palette: [
// "RGB(60,61,61)",
// "RGB(91,63,72)",
// "RGB(85,86,87)",
// "RGB(107,114,117)",
// "RGB(152,141,144)",
// "RGB(148,142,137)",
// "RGB(161,153,140)",
// "RGB(191,184,176)",
// "RGB(61,73,85)",
// "RGB(72,88,105)",
// "RGB(113,139,151)",
// "RGB(127,145,147)",
// "RGB(160,172,174)",
// "RGB(137,173,189)",
// "RGB(191,191,186)",
// "RGB(204,203,199)",
// "RGB(70,81,78)",
// "RGB(44,88,97)",
// "RGB(112,142,123)",
// "RGB(135,146,131)",
// "RGB(140,159,151)",
// "RGB(167,187,185)",
// "RGB(186,201,192)",
// "RGB(220,224,218)",
// "RGB(67,89,76)",
// "RGB(96,110,85)",
// "RGB(124,117,106)",
// "RGB(127,123,101)",
// "RGB(173,156,116)",
// "RGB(181,175,159)",
// "RGB(184,182,161)",
// "RGB(211,212,199)",
// "RGB(94,84,69)",
// "RGB(139,101,68)",
// "RGB(178,145,114)",
// "RGB(209,176,132)",
// "RGB(198,181,162)",
// "RGB(218,202,178)",
// "RGB(245,216,166)",
// "RGB(239,235,224)",
// "RGB(79,67,64)",
// "RGB(123,105,93)",
// "RGB(160,134,116)",
// "RGB(203,163,127)",
// "RGB(231,179,124)",
// "RGB(252,213,162)",
// "RGB(248,225,195)",
// "RGB(236,223,203)",
// "RGB(100,74,64)",
// "RGB(127,87,73)",
// "RGB(135,74,62)",
// "RGB(162,104,74)",
// "RGB(182,139,113)",
// "RGB(210,191,174)",
// "RGB(228,210,190)",
// "RGB(235,226,211)",
// "RGB(106,68,68)",
// "RGB(135,65,64)",
// "RGB(151,62,69)",
// "RGB(155,114,117)",
// "RGB(176,100,89)",
// "RGB(188,131,110)",
// "RGB(216,168,144)",
// "RGB(241,235,226)",
// "RGB(71,91,90)",
// "RGB(152,196,197)",
// "RGB(127,161,162)",
// "RGB(102,108,68)",
// "RGB(129,128,74)",
// "RGB(186,173,119)",
// "RGB(96,152,150)",
// "RGB(200,192,174)",
// "RGB(97,96,77)",
// "RGB(158,156,121)",
// "RGB(184,179,145)",
// "RGB(210,204,175)",
// "RGB(84,92,71)",
// "RGB(111,116,91)",
// "RGB(119,140,89)",
// "RGB(150,164,134)",
// "RGB(193,198,170)",
// "RGB(37,100,97)",
// "RGB(72,85,65)",
// "RGB(91,113,76)",
// "RGB(111,129,89)",
// "RGB(141,171,137)",
// "RGB(184,198,177)",
// "RGB(70,84,82)",
// "RGB(92,136,120)",
// "RGB(68,158,125)",
// "RGB(111,182,150)",
// "RGB(131,189,149)",
// "RGB(166,185,186)",
// "RGB(85,111,106)",
// "RGB(114,162,149)",
// "RGB(136,184,170)",
// "RGB(159,191,184)",
// "RGB(0,112,120)",
// "RGB(59,139,152)",
// "RGB(97,148,152)",
// "RGB(143,191,202)",
// "RGB(208,199,184)",
// "RGB(186,179,146)",
// "RGB(110,136,142)",
// "RGB(148,138,121)",
// "RGB(97,92,71)",
// "RGB(172,169,149)",
// "RGB(155,152,134)",
// "RGB(140,136,125)",
// "RGB(92,88,78)",
// "RGB(188,185,175)",
// "RGB(158,158,157)",
// "RGB(149,151,140)",
// "RGB(124,128,125)",
// "RGB(73,102,108)",
// "RGB(105,106,97)",
// "RGB(180,191,181)",
// "RGB(150,163,151)",
// "RGB(120,132,113)",
// "RGB(93,106,90)",
// "RGB(84,98,88)",
// "RGB(158,188,170)",
// "RGB(120,172,147)",
// "RGB(126,158,142)",
// "RGB(115,133,130)",
// "RGB(41,86,92)",
// "RGB(64,67,90)",
// "RGB(157,158,169)",
// "RGB(111,117,143)",
// "RGB(0,96,127)",
// "RGB(62,106,131)",
// "RGB(103,133,150)",
// "RGB(83,87,101)",
// "RGB(155,175,182)",
// "RGB(55,84,110)",
// "RGB(31,101,146)",
// "RGB(90,144,179)",
// "RGB(137,182,211)",
// "RGB(55,72,94)",
// "RGB(86,116,149)",
// "RGB(106,127,156)",
// "RGB(128,152,179)",
// "RGB(174,196,208)",
// "RGB(60,60,61)",
// "RGB(58,72,126)",
// "RGB(68,78,136)",
// "RGB(89,114,169)",
// "RGB(106,138,186)",
// "RGB(176,187,211)",
// "RGB(69,64,100)",
// "RGB(75,70,120)",
// "RGB(89,77,121)",
// "RGB(116,106,144)",
// "RGB(194,191,204)",
// "RGB(171,169,172)",
// "RGB(69,63,86)",
// "RGB(87,79,104)",
// "RGB(122,111,130)",
// "RGB(178,168,180)",
// "RGB(100,71,97)",
// "RGB(125,94,125)",
// "RGB(165,143,167)",
// "RGB(195,190,195)",
// "RGB(183,190,193)",
// "RGB(155,161,163)",
// "RGB(132,131,142)",
// "RGB(137,144,147)",
// "RGB(107,113,116)",
// "RGB(131,153,162)",
// "RGB(89,119,133)",
// "RGB(82,104,115)",
// "RGB(53,83,99)",
// "RGB(165,176,185)",
// "RGB(154,162,170)",
// "RGB(140,148,155)",
// "RGB(125,140,150)",
// "RGB(91,90,96)",
// "RGB(103,117,130)",
// "RGB(196,200,208)",
// "RGB(157,171,199)",
// "RGB(126,141,162)",
// "RGB(85,97,129)",
// "RGB(59,73,106)",
// "RGB(165,170,191)",
// "RGB(131,137,154)",
// "RGB(107,113,130)",
// "RGB(70,78,93)",
// "RGB(79,73,83)",
// "RGB(179,135,78)",
// "RGB(208,156,104)",
// "RGB(187,145,91)",
// "RGB(122,85,127)",
// "RGB(150,124,167)",
// "RGB(185,132,174)",
// "RGB(167,120,66)",
// "RGB(191,168,211)",
// "RGB(15,104,156)",
// "RGB(0,141,200)",
// "RGB(24,164,218)",
// "RGB(171,208,217)",
// "RGB(0,112,131)",
// "RGB(0,134,170)",
// "RGB(32,164,191)",
// "RGB(95,178,191)",
// "RGB(131,197,210)",
// "RGB(161,110,66)",
// "RGB(79,116,77)",
// "RGB(70,139,79)",
// "RGB(119,161,103)",
// "RGB(174,219,141)",
// "RGB(209,221,180)",
// "RGB(116,137,70)",
// "RGB(149,166,113)",
// "RGB(186,173,100)",
// "RGB(203,199,158)",
// "RGB(221,211,169)",
// "RGB(230,180,175)",
// "RGB(198,130,105)",
// "RGB(213,140,108)",
// "RGB(201,143,108)",
// "RGB(223,165,119)",
// "RGB(171,77,62)",
// "RGB(182,107,100)",
// "RGB(199,117,100)",
// "RGB(213,136,118)",
// "RGB(182,188,219)",
// "RGB(168,173,210)",
// "RGB(225,165,160)",
// "RGB(136,131,196)",
// "RGB(98,85,129)",
// "RGB(127,185,230)",
// "RGB(88,144,198)",
// "RGB(86,125,191)",
// "RGB(44,108,175)",
// "RGB(171,233,223)",
// "RGB(126,215,211)",
// "RGB(23,181,181)",
// "RGB(0,153,161)",
// "RGB(201,104,107)",
// "RGB(0,154,143)",
// "RGB(177,219,199)",
// "RGB(150,216,195)",
// "RGB(79,177,144)",
// "RGB(0,144,107)",
// "RGB(15,121,94)",
// "RGB(231,193,123)",
// "RGB(225,184,101)",
// "RGB(227,173,103)",
// "RGB(214,160,96)",
// "RGB(191,91,106)",
// "RGB(218,199,181)",
// "RGB(231,219,212)",
// "RGB(221,209,202)",
// "RGB(189,198,216)",
// "RGB(204,207,214)",
// "RGB(202,212,223)",
// "RGB(214,203,193)",
// "RGB(213,214,221)",
// "RGB(191,203,209)",
// "RGB(205,215,222)",
// "RGB(213,225,229)",
// "RGB(220,220,219)",
// "RGB(182,202,204)",
// "RGB(200,215,221)",
// "RGB(202,230,236)",
// "RGB(216,228,226)",
// "RGB(215,221,221)",
// "RGB(217,194,187)",
// "RGB(185,202,186)",
// "RGB(201,207,197)",
// "RGB(217,222,194)",
// "RGB(223,226,209)",
// "RGB(221,223,216)",
// "RGB(224,202,171)",
// "RGB(236,206,170)",
// "RGB(227,213,174)",
// "RGB(232,217,194)",
// "RGB(227,218,202)",
// "RGB(226,223,220)",
// "RGB(236,196,173)",
// "RGB(215,195,181)",
// "RGB(231,210,196)",
// "RGB(224,213,202)",
// "RGB(228,216,215)",
// "RGB(239,217,210)",
// "RGB(225,219,213)",
// "RGB(233,230,225)",
// "RGB(227,226,231)",
// "RGB(216,214,223)",
// "RGB(227,220,217)",
// "RGB(216,210,214)",
// "RGB(204,200,201)",
// "RGB(220,224,226)",
// "RGB(216,221,226)",
// "RGB(212,214,215)",
// "RGB(197,216,232)",
// "RGB(222,221,216)",
// "RGB(209,213,209)",
// "RGB(202,214,206)",
// "RGB(196,218,212)",
// "RGB(222,211,208)",
// "RGB(194,226,220)",
// "RGB(219,215,205)",
// "RGB(227,218,197)",
// "RGB(223,209,180)",
// "RGB(217,205,183)",
// "RGB(218,212,180)",
// "RGB(230,223,210)",
// "RGB(229,220,201)",
// "RGB(220,204,183)",
// "RGB(212,197,179)",
// "RGB(209,191,187)",
// "RGB(115,88,63)",
// "RGB(224,197,168)",
// "RGB(207,164,126)",
// "RGB(93,90,87)",
// "RGB(109,111,110)",
// "RGB(153,148,140)",
// "RGB(147,102,66)",
// "RGB(198,196,192)",
// "RGB(119,115,109)",
// "RGB(144,134,123)",
// "RGB(171,160,150)",
// "RGB(183,175,166)",
// "RGB(94,85,81)",
// "RGB(130,125,116)",
// "RGB(171,161,146)",
// "RGB(192,180,164)",
// "RGB(208,195,181)",
// "RGB(108,85,73)",
// "RGB(128,109,93)",
// "RGB(152,130,111)",
// "RGB(178,158,137)",
// "RGB(199,174,149)",
// "RGB(226,197,166)",
// "RGB(104,90,82)",
// "RGB(140,110,91)",
// "RGB(164,129,108)",
// "RGB(179,151,129)",
// "RGB(192,166,145)",
// "RGB(209,173,144)",
// "RGB(88,76,68)",
// "RGB(133,118,106)",
// "RGB(182,164,149)",
// "RGB(211,187,169)",
// "RGB(92,77,73)",
// "RGB(113,90,84)",
// "RGB(160,141,132)",
// "RGB(194,174,158)",
// "RGB(227,216,190)",
// "RGB(199,179,145)",
// "RGB(185,152,124)",
// "RGB(194,170,127)",
// "RGB(188,159,125)",
// "RGB(215,201,182)",
// "RGB(199,184,160)",
// "RGB(187,167,142)",
// "RGB(171,152,127)",
// "RGB(214,195,166)",
// "RGB(203,183,149)",
// "RGB(200,181,156)",
// "RGB(180,167,150)",
// "RGB(175,133,101)",
// "RGB(156,128,106)",
// "RGB(215,187,136)",
// "RGB(210,171,117)",
// "RGB(203,159,104)",
// "RGB(179,145,107)",
// "RGB(162,129,87)",
// "RGB(201,170,131)",
// "RGB(191,158,128)",
// "RGB(161,127,99)",
// "RGB(132,98,69)",
// "RGB(139,101,79)",
// "RGB(140,70,74)",
// "RGB(184,111,130)",
// "RGB(165,92,109)",
// "RGB(116,78,68)",
// "RGB(141,96,84)",
// "RGB(166,116,100)",
// "RGB(180,91,107)",
// "RGB(181,145,127)",
// "RGB(95,75,72)",
// "RGB(125,97,89)",
// "RGB(135,111,105)",
// "RGB(177,151,140)",
// "RGB(97,69,65)",
// "RGB(119,87,85)",
// "RGB(165,125,116)",
// "RGB(190,144,130)",
// "RGB(202,169,158)",
// "RGB(144,77,90)",
// "RGB(93,65,71)",
// "RGB(120,89,93)",
// "RGB(140,109,109)",
// "RGB(174,145,144)",
// "RGB(194,172,171)",
// "RGB(91,71,74)",
// "RGB(94,78,78)",
// "RGB(107,87,84)",
// "RGB(127,107,106)",
// "RGB(161,143,140)",
// "RGB(198,163,169)",
// "RGB(110,76,96)",
// "RGB(114,96,112)",
// "RGB(149,135,136)",
// "RGB(181,165,166)",
// "RGB(67,63,62)",
// "RGB(85,76,77)",
// "RGB(115,106,116)",
// "RGB(146,132,140)",
// "RGB(226,193,171)",
// "RGB(211,165,140)",
// "RGB(147,92,114)",
// "RGB(183,135,111)",
// "RGB(169,112,89)",
// "RGB(215,152,125)",
// "RGB(191,119,97)",
// "RGB(158,85,67)",
// "RGB(148,74,63)",
// "RGB(218,184,168)",
// "RGB(171,108,100)",
// "RGB(147,89,83)",
// "RGB(137,91,84)",
// "RGB(132,76,90)",
// "RGB(114,70,65)",
// "RGB(192,148,140)",
// "RGB(161,113,109)",
// "RGB(144,88,89)",
// "RGB(116,67,71)",
// "RGB(105,68,71)",
// "RGB(200,156,156)",
// "RGB(188,123,127)",
// "RGB(184,102,102)",
// "RGB(152,67,67)",
// "RGB(119,78,88)"
// ]
  });

  $(document).on("resize", canvas, function () {

    canvas.drawLayers();

  });





}); // end document ready

// logic for sign in/up from
// document.querySelector('.img__btn').addEventListener('click', function() {
//   document.querySelector('.cont').classList.toggle('s--signup');
// });