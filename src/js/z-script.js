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
  /* изменение названия, телефона и почты при выборе города */
  $('.city__link').on('click', function(){
      $(this).closest('.city__name-wrapper').find('.city__name').html($(this).html());

      $(this).closest('.city').find('.city__email-wrapper')
          .html('<a target="_blank" class="city__email" href="mailto:'+$(this).data("email")+'">'+$(this).data("email")+'</a>');

      $(this).closest('.city').find('.city__address').html($(this).data("address"));

      $(this).closest('.city').find('.city__tel-wrapper')
          .html('<a target="_blank" class="city__tel" href="tel:'+$(this).data("tel0")+'">'+$(this).data("tel0")+'</a>');

      if ($(this).data("tel1") !== undefined) {
          $(this).closest('.nav-sec').find('.mob').append(', <a target="_blank" href="tel:'+$(this).data("tel1")+'">'+$(this).data("tel1")+'</a>');
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
      centerPadding: '15px'
    });
  }

  function cssSlider() {

    $('.slick-slide').css({'margin': '20px 0 40px', 'z-index': 0, 'left': 0, 'right': 0 });
    $('.slick-slide').find('.clients__logo').css({'padding': '0', 'margin-left': '0'});

    $('.slick-current').css({'margin': '0 0 40px', 'z-index': 3, 'left': 0, 'right': 0 });
    $('.slick-current').find('.clients__logo').css({'padding': '20px', 'margin-left': '-20px'});

    $('.slick-current').prev().css({'margin': '10px 0 40px', 'z-index': 2, 'left': 0, 'right': 0});
    $('.slick-current').prev().find('.clients__logo').css({'padding': '10px', 'margin-left': '-10px'});
    $('.slick-current').next().css({'margin': '10px 0 40px', 'z-index': 2, 'left': 0, 'right': 0});
    $('.slick-current').next().find('.clients__logo').css({'padding': '10px', 'margin-left': '-10px'});

    $('.slick-current').prev().prev().prev().css({'right': '30px', 'left': 'auto'});
    $('.slick-current').next().next().next().css({'left': '30px', 'right': 'auto'});
  }
  function allSlider(){
    initSlider();
    cssSlider();
  }

  allSlider();

  $('.slick-arrow').click(function() {
    cssSlider();
  });



  // /* табы в услугах */
  // $('.services__link').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.services__switcher').find('.services__link').removeClass('services__link--active');
  //     $(this).addClass('services__link--active');
  //     $(this).closest('.services').find('.services-type').hide();
  //     $( $(this.hash) ).show();
  // });

  // /* галерея "партнеры" */
  // $('.clients-section__gallery').slick({
  //   infinite: true,
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0',
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });

  // /* галерея "отзывы" */
  // $('.reviews-section__gallery #mcc_comments_rows_block').slick({
  //   infinite: true,
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   centerMode: true,
  //   centerPadding: '0'
  // });

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


  // $('.team__link').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.team').find('.team__manager').show();
  //     $(this).hide();
  // });
  // $('.reviews__link').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.reviews').find('.reviews__block').show();
  //     $(this).hide();
  // });
  // $('.clients__link').click(function(e) {
  //     e.preventDefault();
  //     $(this).closest('.clients').find('.clients__item').show();
  //     $(this).hide();
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

    jQuery(".mcc-form-textarea").attr("rows", 1);
    jQuery(".reviews textarea.mcc-text").attr("rows", 5);

    /* mcc recaptcha */
    // jQuery('.sidebar .recaptcha').data('capsize','normal')

    /* mcc forms - placeholders */
    /* application */
    jQuery('.banner-form .mcc-form input').each(function() {
      var e = jQuery(this);
      var text = e.closest('.mcc-value').prev('.mcc-label').find('div').text();
      text = text.replace(/\s+/g,' ');
      e.attr('placeholder',text);
      e.closest('.mcc-value').prev('.mcc-label').hide();
    });
    /* forms */
    var myForm = jQuery('.form--review, .form-question-section');
    myForm.find('.mcc-form input, .mcc-form textarea').each(function() {
      var e = jQuery(this);
      var text = e.closest('tr').find('.mcc-label').text();
      text = text.replace(/\s+/g,' ');
      e.attr('placeholder',text);
      myForm.find('table tr').find('td:first').hide();
    });
    /* end for wordpress */



  /* end for wordpress */






    // /* Map */
    // var map = new GMaps({
    //     el: '.map__inner',
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     scrollwheel: false
    // });
    // map.drawOverlay({
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     content: '<div class="pin"></div>'
    // });


    //  /* Map - page contacts */
    // var map = new GMaps({
    //     el: '.contacts__map',
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     scrollwheel: false
    // });
    // map.drawOverlay({
    //     lat: 59.971198,
    //     lng: 30.315121,
    //     content: '<div class="pin"></div>'
    // });



});

