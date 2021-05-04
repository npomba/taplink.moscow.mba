if ($('.faq-block').length) {
  $('.faq-block').click(function () {
    if ($(window).width() > '767') {
      $('.faq-block').not($(this)).removeClass('opened')
      $('.faq-answer').not($(this).find('.faq-answer')).slideUp(300)
      $(this).toggleClass('opened')
      $(this).find('.faq-answer').slideToggle(300)
    } else {
      $(this).toggleClass('opened')
      $(this).find('.faq-answer').slideToggle(300)
    }
  })
}
