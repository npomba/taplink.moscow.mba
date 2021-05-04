document.addEventListener('load', () => {
  if ($('.circle-js').length > 0) {
    $('.circle-js').circleProgress({
      startAngle: (-Math.PI / 4) * -8,
      size: 124,
      thickness: 3,
      emptyFill: '#E6E6E6',
      fill: '#FF3535',
    })
  }

  if ($('.circle-js-big').length > 0) {
    $('.circle-js-big').circleProgress({
      startAngle: (-Math.PI / 4) * -8,
      size: 302,
      thickness: 3,
      emptyFill: '#333230',
      fill: '#FF3535',
    })
  }
})
