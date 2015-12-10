var map;
var markers = [];

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });

}

function add_marker(lat, lng, string_info) {
    var myLatLng = {lat: lat, lng: lng};
    var infowindow = new google.maps.InfoWindow({
        content: string_info
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    marker.setMap(map);
}

function map_add_user(user_id) {
    d3.json('http://7450_image_api.wuzizheng.com/user/'+user_id+'.json', function(error, data) {
        if (error) return console.warn(error);
        for (var i in data) {
            if (data[i]['location'] != null) {
                add_marker(parseFloat(data[i]['location']['latitude']), parseFloat(data[i]['location']['longitude']), "<img src=\"" + data[i]['images']['standard_resolution']['url'] + "\">");
            }
        }
    });
}