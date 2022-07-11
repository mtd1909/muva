// Introduction Slide
$(document).ready(function() {
  $('.intro__content').owlCarousel({
    items: 4,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    responsive: {
      1399: {
        items: 4,
      },
      991: {
        items: 3,
      },
      767: {
        items: 2,
      },
      300: {
        items: 1,
      }
    }
  })
})

//Aos 
AOS.init({
  duration: 1500,
})

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
// Filter 
$('.main__store-list').on( 'click', 'a', function() {
  var filter = $(this).attr('data-filter');
  
  $('.mySwiper .swiper-slide').css('display', 'none')
  $('.mySwiper .swiper-slide' + filter).css('display', '')
  $( '.store__list-items a' ).removeClass( 'filter-active' );
  $( this ).addClass( 'filter-active' );
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateProgress();
  swiper.updateSlidesClasses();
  swiper.slideTo(0);
  swiper.scrollbar.updateSize();
  return false;
});
// Store Slide 
var swiper = new Swiper ('.mySwiper', {
  observer: true,
  spaceBetween: 20,
  runCallbacksOnInit: true,
  observer: true,
  smartSpeed:5000,
  speed: 4000,
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2.5,
      },
      992: {
          slidesPerView: 3.2,
      },
      1200: {
          slidesPerView: 3.8,
      },
      1400: {
          slidesPerView: 4.2,
      },
      1600: {
          slidesPerView: 4.5,
      }
  },
  spaceBetween: 30,
  navigation: {
      nextEl: '.product-filter-next',
      prevEl: '.product-filter-prev',
  },
  scrollbarHide:false,
  updateOnImagesReady: true
})

//Count Down
$('[data-countdown]').each(function () {
  var $this = $(this),
    finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function (event) {
    $this.html(event.strftime('<div class="cdown day"><span class="time-count">%-D</span> <p>Days</p></div> <div class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></div> <div class="cdown minutes"><span class="time-count">%M</span> <p>mins</p></div> <div class="cdown second"><span class="time-count">%S</span> <p>secs</p></div>'));
  });
});

// Offer Slide
$(".main__offer-right").owlCarousel({
  nav: false,
  dots: true,
  loop: true,
  margin: 30,
  items: 1,
  thumbs: false,
  smartSpeed: 1300,
  autoplay: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsiveClass: true,
  autoHeight: true,
});

//Counter 
$('.odometer').appear(function () {
  var odo = $('.odometer');
  odo.each(function () {
      var countNumber = $(this).attr('data-count');
      $(this).html(countNumber);
  });
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
