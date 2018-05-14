(function(){
  /* navigation fixing with scroll*/
  $(window).bind('scroll', function() {
  var navHeight = $( window ).height() - 750;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar').addClass('fixed');
    }
    else {
      $('.navbar').removeClass('fixed');
    }
  });

  /* scroll to section*/
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 72
      }, 1500);
    }
  });

})();