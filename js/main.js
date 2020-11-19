(function ($) {

  // USE STRICT
  "use strict";

// ==================================================================
//                       Scrolling Effect
// ==================================================================

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body, nav').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// ==================================================================
//                      Type Writing EFFECT
// ==================================================================
var typed = new Typed('.typed-text', {
  strings: ['cell phones', 'tablets', 'fast', 'delicately'
  ],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});

// ==================================================================
//                       Review Section Slider
// ==================================================================
$(document).ready(() => {
  $('#review-section .container .review-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    dots: true,
  });
});


// ==================================================================
//                       Store Schedule Tabs
// ==================================================================



})(jQuery);
