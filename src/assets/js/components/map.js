ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.938635, 30.323118],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Котейка",
        balloonContent: "ул. Большая Конюшенная, д 19",
      },
      {
        iconLayout: "default#image",
        iconImageHref:
          "https://github.com/DevMinrat/cats-hotel/blob/dev/dist/assets/images/logo.png?raw=true",
        iconImageSize: [32, 58],
      }
    );
  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable("scrollZoom");
});
