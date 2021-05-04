$(document).ready(function () {
  $('.training-modul').click(function () {
    $(this).toggleClass('opened')
    $(this).next('.training-content').slideToggle(300)
  })
})
