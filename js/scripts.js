(function(){
  /* navigation fixing with scroll*/
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 750;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar').addClass('fixed');
      $('.burger-nav').addClass('fixed');
    }
    else {
      $('.navbar').removeClass('fixed');
      $('.burger-nav').removeClass('fixed');
    }
  });

  /* scroll to section*/
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }
  });

  /* burger nav */
  $(".burger").on("click", function(){
    $("nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("open");
  });

})();