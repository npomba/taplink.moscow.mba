$(document).ready(function () {
  /*Табы программ в шапке*/
  $('.header-podmenu-tabs a.headerMenuTabs').mouseenter(function () {
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
    '.header-overlay, .header-podmenu-content .program-directions-list a, .header-podmenu-premium a, .header-podmenu-tabs a'
  ).click(function () {
    $('.header-podmenu').fadeOut(300)
    $('.header-mobile-podmenu').fadeOut(300)
    $('.header-overlay').fadeOut(300)
    $('.header-podmenu-toggle').removeClass('opened')
  })

  $(
    '.mobileAllProgramsLink, .main-logo, .program-options-block-list a, #switchToRuBtn, #switchToEnBtn, .onClickCloseMobileMenu'
  ).click(function () {
    $('.header-mobile-podmenu').fadeOut(300)
    $('.header-buter').removeClass('opened')
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

  /*Табы цен программ для мобилки*/
  // $('.program-price-tabs a').click(function (e) {
  //   e.preventDefault()
  //   var $searchId = $($(this).attr('href'))
  //   $('.program-price-tabs a').not($(this)).removeClass('active')
  //   $(this).addClass('active')
  //   $('.program-price-block').not($searchId).css('display', 'none')
  //   $searchId.css('display', 'block')
  // })
})
