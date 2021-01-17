ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.938633, 30.323118],
        zoom: 16,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Гостиница Котейка",
        balloonContent: "ул. Большая Конюшенная, д 19",
      },
      {
        iconLayout: "default#image",
        iconImageHref:
          "https://github.com/DevMinrat/cats-hotel/blob/dev/dist/assets/images/map-cat.png?raw=true",
        iconImageSize: [62, 88],
        iconImageOffset: [-35, -58],
      }
    );
  myMap.geoObjects.add(myPlacemark);

  myMap.behaviors.disable("scrollZoom");
});
