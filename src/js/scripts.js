$(document).ready(function () {
  $(".carousel__slides").slick({
    speed: 1100,
    adaptiveHeight: true,
    autoplay: true,

    prevArrow:
      '<button type="button" class="slick-prev slick-arrow"><img src="icons/chevron-left.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow"><img src="icons/chevron-right.png"/></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });
});
