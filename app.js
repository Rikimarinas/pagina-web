var mymap = L.map('mapTab').setView([0, 0], 1);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

var customIcon = L.icon({
    iconUrl: 'mi-icono.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("La geolocalización no es soportada por este navegador.");
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    L.marker([lat, lng], {icon: customIcon}).addTo(mymap);
    mymap.setView([lat, lng], 13);
}

document.getElementById('saveLocationBtn').addEventListener('click', getLocation);
