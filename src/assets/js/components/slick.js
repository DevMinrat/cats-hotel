// rooms slider

var rooms = $(".rooms__slider");

rooms.slick({
  dots: true,
  arrows: false,
});

$("#rooms-arrow-prev").on("click", function (event) {
  event.preventDefault();

  rooms.slick("slickPrev");
});

$("#rooms-arrow-next").on("click", function (event) {
  event.preventDefault();

  rooms.slick("slickNext");
});

// end rooms slider

// reviews slider

var reviews = $(".reviews__slider");

reviews.slick({
  dots: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 2,

  variableWidth: true,
});

$("#reviews-arrow-prev").on("click", function (event) {
  event.preventDefault();

  reviews.slick("slickPrev");
});

$("#reviews-arrow-next").on("click", function (event) {
  event.preventDefault();

  reviews.slick("slickNext");
});

// end reviews slider

// room-card slider

$(".room-card__slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".room-card__slider-nav",
});
$(".room-card__slider-nav").slick({
  slidesToShow: 3,
  asNavFor: ".room-card__slider-for",
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});

// end room-card slider
