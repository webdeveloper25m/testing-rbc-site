// Preloader js
$(window).on('load', function () {
  $('.preloader').fadeOut(100);
});

(function ($) {
  ('use strict');

  // Sticky Menu
  // $(window).scroll(function () {
  //   if ($('.header').offset().top > 40) {
  //     $('.header').addClass('header-bg');
  //   } else {
  //     $('.header').removeClass('header-bg');
  //   }
  // });

  // Background-images
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')',
    });
  });

  // background color
  $('[data-color]').each(function () {
    $(this).css({
      'background-color': $(this).data('color'),
    });
  });

  // progress bar
  $('[data-progress]').each(function () {
    $(this).css({
      bottom: $(this).data('progress'),
    });
  });

  // /* ########################################### /hero parallax ############################################## */

  var scene = document.getElementById('parallax');
  if (scene) var parallaxInstance = new Parallax(scene);

  // Initiate the wowjs animation library
  new WOW().init();

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1500,
      'easeInOutExpo'
    );
    return false;
  });

  $('.sidebar-collapse').click(function () {
    if ($('#sidebar').hasClass('sidebar-close')) {
      $('.sidebar').addClass('sidebar-open');
      $('.sidebar').removeClass('sidebar-close');
    } else {
      $('.sidebar').toggleClass('sidebar-collapsed');
    }
  });

  $('.sidebar__close').click(function () {
    $('.sidebar').addClass('sidebar-close');
    $('.sidebar').removeClass('sidebar-open');
  });

  //hero-slider
  $('.js-hero-slider').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    fade: false,
    arrows: true,
    prevArrow:
      "<button type='button' class='carousel__prev'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
      "<button type='button' class='carousel__next'><i class='fas fa-chevron-right'></i></button>",
    autoplay: true,
    accessibility: true,
  });

  // timeline-slider
  $('.js-timeline-slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    arrows: true,
    prevArrow:
      "<button type='button' class='timeline__prev'><i class='fas fa-chevron-up'></i></button>",
    nextArrow:
      "<button type='button' class='timeline__next'><i class='fas fa-chevron-down'></i></button>",
    autoplay: false,
    vertical: true,
  });

  // clients logo slider
  $('.client-logo-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1,
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }
})(jQuery);

// Collapsed Sidebar (min-width:992px) and (max-width: 1199px)
$(function () {
  'use strict';

  var mql = window.matchMedia('(min-width:768px) and (max-width: 1199px)');
  var mql_hide = window.matchMedia('(max-width: 767px)');

  function doMinimize(e) {
    if (e.matches) {
      $('.sidebar').addClass('sidebar-collapsed');
    } else {
      $('.sidebar').removeClass('sidebar-collapsed');
    }
  }

   function doHide(e) {
     if (e.matches) {
       $('.sidebar').addClass('sidebar-close');
     } else {
       $('.sidebar').removeClass('sidebar-close');
     }
   }

  mql.addListener(doMinimize);
  mql_hide.addListener(doHide);
  doMinimize(mql);
  doHide(mql_hide);
});



function myFunction() {
    var input, filter, cards, cardContainer, h5, title, i , author,journal;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        author = cards[i].querySelector(".card__publications-icons span");
        journal= cards[i].querySelector(".card-footer .card__publications-icons span");
        if (title.innerText.toUpperCase().indexOf(filter) > -1 ) {
            cards[i].style.display = "";
        } 
       else if (author.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } 
        /*else if (journal.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
          }*/ 
          else {
            cards[i].style.display = "none";
        }
      }
    }

$(".sort").click(function () {
  $(this).toggleClass("down");

  var li = $('#myItems .years');
  var list=$('#myItems .year');
  li.sort(function(a, b) {
    if(parseInt($(a).text()) > parseInt($(b).text()))
        return 1;
    else return -1;
  });
  $('#myItems').empty().html(li);
  list.sort(function(a, b) {
    if(parseInt($(a).text()) > parseInt($(b).text()))
        return 1;
    else return -1;
  });
  $('#myItems').empty().html(list);
 })

  /*$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });*/
