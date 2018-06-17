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

  $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('nav-link-active');
      })
      $(this).addClass('nav-link-active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 18
      }, 1500, function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });

  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar a[href^="#"]').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('navbar ul li a').removeClass("nav-link-active");
        currLink.addClass("nav-link-active");
      }
      else{
        currLink.removeClass("nav-link-active");
      }
    });
  }

  //2nd way to scroll to section
  // $('a[href^="#"]').on('click', function(event) {
  //   var sections = $(".section")

  //   // $(this).addClass("nav-link-active");

  //   var target = $(this.getAttribute('href'));
  //   var that = $(this);
  //   var targetId = that.attr("href");

  //   if( target.length ) {
  //     event.preventDefault();
  //     $('html, body').stop().animate({
  //       scrollTop: target.offset().top - 70
  //     }, 1500);
  //     var target = $(targetId);

  //     sections.filter("nav-link-active").removeClass("nav-link-active");

  //     var link = $("nav.navbar").find("a[href='" + targetId + "']");

  //     link.parent().siblings(".nav-link-active").removeClass("nav-link-active");
  //     link.parent().addClass("nav-link-active");
  //   }
  // });

  /* burger nav */
  $(".burger").on("click", function(){
    $("nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("open");
  });

})();
