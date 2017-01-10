$(document).ready(function(){

  //even height for homepage sections
  if ($(window).width() >= 700) {
    EvenHeightHelper.makeEvenHeight('.homepage-sections');
  }
  EvenHeightHelper.makeEvenHeight('.contact__wrapper');

  //initiate wowjs
  new WOW().init();

  //thumbnail flip animation
  $('.hover').hover(function () {
    $(this).addClass('flip');
  }, function () {
    $(this).removeClass('flip');
  });

  //Quick scroll down homepage
  $('a[href^="#information"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  $('a[href^="#tips"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  //Scroll to top button
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn();

    } else {
      $('.scrollToTop').fadeOut();

    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

});