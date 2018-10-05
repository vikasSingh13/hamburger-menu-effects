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

// Menu 1 Animation 
var secondMenuLength = $('.js-menu-2').find('li').length;
$('.js-menu-2').find('li').css('width', (100 / secondMenuLength)+'%');
$('.js-menu-2').find('li').css('right', -(100 / secondMenuLength)+'%');

var outerLiWidth = $('.js-menu-2').find('li').outerWidth();

$('.js-hamburger-2').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  if(!$(event.currentTarget).hasClass('js-cross')) {
    $(event.currentTarget).addClass('lightSpeedOut');
    setTimeout(function() {
      $(event.currentTarget).removeClass('lightSpeedOut');
      $(event.currentTarget).addClass('make-cross js-cross lightSpeedIn');
    }, 1000);

    var rightPos = 0;
    for(var i = secondMenuLength; i > 0; i--) {
      rightPos = (outerLiWidth) * (secondMenuLength - i);
      $('.js-inner-menu-'+i).css({'right': rightPos, 'opacity': '1'});
    }

  }else {
    $(event.currentTarget).addClass('lightSpeedOut');
    setTimeout(function() {
      $(event.currentTarget).removeClass('make-cross js-cross lightSpeedOut');
      $(event.currentTarget).addClass('lightSpeedIn');
    }, 500);

    for(var i = 1; i <= secondMenuLength; i++) {
      $('.js-inner-menu-'+i).css({'right': '-20%', 'opacity': '0'});
    }
  }
});

$('.js-menu-2').find('li').find('a').on('click', function() {
  $('.js-hamburger-2').addClass('lightSpeedOut');
    setTimeout(function() {
      $('.js-hamburger-2').removeClass('make-cross js-cross lightSpeedOut');
      $('.js-hamburger-2').addClass('lightSpeedIn');
  }, 500);
    
  for(var i = 1; i <= secondMenuLength; i++) {
    $('.js-inner-menu-'+i).css({'right': '-20%', 'opacity': '0'});
  }
});