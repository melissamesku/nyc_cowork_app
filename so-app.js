$(document).ready(function() {
  $.getJSON("data.js", function(json1) {
    $.each(json1, function(key, data) {
      var latLng = new google.maps.LatLng(data.lat, data.lng); 
      // Creating a marker and putting it on the map
      var marker = new google.maps.Marker({
          position: latLng,
          title: data.name
      });
      marker.setMap(map);
    });
  });
});

var map;

var initialize = function() {
  var mapOptions = {
    center: new google.maps.LatLng(40.696829, -73.935232),
    zoom: 7,
    streetViewControl: false,
    mapTypeControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
}

// var map = new google.maps.Map(document.getElementById('map-canvas'), {
//     zoom: 12,
//     // minZoom: 10,
//     streetViewControl: false,
//     mapTypeControl: false,
//     center: new google.maps.LatLng(40.696829, -73.935232),
//     // Thom included the line below in his example but map wouldn't work here until he commented it out
//     // mapTypeId: google.maps.mapTypeId.ROADMAP
//   });
