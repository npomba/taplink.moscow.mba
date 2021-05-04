document.addEventListener('load', () => {
  $(document).ready(function () {
    if ($('.simple-form input, .simple-form textarea').length) {
      $('.simple-form input, .simple-form textarea').keyup(function () {
        if ($(this).val() !== '' && $(this).val().length > 0) {
          $(this).addClass('texted')
        } else {
          $(this).removeClass('texted')
        }
      })
    }
  })
})
