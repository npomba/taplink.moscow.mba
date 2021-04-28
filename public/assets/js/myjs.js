$(document).ready(function () {
  /*Табы программ в шапке*/
  $('.header-podmenu-tabs a').mouseenter(function () {
    var $searchId = $($(this).data('tab'))
    $('.header-podmenu-tabs a').not($(this)).removeClass('active-tab')
    $(this).addClass('active-tab')
    $('.header-podmenu-content').not($searchId).css('display', 'none')
    $searchId.css('display', 'flex')
  })

  /*работа подменю в десктопе*/
  $('.header-podmenu-toggle').click(function () {
    $(this).toggleClass('opened')
    $('.header-podmenu').fadeToggle(300)
    $('.header-overlay').fadeToggle(300)
  })

  $(document).mouseup(function (e) {
    var container = $('header')
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.header-podmenu').fadeOut(300)
      $('.header-overlay').fadeOut(300)
      $('.header-podmenu-toggle').removeClass('opened')
    }
  })

  $(
    '.header-overlay, .header-podmenu-content .program-directions-list a, .header-podmenu-premium a'
  ).click(function () {
    $('.header-podmenu').fadeOut(300)
    $('.header-overlay').fadeOut(300)
    $('.header-podmenu-toggle').removeClass('opened')
  })

  /*Табы программ*/
  $('.program-options-tabs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).data('tab'))
    $('.program-options-tabs a').not($(this)).removeClass('active-tab')
    $(this).addClass('active-tab')
    $('.program-options-section')
      .find('.program-tabs-content')
      .not($searchId)
      .css('display', 'none')
    $searchId.css('display', 'block')
  })

  /*Табы программ внутренние*/
  $('.program-options-block-tabs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).attr('href'))
    $(this)
      .parents('.program-options-block-tabs')
      .find('a')
      .not($(this))
      .removeClass('active')
    $(this).addClass('active')
    $(this)
      .parents('.program-tabs-content')
      .find('.program-options-block')
      .not($searchId)
      .css('display', 'none')
    $searchId.css('display', 'block')
  })

  /*работа подменю в мобилке*/
  $('.header-buter').click(function () {
    $(this).toggleClass('opened')
    $('html').toggleClass('non-overflow')
    $('.header-mobile-podmenu').slideToggle(300, function () {
      $('.js-header-mobile').removeClass('opened')
    })
  })

  $('.mobile-second-toggle').click(function (e) {
    e.preventDefault()
    $('.header-mobile-second').addClass('opened')
  })

  $('.mobile-lang-toggle').click(function (e) {
    e.preventDefault()
    $('.header-mobile-lang').addClass('opened')
  })

  $('.menu-back-link').click(function () {
    $(this).closest('.js-header-mobile').removeClass('opened')
  })

  $('.mobile-third-toggle').click(function (e) {
    e.preventDefault()
    $(this).siblings('.header-mobile-third').addClass('opened')
  })

  /*Табы цен программ для мобилки*/
  $('.program-price-tabs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).attr('href'))
    $('.program-price-tabs a').not($(this)).removeClass('active')
    $(this).addClass('active')
    $('.program-price-block').not($searchId).css('display', 'none')
    $searchId.css('display', 'block')
  })

  /*Табы шагов для мобилки*/
  $('.process-step-tabs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).attr('href'))
    $('.process-step-tabs a').not($(this)).removeClass('active')
    $(this).addClass('active')
    $('.process-step-block').not($searchId).css('display', 'none')
    $searchId.css('display', 'block')
  })

  /*открытие модулей для мобилки*/
  $('.training-modul').click(function () {
    $(this).toggleClass('opened')
    $(this).next('.training-content').slideToggle(300)
  })
})

var widthScreen = $(window).width()

// Слайдер програм для мобилки
if ($('.mini-programs-slider').length) {
  var $carousel = $('.mini-programs-slider')

  function showSlider($widthScreen) {
    if ($widthScreen <= '480') {
      if (!$carousel.hasClass('slick-initialized')) {
        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          arrows: false,
          dots: true,
          rows: 5,
          slidesPerRow: 1,
          adaptiveHeight: true,
        })
      }
    } else {
      if ($carousel.hasClass('slick-initialized')) {
        $carousel.slick('unslick')
      }
    }
  }

  $(window)
    .ready(showSlider(widthScreen))
    .resize(function () {
      var widthScreen = $(window).width()
      showSlider(widthScreen)
    })
}

// Hide some jQuery slgs
// https://stackoverflow.com/questions/39152877/consider-marking-event-handler-as-passive-to-make-the-page-more-responsive
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault'),
    })
  },
}
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault'),
    })
  },
}
