//Maps - Luca Provenzano {lucaeprov@gmail.com}

function initialize() {
		var styles = [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
        var latlng = new google.maps.LatLng(-34.7816315, -58.2637997);
        var settings = {
            zoom: 15,
            disableDefaultUI: true,
            center: latlng,
            mapTypeControl: false,
            scrollwheel: false,
            mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
            navigationControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControlOptions: {
		      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
		    }
    };


		var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
		map.mapTypes.set('map_style', styledMap);
  		map.setMapTypeId('map_style');


		var image = 'http://i.imgur.com/hCu20lG.png';
		var myLatLng = new google.maps.LatLng(-34.7816315, -58.2637997);
		var beachMarker = new google.maps.Marker({
		      position: myLatLng,
		      map: map,
		      icon: image
		});

}
