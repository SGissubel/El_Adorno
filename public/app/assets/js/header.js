var animated = false;

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    if ((!animated) && $('.navbar-brand').hasClass("byname-lg")) {
      $('.navbar-brand').removeClass("byname-lg").removeClass("fade-in").addClass("byname-sm").addClass("fade-out");
      $('.navbar').removeClass("navbar-lg").addClass("navbar-sm");
      $(".mod-flex").addClass("shrink-container");
      animated = true;
    }
  } 
  else {
    if ((!animated) && $('.navbar-brand').hasClass("byname-sm")) {
      $('.navbar-brand').removeClass("byname-sm").removeClass("fade-in").addClass("byname-lg").addClass("fade-out");
      $('.navbar').removeClass("navbar-sm").addClass("navbar-lg");
       $(".mod-flex").removeClass("shrink-container");
    }
  }
});

$('.navbar').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
  function (e) {
    if ($('.navbar-brand').hasClass("byname-lg")) {
      $('.byname').html('Dream... Design... Create... your inspirations with impulso<br><br><span class="logo-font">EL ADORNO</span>');
    } else {
      $('.byname').html('<span class="logo-font">EL ADORNO</span> Dream... Design... Create... your inspirations with impulso');
    }
    $('.navbar-brand').removeClass("fade-out");
    $('.navbar-brand').addClass("fade-in");
  });