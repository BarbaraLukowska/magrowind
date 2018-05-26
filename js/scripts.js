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
    var sections = $(".section")

    // $(this).addClass("nav-link-active");

    var target = $(this.getAttribute('href'));
    var that = $(this);
    var targetId = that.attr("href");

    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70
      }, 1500);
      var target = $(targetId);

      sections.filter("nav-link-active").removeClass("nav-link-active");

      var link = $("nav.navbar").find("a[href='" + targetId + "']");

      link.parent().siblings(".nav-link-active").removeClass("nav-link-active");
      link.parent().addClass("nav-link-active");
    }
  });

  /* burger nav */
  $(".burger").on("click", function(){
    $("nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("open");
  });

})();