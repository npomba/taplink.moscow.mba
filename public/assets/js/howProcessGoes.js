document.addEventListener('load', () => {
  $(document).ready(function () {
    $('.process-step-tabs a').click(function (e) {
      e.preventDefault()
      var $searchId = $($(this).attr('href'))
      $('.process-step-tabs a').not($(this)).removeClass('active')
      $(this).addClass('active')
      $('.process-step-block').not($searchId).css('display', 'none')
      $searchId.css('display', 'block')
    })
  })
})
