//= ../../../node_modules/slick-carousel/slick/slick.js
//= ../../../node_modules/jquery-form-styler/dist/jquery.formstyler.js
//= ../../../node_modules/magnific-popup/dist/jquery.magnific-popup.js

$(function () {
  //= components/slick.js
  //= components/form-styler.js
  //= components/magn-popup.js
  //= components/burger-menu.js

  // Menu

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  $(window).scroll(function () {
    $("#burger_menu").removeClass("menu-on");
    $(".menu__nav").removeClass("active");
    $("#header").removeClass("active");
  });

  // Catalog

  let $window = $(window),
    $aside = $("#catalog-aside");

  function resize() {
    $aside.removeClass("mfp-hide filter-popup");

    if ($window.width() < 1082) {
      return $aside.addClass("mfp-hide filter-popup");
    }
  }
  $window.resize(resize).trigger("resize");
});

//= components/map.js
