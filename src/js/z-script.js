jQuery(document).ready(function($){

  /* header раскрытие списка городов */
  $('.city__name').click(function(e) {
      e.preventDefault();
      $(this).closest('.city__name-wrapper').find('.city__dropdown').toggle();
      $(this).addClass('city__name--active');
  });
  $('.city__dropdown').mouseleave(function(){
      $(this).fadeOut();
      $(this).closest('.city__name-wrapper').find('.city__name').removeClass('city__name--active');
  });

  var headerCoords=[$('.header__map').data('lat'), $('.header__map').data('lng')];
  console.log(headerCoords);
  /* изменение названия, телефона и почты при выборе города */
  $('.city__link').on('click', function(){
      headerCoords = [$(this).data('lat'), $(this).data('lng')];

      $(this).closest('.city__name-wrapper').find('.city__name').html($(this).html());
      $('.footer-contacts__name').html($(this).html());

      $(this).closest('.city').find('.city__address').html($(this).data("address"));
      $('.footer-contacts__address').html($(this).data("address"));

      $(this).closest('.city').find('.city__email-wrapper')
          .html('<a target="_blank" class="city__email" href="mailto:'+$(this).data("email")+'">'+$(this).data("email")+'</a>');
      $('.footer-contacts__email-wrapper')
          .html('<a target="_blank" class="footer-contacts__email" href="mailto:'+$(this).data("email")+'">'+$(this).data("email")+'</a>');

      $(this).closest('.city').find('.city__tel-wrapper')
          .html('<a target="_blank" class="city__tel" href="tel:'+$(this).data("tel0")+'">'+$(this).data("tel0")+'</a>');
      $('.footer-contacts__tel-wrapper')
          .html('<a target="_blank" class="footer-contacts__tel" href="tel:'+$(this).data("tel0")+'">'+$(this).data("tel0")+'</a>');

      if ($(this).data("tel1") !== undefined) {
          $(this).closest('.city').find('.city__tel-wrapper')
            .append(', <a target="_blank" class="city__tel" href="tel:'+$(this).data("tel1")+'">'+$(this).data("tel1")+'</a>');
          $('.footer-contacts__tel-wrapper')
            .append(', <a target="_blank" class="footer-contacts__tel" href="tel:'+$(this).data("tel1")+'">'+$(this).data("tel1")+'</a>');
      }
      $('.city__dropdown').hide();
      $(this).closest('.city__name-wrapper').find('.city__name').removeClass('city__name--active');
      return false;
  });

  /* menu search */
  $('.nav .menu-item--search a').click(function(e) {
      e.preventDefault();
      $(this).closest('.header__nav').find('.search').show();
  });
  $('.search__bg').click(function() {
      $(this).closest('.search').fadeOut();
  });

  /* галерея banners */
  $('.banner-gallery').slick({
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });




  function initSlider() {
    /* галерея clients */
    $('.clients__gallery').slick({
      infinite: true,
      dots: false,
      arrows: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '15px',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  function cssSlider() {
    $('.clients__gallery .slick-slide').css({'margin': '20px 0 20px', 'z-index': 0, 'left': 0, 'right': 0 });
    $('.clients__gallery .slick-slide').find('.clients__logo').css({'padding': '0', 'margin-left': '0'});

    $('.clients__gallery .slick-current').css({'margin': '0 0 0', 'z-index': 3, 'left': 0, 'right': 0 });
    $('.clients__gallery .slick-current').find('.clients__logo').css({'padding': '20px', 'margin-left': '-20px'});

    $('.clients__gallery .slick-current').prev().css({'margin': '10px 0 10px', 'z-index': 2, 'left': 0, 'right': 0});
    $('.clients__gallery .slick-current').prev().find('.clients__logo').css({'padding': '10px', 'margin-left': '-10px'});
    $('.clients__gallery .slick-current').next().css({'margin': '10px 0 10px', 'z-index': 2, 'left': 0, 'right': 0});
    $('.clients__gallery .slick-current').next().find('.clients__logo').css({'padding': '10px', 'margin-left': '-10px'});

    $('.clients__gallery .slick-current').prev().prev().prev().css({'right': '30px', 'left': 'auto'});
    $('.clients__gallery .slick-current').next().next().next().css({'left': '30px', 'right': 'auto'});
  }
  function allSlider(){
    initSlider();
    cssSlider();
  }

  allSlider();

  $('.slick-arrow').click(function() {
    cssSlider();
  });

  /* табы в advantages */
  $('.choise-link').click(function(e) {
      e.preventDefault();
      $(this).closest('.advantages__list').find('.advantages__item').removeClass('advantages__item--active');
      $(this).closest('.advantages__item').addClass('advantages__item--active');

      $(this).closest('.advantages__banner').find('.advantages__img').hide();
      $( $(this.hash) ).show();
  });

  /* галерея news */
  $('.other-news__gallery').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  /* Gratitude letter in the modal window */
  $('.gratitude__img').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.gratitude__img')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });

  /* submenu в services */
  $('.services__list > .menu-item').mouseenter(function(e) {
      e.preventDefault();
      $(this).children('.sub-menu').slideDown();
  });
  $('.services__list > .menu-item').mouseleave(function(e) {
      e.preventDefault();
      $(this).children('.sub-menu').slideUp();
  });

  /* scrollbar */
    // (function($){
    //     $(window).on("load",function(){
    //         $(".reglaments__text").mCustomScrollbar();
    //     });
    // })(jQuery);


  // /* Form in modal window */
  // $('*[data-form]').click( function(e){
  //   e.preventDefault();
  //   var suffix = $(this).data('form');
  //   $('body').css({'overflow':'hidden'});
  //   $('.overlay').show();
  //   var formClass = '.form--' + suffix;
  //   $('.overlay').find(formClass).fadeIn();
  // });
  // /* Close modal window */
  // $('.overlay__bg, .overlay__close').click( function(e){
  //   e.preventDefault();
  //   $('body').css({'overflow':'auto'});
  //   $(this).closest('.overlay').find('.form').fadeOut();
  //   $(this).closest('.overlay').fadeOut(400);
  // });

  // $('.hamburger').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.header').find('.nav__list').toggle();
  // });
  // $(window).resize(function(){
  //   if ($(window).width() > 768) {
  //     $('.nav__list').show();
  //   } else {
  //     $('.nav__list').hide();
  //   }
  // });


  /* wordpress */
    jQuery(".recaptcha").data("capsize", "normal");
    jQuery(".nav .menu-item--services > a").attr("href", "javascript:void(0);");
    jQuery(".mcc-form-textarea").attr("rows", 1);
    jQuery(".reviews textarea.mcc-text").attr("rows", 5);

    jQuery("<span class='mcc-new-text'>Желаемое время звонка</span>").prependTo("#mcc_time_block");

    /* mcc recaptcha */
    // jQuery('.sidebar .recaptcha').data('capsize','normal')

    /* mcc forms - placeholders */
    var myForm = jQuery('.banner-form, .footer-form, .sidebar-form');
    myForm.find('.mcc-form input').each(function() {
      var e = jQuery(this);
      var text = e.closest('.mcc-value').prev('.mcc-label').find('div').text();
      text = text.replace(/\s+/g,' ');
      e.attr('placeholder',text);
      e.closest('.mcc-value').prev('.mcc-label').hide();
    });
    /* end for wordpress */


    function initMap(block) {
      /* Map */
      $(block).each(function (index, Element) {
        var coordLat = $(this).data('lat');
        var coordLng = $(this).data('lng');
        var map = new GMaps({
          el: Element,
          lat: coordLat,
          lng: coordLng,
          scrollwheel: false
        });
        map.drawOverlay({
          lat: coordLat,
          lng: coordLng,
          content: '<div class="pin"></div>'
        });
      });
    }
    initMap($('.map__frame'));
    initMap($('#contacts-map'));
    // initMap($('.header__map'));

    /* page-contacts - города */
    $('.contacts__item').click(function(e) {
        e.preventDefault();
        $(this).closest('.contacts__list').find('.contacts__item').removeClass('contacts__item--active');
        $(this).addClass('contacts__item--active');
        /* Map */
        var coordLat = $(this).data('lat');
        var coordLng = $(this).data('lng');
        $('#contacts-map').each(function (index, Element) {
          var map = new GMaps({
            el: Element,
            lat: coordLat,
            lng: coordLng,
            scrollwheel: false
          });
          map.drawOverlay({
            lat: coordLat,
            lng: coordLng,
            content: '<div class="pin"></div>'
          });
        });
    });

    /* header - btn - map */
    $('.btn--white').click(function(e) {
        e.preventDefault();
        $(this).closest('.header__btn').find('.header__map').show();
        /* Map */
        var coordLat = headerCoords[0];
        var coordLng = headerCoords[1];

        // initMap($('.header__map'));
        $('.header__map').each(function (index, Element) {
          var map = new GMaps({
            el: Element,
            lat: coordLat,
            lng: coordLng,
            scrollwheel: false
          });
          map.drawOverlay({
            lat: coordLat,
            lng: coordLng,
            content: '<div class="pin pin--small"></div>'
          });
        });
    });

    $(document).mouseup(function (e){
      var div = $(".header__map");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.hide();
      }
    });





    /* Sticky and absolute form in sidebar */
    if ($('.sidebar') != null) {
      var sidebarForm = $('.sidebar');
      var sidebarFormTop = sidebarForm.offset().top;
      var sidebarFormLeft = sidebarForm.offset().left;
      var sidebarFormWidth = sidebarForm.width();
      var sidebarFormOuterHeight = sidebarForm.outerHeight(true);

      var sidebarColumn = sidebarForm.parent();
      var sidebarColumnBottom = sidebarFormTop + sidebarColumn.outerHeight(true);

      var sidebarFormAbsolute = sidebarColumnBottom - sidebarFormOuterHeight;

      // console.log(sidebarFormTop);
      // console.log(sidebarColumn);
      // console.log(sidebarColumn[0].clientHeight);
      // console.log(sidebarColumn.outerHeight(true));
      // console.log(sidebarColumnBottom);

      if ($(window).width() > 1024) {
        if (sidebarForm.outerHeight(true) < sidebarColumn.outerHeight(true)) {
          $(window).scroll(function () {
            if ($(this).scrollTop() >= sidebarFormAbsolute /* - 27 */ ) {
              $(sidebarForm).removeClass('sidebar--sticky');
              $(sidebarForm).addClass('sidebar--absolute');
              $(sidebarForm).css({"width":sidebarFormWidth, "left":"15px"});
            } else if ($(this).scrollTop() >= sidebarFormTop ) {
              $(sidebarForm).removeClass('sidebar--static sidebar--absolute');
              $(sidebarForm).addClass('sidebar--sticky');
              $(sidebarForm).css({"width":sidebarFormWidth, "left":sidebarFormLeft});
            } else {
              $(sidebarForm).removeClass('sidebar--sticky');
              $(sidebarForm).addClass('sidebar--static');
            }
          });
        }
      }
    }



});

