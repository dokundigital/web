(function ($) {
  'use strict';

  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });
  
  // Accordions
  $('.collapse').on('shown.bs.collapse', function () {
    $(this).parent().find('.ti-angle-right').removeClass('ti-angle-right').addClass('ti-angle-down');
  }).on('hidden.bs.collapse', function () {
    $(this).parent().find('.ti-angle-down').removeClass('ti-angle-down').addClass('ti-angle-right');
  });

  window.onscroll = function () { myFunction() };
const bgScroll = document.getElementById("navbarAtas");
function myFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        bgScroll.classList.add("bg-nav-scroll");
    } else {
        bgScroll.classList.remove("bg-nav-scroll");
    }
}

	//slider
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});

})(jQuery);