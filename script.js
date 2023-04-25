function initMap() {
  var placeId = "ChIJ81__gQW4woARflh0Q0L17g4";
  var request = {
    placeId: placeId,
    fields: ["opening_hours"]
  };
  var service = new google.maps.places.PlacesService(document.createElement("div"));
  service.getDetails(request, function(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK && place.opening_hours) {
      var hours = place.opening_hours.weekday_text.join("<br>");
      document.getElementById("store-hours").innerHTML = hours;
    } else {
      document.getElementById("store-hours").innerHTML = "Store hours not available.";
    }
  });

 
  var mapContainer = document.getElementById("map");
  var storeHoursContainer = document.createElement("div");
  storeHoursContainer.id = "store-hours-container";
  storeHoursContainer.innerHTML = "<h3>Store Hours</h3><div id='store-hours'></div>";
  mapContainer.appendChild(storeHoursContainer);
}
function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    T.style.display = "block";  // <-- Set it to block
}