$(".btn-book, .banner__link").magnificPopup({
  type: "inline",
  preloader: false,
  focus: "#name",

  callbacks: {
    beforeOpen: function () {
      if ($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = "#name";
      }
    },
  },
});

$(".filters-btn").magnificPopup({
  type: "inline",
  preloader: false,

  callbacks: {
    beforeOpen: function () {
      if ($(window).width() < 700) {
        this.st.focus = false;
      }
    },
  },
});
