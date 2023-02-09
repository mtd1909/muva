//Preloader 
$(window).on('load', function(event) {
  $('.pre__loader').delay(500).fadeOut(500);
});

// Sticky header
let header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

// Search area
$('.header__search').on('click', function() {
  $('.search-area').toggleClass('open');
  $('.body__overlay').toggleClass('open');
});

$('.body__overlay').on('click', function() {
$('.search-area').removeClass('open');
$('.body__overlay').removeClass('open');
});  

// Click hien menu
$('.menu__bars').click(function(e) {
  e.stopPropagation();
  e.stopImmediatePropagation();
  $('.header__menu').toggleClass('show__menu');
  $('.overlay_container').toggleClass('menu_bars_overlay');
})

$('.overlay_container').click(function() {
  $('.header__menu').removeClass('show__menu');
  $('.overlay_container').removeClass('menu_bars_overlay');
})  

//Back To top
function BackToTop() {
  $('.back-to-top').on('click', function () {
      $('html, body').animate({
          scrollTop: 0
      }, 100);
      return false;
  });

  $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 600) {
          $('.back-to-top').fadeIn();
          $('.back-to-top').addClass('open');
      } else {
          $('.back-to-top').fadeOut();
          $('.back-to-top').removeClass('open');
      }
  });
}
BackToTop();
