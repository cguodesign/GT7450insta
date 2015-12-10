function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

}

function add_marker(lat, lng, string_info) {
    var myLatLng = {lat: -25.363, lng: 131.044};
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    var infowindow = new google.maps.InfoWindow({
        content: "a"
    });
}