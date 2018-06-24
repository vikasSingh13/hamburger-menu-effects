$(document).ready(function() {
  $('.js-header-wrap').find('a').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    let currentHREF = $(event.currentTarget).attr('href');
    $('.js-header-wrap').find('a').removeClass('active');
    $(event.currentTarget).addClass('active');
    $('body, html').animate({
      scrollTop: $(currentHREF).offset().top - 50
    }, 1000); 
  });
});

// Menu 1 Animation 
$('.js-hamburger-1').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  if(!$(event.currentTarget).hasClass('js-cross')) {
    $(event.currentTarget).addClass('lightSpeedOut');
    setTimeout(function() {
      $('.js-menu-1').css({'z-index': '1', 'opacity': 1});
      $('.js-menu-1').removeClass('flipOutY').addClass('flipInY');
    }, 500);

    setTimeout(function() {
      $(event.currentTarget).removeClass('lightSpeedOut');
      $(event.currentTarget).addClass('make-cross js-cross lightSpeedIn');
    }, 1000);
  }else {
    $(event.currentTarget).addClass('lightSpeedOut');
    $('.js-menu-1').removeClass('flipInY').addClass('flipOutY');

    setTimeout(function() {
      $(event.currentTarget).removeClass('make-cross js-cross lightSpeedOut');
      $(event.currentTarget).addClass('lightSpeedIn');
      $('.js-menu-1').css({'z-index': '-1', 'opacity': 0});
    }, 500);
  }
});
