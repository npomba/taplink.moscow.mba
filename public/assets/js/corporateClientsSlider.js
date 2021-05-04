document.addEventListener('load', () => {
  $(document).ready(function () {
    if ($('.clients-slider').length) {
      if ($('.clients-slider').hasClass('slick-initialized')) {
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
    }
  })
})
