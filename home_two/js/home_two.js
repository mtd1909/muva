$(document).ready(function() {
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

// Sticky header
let header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

//Aos 
AOS.init({
  duration: 1500,
})

//Preloader 
$(window).on('load', function(event) {
  $('.pre__loader').delay(500).fadeOut(500);
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

// Banner Slide 
 $(".wrap__banner-slide").owlCarousel({
  // dots: true,
  loop: true,
  items: 1,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  autoplayTimeout: 4000,
  autoHeight: true,
});

//categories
$(".wrap__categories").owlCarousel({
  dots: false,
  nav: true,
  loop: true,
  margin: 25,
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
      },
      1400: {
          items: 4,
      }
  }
});

//Counter 
$('.odometer').appear(function () {
  var odo = $('.odometer');
  odo.each(function () {
      var countNumber = $(this).attr('data-count');
      $(this).html(countNumber);
  });
});

//Store
$(".wrap__store-box").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  margin: 25,
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
          items: 1.1,
      },
      1200: {
          items: 1.5,
      },
      1400: {
          items: 1.8,
      }
  }
});

//Team Slider
$(".team__slider").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
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

//Blog Slider
$(".blog__wrap").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  margin: 25,
  items: 1,
  smartSpeed: 1300,
  autoplay: false,
  autoplayTimeout: 4000,
  autoHeight: true,
  responsive: {
      0: {
          items: 1,
      },
      768: {
          items: 1,
      },
      992: {
          items: 2,
      },
      1200: {
          items: 2,
      }
  }
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

})