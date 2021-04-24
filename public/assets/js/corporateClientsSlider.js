$(document).ready(function () {
  if ($('.clients-slider').length) {
    $('.clients-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 800,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
  }
})
