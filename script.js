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

// Menu 2 Animation 
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

// Menu 3 Animation 
function thirdMenuOperation(isOpen) {
  if(isOpen) {
    $('.js-menu-3').addClass('active');
    setTimeout(function() {
      $('.js-menu-3').find('li').each(function(index, item) {
        setTimeout(function() {
          $(item).addClass('animated').removeClass('flipOutX').addClass('flipInX');
        }, 200*index);
      });
    }, 500);
  }else {
    $('.js-menu-3').find('li').each(function(index, item) {
      setTimeout(function() {
        $(item).addClass('flipOutX');
      }, 100*index);
    });
    setTimeout(function() {
      $('.js-menu-3').removeClass('active');
    }, 1000);
  }
}

$('.js-hamburger-3').on('click', function(event) {
  event.stopPropagation();
  thirdMenuOperation(true);
});

$('.js-menu-3').find('a').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  thirdMenuOperation(false);
});

$('.js-close-menu').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  thirdMenuOperation(false);
});

// Menu 4 Animation
$('.js-hamburger-4').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  $(event.currentTarget).toggleClass('active');
  $('.js-menu-4-bg').toggleClass('active');
  $('.js-menu-4').toggleClass('active');

  $('.js-menu-4').find('a').on('click', function() {
    event.stopPropagation();
    event.preventDefault();
    $('.js-hamburger-4').removeClass('active');
    $('.js-menu-4-bg').removeClass('active');
    $('.js-menu-4').removeClass('active');
  })
});

// Menu 5 Animation
$('.js-hamburger-5').on('click', function(event) {
  event.stopPropagation();
  event.preventDefault();
  $('.js-menu-5').toggleClass('active');
});