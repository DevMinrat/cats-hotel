$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
  $("#nav").toggleClass("active");
  $(".header").toggleClass("active");
});
