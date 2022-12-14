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

  // overlay
  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("slow");
  });

  $(".btn_card").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-card__title").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "????????????????????, ?????????????? ???????? ??????",
          minlength: jQuery.validator.format("?????????????? {0} ??????????????!"),
        },
        phone: "????????????????????, ?????????????? ???????? ?????????? ????????????????",
        email: {
          required: "????????????????????, ?????????????? ???????? ??????????",
          email: "?????????????????????? ???????????? ?????????? ??????????",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#consultation form");
  validateForms("#order form");

  $("form").submit(function (e) {
    e.preventDefault();
    if (!$(this).valid()) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $("#consultation, #order").fadeOut();
      $(".overlay, #thanks").fadeIn("slow");

      $("form").trigger("reset");
    });
    return false;
  });

  //  Smooth scroll & pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});
