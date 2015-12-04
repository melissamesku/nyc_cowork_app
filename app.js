console.log("works");




// var locations = [{  lat: 40.708613, lng: -73.948300,
// 					lat: 40.624960, lng: -73.914378,
// 					lat: 40.680721, lng: -73.916512,
// 					lat: 40.726519, lng: -73.912282,
// 				}]

var locations = {
	[lat: 40.708613, lng: -73.948300],
	[lat: 40.624960, lng: -73.914378]
}

var initialize = function() {
	var map = new google.maps.Map(document.getElementById('map-canvas'), {
		zoom: 12,
		// minZoom: 10,
		streetViewControl: false,
		mapTypeControl: false,
		center: new google.maps.LatLng(40.696829, -73.935232),
		// Thom included the line below in his example but map wouldn't work here until he commented it out
		// mapTypeId: google.maps.mapTypeId.ROADMAP
	});

	// create multiple markers from locations array above - NO WORKING
	for (var i=0; i < locations.length; i++) {
		var marker = new google.maps.Marker ({
			map: map,
			position: locations[i],
			title: "Map item"
		});
	}
	
	// create single marker
	// var marker = new google.maps.Marker ({
	// 	map: map,
	// 	icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
	// 	// must be latitude & longitude - to get, go to Google maps, then control + click on a location, select "what's here?", lat/long will appear below
	// 	position: lat: 40.661811, lng: -73.973204},
	// 	// message shows up upon mouseover
	// 	title: "This is the park. Click to see what happens!"
	// });

	// info window for when user clicks on marker
	marker.addListener('click', function() {
		new google.maps.InfoWindow({
			content: "Hey! This is the click window."
		}).open(map, marker);
	});

}

google.maps.event.addDomListener(window, 'load', initialize);
