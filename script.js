let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 22.7866, lng: 86.166 },
    zoom: 8,
  });
}
