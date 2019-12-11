// ==================================================================
//                        GOOGLE Map API 
// ==================================================================
  var mymap = L.map('map').setView([40.60287514330199, -75.46980857849121], 17);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=o1awywJOilzglF95byk3', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      crossOrigin: true
      }).addTo(mymap);
      
var marker = L.marker([40.60287514330199, -75.46980857849121]).addTo(mymap);
marker.bindPopup("<b>Dr.Fixerz!</b><br>705 Hamilton St, Allentown, PA 18101").openPopup();
