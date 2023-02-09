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
  $('.header__menu').toggleClass('show__menu');
  $('.overlay_container').toggleClass('menu_bars_overlay');
  e.stopPropagation();
  e.stopImmediatePropagation();
})

$('.overlay_container').click(function() {
  $('.header__menu').removeClass('show__menu');
  $('.overlay_container').removeClass('menu_bars_overlay');
})  


//Progressbar
$(window).scroll(function () {   
  $('.progress__bar').each(function () {
      $(this).find('.progress__content').animate({
          width: $(this).attr('data-percentage')
      }, 2000);

      $(this).find('.progress__number-mark').animate({ left: $(this).attr('data-percentage') }, {
          duration: 2000,
          step: function (now, fx) {
              var data = Math.round(now);
              $(this).find('.percent').html(data + '%');
          }
      });
  });
});

//Counter 
$('.odometer').appear(function () {
  var odo = $('.odometer');
  odo.each(function () {
      var countNumber = $(this).attr('data-count');
      $(this).html(countNumber);
  });
});

//Team Slider
$(".team__slider").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  margin: 15,
  items: 1,
  smartSpeed: 1300,
  autoplayTimeout: 4000,
  autoHeight: true,
  responsive: {
    0: {
        items: 1,
    },
    768: {
        items: 2,
    },
    992: {
        items: 3,
    },
    1200: {
        items: 3,
    }
  }
});

// Testimonials Slide 
$(".testimonials__content").owlCarousel({
  nav: false,
  dots:true,
  loop: true,
  margin: 20,
  items: 1,
  thumbs: false,
  smartSpeed: 1300,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  autoHeight: true,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 2,
      },
      1200: {
          items: 2,
      }
  }
});

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