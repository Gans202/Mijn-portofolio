let map = L.map('map').setView([51.22982, 4.51090], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let bounds = [[51.22, 4.50], [51.24, 4.54]];




L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

let Marker = L.marker([51.22789, 4.52371]).addTo(map);
Marker.bindPopup("<b>Wijnegem</b><br>2110").openPopup();
