/*Для опрацювання всього документу*/

/*Слайдер на головній сторінці*/
var slides = document.querySelectorAll('#slides .slide1');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
 slides[currentSlide].className = 'slide1';
 currentSlide = (currentSlide+1)%slides.length;
 slides[currentSlide].className = 'slide1 showing';
}
/*Googlemaps*/
      function initialize() {
        var fenway = {lat: 42.351442, lng: -83.065371};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: fenway,
          zoom: 13
        });
        var panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'), {
              position: fenway,
              pov: {
                heading: 34,
                pitch: 10
              }
            });
          var tmr = {lat: 42.351442, lng: -83.065371};
          var marker = new google.maps.Marker({position: tmr, map: map});
        map.setStreetView(panorama);
      }
/*Слайдер на сторінці Галерея*/
