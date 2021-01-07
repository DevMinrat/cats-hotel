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
