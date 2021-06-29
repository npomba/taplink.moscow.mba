if ($('.accordion-block').length) {
  $('.accordion-block').click(function (e) {
    var target = $(e.target)
    if (target.parents('.trigger').length) return

    if ($(window).width() > '767') {
      $('.accordion-block').not($(this)).removeClass('opened')
      $('.accordion-content')
        .not($(this).find('.accordion-content'))
        .slideUp(300)
      $(this).toggleClass('opened')
      $(this)
        .find('.accordion-content')
        .slideToggle({
          duration: 300,
          step: function () {
            if ($(this).css('display') == 'block') {
              $(this).css('display', 'grid')
            }
          },
          complete: function () {
            if ($(this).css('display') == 'block') {
              $(this).css('display', 'grid')
            }
          }
        })
    } else {
      $(this).toggleClass('opened')
      $(this)
        .find('.accordion-content')
        .slideToggle({
          duration: 300,
          step: function () {
            if ($(this).css('display') == 'block') {
              $(this).css('display', 'grid')
            }
          },
          complete: function () {
            if ($(this).css('display') == 'block') {
              $(this).css('display', 'grid')
            }
          }
        })
    }
  })
}
