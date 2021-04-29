$(document).ready(function () {
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

  $('.program-options-block-tabs--sctn-programs a').click(function (e) {
    e.preventDefault()
    var $searchId = $($(this).attr('href'))
    $(this)
      .parents('.program-options-block-tabs--sctn-programs')
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
