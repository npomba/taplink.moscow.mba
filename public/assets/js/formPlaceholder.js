$(document).ready(function () {
  $('.simple-form input, .simple-form textarea').keyup(function () {
    if ($(this).val() !== '' && $(this).val().length > 0) {
      $(this).addClass('texted')
    } else {
      $(this).removeClass('texted')
    }
  })
})
