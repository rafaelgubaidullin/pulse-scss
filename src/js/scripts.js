$(document).ready(function () {
  $(".carousel__slides").slick({
    speed: 1100,
    // adaptiveHeight: true,
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
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__cards")
        .removeClass("catalog__cards_active")
        .eq($(this).index())
        .addClass("catalog__cards_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-card__content")
          .eq(i)
          .toggleClass("catalog-card__content_active");
        $(".catalog-card__list").eq(i).toggleClass("catalog-card__list_active");
      });
    });
  }

  toggleSlide(".catalog-card__link");
  toggleSlide(".catalog-card__back");
});
