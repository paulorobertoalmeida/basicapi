function iniciarMap() {
    var coord = {lat:41.3749694 ,lng:2.1515439 };
    var map = new google.maps.Map(document.getElementById("map"),{
      zoom: 10,
      center: coord  
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}